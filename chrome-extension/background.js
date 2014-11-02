if ("undefined" == typeof(CloudMagic)) {
  var CloudMagic = {};
};


// CONSTANTS
            
            
CloudMagic.Background = function () {
    var self = this;
    var proto = CloudMagic.Background.prototype;
    
    self.URLPREFIX_ = "URL===>>> ";
    self.MAX_RESULT_LEN_ = 5;

// VERSION_START //
	self.ts_ = "1316597833";
	self.CMHST = "www.cloudmagic.com";
// VERSION_END //
    
    self.cloudmagicgui_ = document.getElementById("cloudmagicgui");
    self.cloudmagicgui_.SetMaxSearchResult(self.MAX_RESULT_LEN_, self.MAX_RESULT_LEN_);
    self.desc_ = "CloudMagic Search";
    self.suggesttimer_ = null;
    
    proto.LOG = function(msg) {
        try {
            if (console) {
                console.log("CM" + "[bg]: " + msg);
            }
        } catch (e) {
        }
    };
    
    proto.OpenPage = function(url, isnew) {
        if (isnew == false) {
            chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.update(tab.id, {url: url}, function(tab) {
                });
            });
        } else {
            chrome.tabs.create({url: url}, function(tab) {
            });
        }
    };
    
    proto.GetBaseMailUrl = function(email) {
        var url = "http://mail.google.com/mail/b/" + email + "/?";
        //self.LOG(url);
        return url;
    };
    
    proto.RemoveHTMLEntities = function(content) {
        content = content.replace(/&lt;/ig, ' ');
        content = content.replace(/&gt;/ig, ' ');
        content = content.replace(/&amp;/ig, '&');
        return content;
    };
    
    proto.GetMailBoxName = function(mailboxtype) {
        var mailboxname = "";
        if (mailboxtype == 	0) {
            mailboxname = "drafts";
        } else if (mailboxtype == 	1) {
            mailboxname = "inbox";
        } else if (mailboxtype == 	2) {
            mailboxname = "sent";
        }
        return mailboxname;
    };
    
    proto.getMatchingRecords = function(text, suggest) {
        //self.LOG("Searching START");
        var results = [];
        var totalcount = 0;
        var response = self.cloudmagicgui_.GetAutoCompleteWithWait(text, 2, "all");//only mails
        var records = JSON.parse(response);
        for (var index = 0; index < records.mails.length && index < self.MAX_RESULT_LEN_; index++) {
            //self.LOG("<dim>Mails: </dim>" + records.mails[index].subject);
            var mail = records.mails[index];
            var description = "<url>Mails: </url>" + self.RemoveHTMLEntities(mail.subject) + "<dim> | </dim>";
            var fromtodetails = "";
            if (mail.type == 2 || mail.type == 0) { // Sent mail || Draft
                if (mail.to.length> 0) {
                    if (mail.to[0].n.length > 0) {
                        fromtodetails = mail.to[0].n;
                    } else {
                        fromtodetails = mail.to[0].e;
                    }
                }
            
                if (fromtodetails.length == 0 && mail.cc.length > 0) {
                    if (mail.cc[0].n.length > 0) {
                        fromtodetails = mail.cc[0].n;
                    } else {
                        fromtodetails = mail.cc[0].e;
                    }
                }
                
                if (fromtodetails.length == 0 && mail.bcc.length > 0) {
                    if (mail.bcc[0].n.length > 0) {
                        fromtodetails = mail.bcc[0].n;
                    } else {
                        fromtodetails = mail.bcc[0].e;
                    }
                }
                
                if (fromtodetails.length == 0 ) {
                    if (mail.type == 0) {
                        fromtodetails = "<dim>Draft</dim>";
                        isdraft = true;
                    } else {
                        fromtodetails = "<unknown>";
                    }
                }
            } else { // received mail
                if (mail.sname.length > 0) {
                    fromtodetails = mail.sname;
                }  else if (mail.from.length > 0) {
                    fromtodetails = mail.from;
                } else {
                    fromtodetails = "";
                }
            }
            
            description += (fromtodetails.replace(/[<|>]/g, '') + "<dim> | </dim>");
            description += self.RemoveHTMLEntities(mail.content);
          
            var mailurl = self.GetBaseMailUrl(mail.accountemail) + "#" +
                          self.GetMailBoxName(mail.type) + "/" +
                          mail.threadid;
            
             // Replace any extraneous whitespace to make it look nicer.
            description = description.replace(/[\n\t]/g, ' ');
            description = description.replace(/[\n|\r]/g, ' ');
            description = description.replace(/ {2,}/g, ' ');
            description = description.replace(/[&]/g, '&amp;');
            
            results.push({
              content: self.URLPREFIX_ + mailurl,
              description: description
                           
            });
            //self.LOG("M Pushed: " + index);
            totalcount++;
        }
        
        if (totalcount < self.MAX_RESULT_LEN_) {
            response = self.cloudmagicgui_.GetAutoCompleteWithWait(text, 8, "all");//only events
            //self.LOG(response);
            records = JSON.parse(response);
            for (var index = 0; index < records.events.length && index < self.MAX_RESULT_LEN_; index++) {
                var event = records.events[index];
                var description = "<url>Events: </url>" + self.RemoveHTMLEntities(event.what) + "<dim> | </dim>";
                description += self.RemoveHTMLEntities(event.description);
                description += " ";
                description += self.RemoveHTMLEntities(event.where);
                description = description.replace(/[\n\t]/g, ' ');
                description = description.replace(/[\n|\r]/g, ' ');
                description = description.replace(/ {2,}/g, ' ');
                description = description.replace(/[&]/g, '&amp;');
                
                results.push({
                  content: self.URLPREFIX_ + event.viewurl,
                  description: description
                });
                //self.LOG("D Pushed: " + index);
                totalcount++;
            }
        }
        
        if (totalcount < self.MAX_RESULT_LEN_) {
            response = self.cloudmagicgui_.GetAutoCompleteWithWait(text, 4, "all");//only docs
            //self.LOG(response);
            records = JSON.parse(response);
            for (var index = 0; index < records.docs.length && index < self.MAX_RESULT_LEN_; index++) {
                var doc = records.docs[index];
                var description = "<url>Docs: </url>" + self.RemoveHTMLEntities(doc.title) + "<dim> | </dim>";
                description += doc.owner.replace(/[<|>]/g, '') + "<dim> | </dim>";
                description += self.RemoveHTMLEntities(doc.content);
                description = description.replace(/[\n\t]/g, ' ');
                description = description.replace(/[\n|\r]/g, ' ');
                description = description.replace(/ {2,}/g, ' ');
                description = description.replace(/[&]/g, '&amp;');
                
                results.push({
                  content: self.URLPREFIX_ + doc.viewurl,
                  description: description
                });
                //self.LOG("D Pushed: " + index);
                totalcount++;
            }
        }
        
        if (totalcount < self.MAX_RESULT_LEN_) {
            response = self.cloudmagicgui_.GetAutoCompleteWithWait(text, 1, "all");//only contacts
            //self.LOG(response);
            records = JSON.parse(response);
            for (var index = 0; index < records.contacts.length && index < self.MAX_RESULT_LEN_; index++) {
                var contact = records.contacts[index];
                var description = "<url>Contacts: </url>" + contact.name.replace(/[<|>]/g, '');
                description += "<dim> ";
                if (contact.email && contact.email.length != 0) { // do only if 2emails exists 
                    for (var j = 0; j < contact.email.length; j++) {
                        description += (contact.email[j].w.replace(/[<|>]/g, '') + " ");
                    }
                }
                
                if (contact.phone && contact.phone.length != 0) { // do only if 2emails exists 
                    var numbers = contact.phone.split("\n");
                    for (var j = 0; j < numbers.length; j++) {
                        description += (numbers[j].replace(/^[\s|\']*/, "").replace(/[\s|\']*$/, "").replace(/[<|>]/g, '') + " ");
                    }
                }
                
                description += "</dim>";
                
                //self.LOG(description);
                description = description.replace(/[\n\t]/g, ' ');
                description = description.replace(/[\n|\r]/g, ' ');
                description = description.replace(/ {2,}/g, ' ');
                description = description.replace(/[&]/g, '&amp;');
                var contacturl = "";
                if (contact.contactbase.length > 0) {                
                    var baseurl = self.GetBaseMailUrl(contact.accountemail);        
                    var contacturl = baseurl + "?shva=1#contact/" + encodeURIComponent(contact.contactbase);
                }
                
                results.push({
                  content: self.URLPREFIX_ + contacturl,
                  description: description
                });
                //self.LOG("C Pushed: " + index);
                totalcount++;
            }
        }
        
         if (totalcount < self.MAX_RESULT_LEN_) {
            response = self.cloudmagicgui_.GetAutoCompleteWithWait(text, 16, "all");//only contacts
            //self.LOG(response);
            records = JSON.parse(response);
            for (var index = 0; index < records.tweets.length && index < self.MAX_RESULT_LEN_; index++) {
                var tweet = records.tweets[index];
                var description = "<url>Tweets: </url>" + self.RemoveHTMLEntities(tweet.owner) + " " + self.RemoveHTMLEntities(tweet.tweet);
                //self.LOG(description);
                description = description.replace(/[\n\t]/g, ' ');
                description = description.replace(/[\n|\r]/g, ' ');
                description = description.replace(/ {2,}/g, ' ');
                description = description.replace(/[&]/g, '&amp;');
                
                var tweeturl = "http://twitter.com/#!/" + tweet.fromuserdetails.screenname 
                               + "/statuses/" + tweet.rowuid;   
                results.push({
                  content: self.URLPREFIX_ + tweeturl,
                  description: description
                });
                //self.LOG("C Pushed: " + index);
                totalcount++;
            }
        }
        
        chrome.omnibox.setDefaultSuggestion({
            description: self.desc_
        });
        suggest(results);
    };    
    
    proto.Initilize = function() {
        chrome.omnibox.setDefaultSuggestion({
            description: self.desc_
        });
        
        var protocol = "chrome-extension:";
        var bghtml = "background.html";
        var bgurl = chrome.extension.getURL(bghtml);
        self.baseuuid_ = bgurl.substring(protocol.length + 2, bgurl.length - bghtml.length - 1);
        //alert("self.baseuuid_:"+self.baseuuid_);
        
        chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
            if (self.suggesttimer_) {
                clearTimeout(self.suggesttimer_);
                self.suggesttimer_ = null;
            }
            if (text == '' || text.length < 3) {
                //self.LOG("Empty text");
                return;
            }
            
            self.suggesttimer_ = window.setTimeout(function() {
                    //self.LOG("Search text: " + text);
                    
                    chrome.omnibox.setDefaultSuggestion({
                        description: "Searching..."
                    });
                    
                    window.setTimeout(function() {
                        self.getMatchingRecords(text, suggest)
                        }, 0);
                }, 500);
        });
        
        chrome.omnibox.onInputStarted.addListener(function() {
        });

        chrome.omnibox.onInputCancelled.addListener(function() {
        });
                        
        chrome.omnibox.onInputEntered.addListener(function(text) {
            var reg = new RegExp("^" + self.URLPREFIX_);
            // check the text is an url or not
            if (reg.test(text) == true) {
                //self.LOG("Open: " + text.substring(self.URLPREFIX_.length, text.length));
                self.OpenPage(text.substring(self.URLPREFIX_.length, text.length), false);
                return;
            }
            
            // if not a complete url, try search in our direct search page
            var searchurl = "chrome-extension://" + self.baseuuid_ + "/res/cloudmagic.html?ts=" + 
                            self.ts_ + "#search" + "?category=all&account=all&query=" + 
                            text;
            //self.LOG("Open: " + searchurl);
            self.OpenPage(searchurl, false);
        });
    
        // procedure to check if this is anew version of CloudMagic, 
        // if yes, open the welcome page
        window.setTimeout(function() {
            try {
                var result = self.cloudmagicgui_.IsNewInstallation(true); // is it chrome or not
                if (result == "1") {
                    chrome.tabs.create({'url': 'http://' + self.CMHST + '/welcome.php?s=n'},function(){});
                } 
                self.cloudmagicgui_.UpdateVersion(true);
            } catch (e) {
            }
        }, 0);
        
        
        // this will help to open any url in a new tab, not in popup.
        // popup are always iritating as this will create lot of  window 
        // and it is mess to handle for users
        //self.LOG("CloudMagicOpenInTab");
        chrome.extension.onRequest.addListener (
            function(request, sender, sendResponse) {
                alert(request.requestType);
                if (request.requestType == "CloudMagicOpenInTab") {
                    //self.LOG(request.openUrl);
                    chrome.tabs.create({'url': request.openUrl}, function(){});
                } else if (request.requestType == "CloudMagicOpenSearchCategory") {
                    //self.LOG(request.openUrl);
                    alert("CloudMagicOpenSearchCategory BG");
                    var searchurl = "chrome-extension://" + self.baseuuid_ + "/res/cloudmagic.html?ts=" + 
                            self.ts_ + "#search" + "?category=" + encodeURIComponent(request.openCategory) + "&query=";
                    self.OpenPage(searchurl, false);
                } 
            }
        );
        
        // A generic onclick callback function.
        function MenuClick(info, tab) {
            var text = (info.selectionText && info.selectionText != "undefined" && 
                        info.selectionText.length > 0)?info.selectionText:"";
            var searchurl = "chrome-extension://" + self.baseuuid_ + "/res/cloudmagic.html?b=gc&ts=" + 
                            self.ts_ + "#search" + "?category=all&account=all&query=" + encodeURIComponent(text);
            //self.LOG("Open: " + searchurl);
            self.OpenPage(searchurl, true);
        }

        // Create one test item for each context type.
        var contexts = ["page","link","editable","image","video", "audio"];
        for (var i = 0; i < contexts.length; i++) {
          var context = contexts[i];
          var id = chrome.contextMenus.create({"title": "CloudMagic", "contexts":[context],
                                               "onclick": MenuClick});
        }
        
        var id = chrome.contextMenus.create({"title": "Search CloudMagic for '%s'", "contexts":["selection"],
                                               "onclick": MenuClick});
    }
};

var bghandler = new CloudMagic.Background();
bghandler.Initilize();

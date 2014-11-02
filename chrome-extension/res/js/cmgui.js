if ("undefined" == typeof(CloudMagic)) {
  var CloudMagic = {};
};

var cmjQuery_ = null;
// VERSION_START //
 CloudMagic.CMSCRIPTVER = "3_19_Beta";
 CloudMagic.cmDebug = "0";
 CloudMagic.CMSCRIPTTS = "1331205797";                         
 CloudMagic.CMSHOWNEWFEATUREMSG = "1";
 CloudMagic.CMHST = "www.cloudmagic.com"
// VERSION_END //

CloudMagic.Interface = function() {
    var self = this;
    var proto = CloudMagic.Interface.prototype;
    self.CMPTL = "https:"

    proto.WaitAndExecute = function(waitOptions, attempts) {
        var DELAY = 100;
        var ATTEMPTS = 2000;
        attempts = attempts || 0;
        if (waitOptions.condition()) {
            waitOptions.success();
        } else {
            // try waiting
            if(attempts < ATTEMPTS) {
                //CMLOG(" Attempts count: " + (attempts + 1));
                var self = this;
                var _arguments = arguments;
                setTimeout(function(){_arguments.callee.call(self, 
                                                             waitOptions, 
                                                             ++attempts); 
                                      }, DELAY);
            } else {
                self.CMLOG("Failed to load");
            }
        }
    };

    proto.InsertJS = function(id, url, waitOptions) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        if (id != null) {
          script.id = id;
        }
        script.type = "text/javascript";
        script.src = url;
        script.async = true;
        head.appendChild(script);
        // if specified wait,  handle it
        if (waitOptions) {
            self.WaitAndExecute(waitOptions);
        }
    };

    proto.GetURLParameters = function(pname){  
        pname = pname.replace(/[\[]/,"/\[").replace(/[\]]/,"\\\]");  
        var regexS = "[\\?&]" + pname + "=([^&#]*)";  
        var regex = new RegExp(regexS);  
        var results = regex.exec(window.location.href);  
        
        if(results == null) {
            return "";  
        } else {
            return results[1];
        }
    };

    proto.InsertCSS = function(id, url) {
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        if (id != null) {
          link.id = id;
        }
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen";
        link.href = url;
        head.appendChild(link);
    };

     proto.InsertCSSPrint = function(id, url) {
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        if (id != null) {
          link.id = id;
        }
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "print";
        link.href = url;
        head.appendChild(link);
    };

    proto.LoadWidgetApp = function(attempts) {
        var ATTEMPTS = 20;
        var DELAY = 500;
        try {
            
            var isloaded = document.body.getAttribute("CloudMagic_Loaded");
            if (isloaded) {
                //alert("LOADED: "+ isloaded);
                return true;
            }
            
            self.widgetapp = new window.CloudMagic.Widget();
            self.widgetapp.CreateGmailWidget(0);
            document.body.setAttribute("CloudMagic_Loaded", "1");
        } catch(e) {
            attempts = attempts || 0;
            self.CMLOG("cmPlugin 22 - Invoke Error[" + attempts + "]" + e);
            if(attempts < ATTEMPTS){
                var _arg = arguments;
                setTimeout(function(){_arg.callee.call(self, ++attempts); }, DELAY);
            } else {
                self.CMLOG("cmPlugin - Terminated");
                return;
            }
        }
    };

    proto.LoadWidget = function(attempts) {
        //CMLOG("Test");
        var ATTEMPTS = 20;
        var DELAY = 500;
        try {
            var host = window.top.location.host;
            
            if (host.indexOf("mail.google.com" ) != -1) { // if Gmail
            if (window.top.document.getElementById("canvas_frame").contentWindow != window) {
                self.CMLOG("Window not matching");
                return;
            }
            }
            
            // wait till script ver loaded
            if ("undefined" == typeof(CloudMagic.CMSCRIPTVER)) {
                throw "CloudMagic.CMSCRIPTVER not loaded";
            }
            
            self.CMPTL = window.location.protocol;
            if (CloudMagic.cmDebug != "0") {
                self.CMPTL = "http:";
            }
        
            var ischrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
            self.urlbase_ = "";
            if (ischrome == true) {
                var protocol = "chrome-extension:";
                var baseuuid = document.body.getAttribute("CloudMagic_Ext_UUID");
                self.urlbase_ = protocol + "//" + baseuuid + "/res/";
            } else {
                self.urlbase_ = "chrome://cloudmagic/content/res/";
            }
        
            self.InsertCSS("cmExtNode_app_css1", self.urlbase_ + "css/common.css" + "?ts=" + CloudMagic.CMSCRIPTTS);
            self.InsertCSS("cmExtNode_app_css2", self.urlbase_ + "css/ext.css" + "?ts=" + CloudMagic.CMSCRIPTTS);
            self.InsertCSS("cmExtNode_app_css3", self.urlbase_ + "css/jquery.ui.core.css" + "?ts=" + CloudMagic.CMSCRIPTTS);
            self.InsertCSS("cmExtNode_app_css4", self.urlbase_ + "css/jquery.ui.resizable.css" + "?ts=" + CloudMagic.CMSCRIPTTS);
            
            self.InsertCSSPrint("cmExtNode_print_css", self.urlbase_ + "css/print.css");
        
            self.InsertJS("cmExtNode_app_js", self.urlbase_ + "js/popup_min.js" + "?ts=" + CloudMagic.CMSCRIPTTS, 
                {
                    condition:  function() {
                                    return (typeof cmjQuery_  != "undefined" && 
                                                                typeof window.CloudMagic.Widget != "undefined");
                                },
                    success:    function() {
                                    self.LoadWidgetApp();
                                }
                }
            );
            
        } catch (e) {
            attempts = attempts || 0;
            self.CMLOG("cmPlugin 11 - Invoke Error[" + attempts + "] : " + e);
            if(attempts < ATTEMPTS){
                var _arg = arguments;
                setTimeout(function(){_arg.callee.call(self, ++attempts); }, DELAY);
            } else {
                self.CMLOG("cmPlugin - Terminated");
                return;
            }
        }
    };

    proto.CMLOG = function(message) {
        var cmextdebug = false;
        if (window.top.console) {
            window.top.console.log(message);
        }
        if (window.top.console && cmextdebug == true) {
            alert(message);
        }
    }
};

var cloudmagicinterface = new CloudMagic.Interface();
cloudmagicinterface.LoadWidget(0);



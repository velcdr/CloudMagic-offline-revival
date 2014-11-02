if ("undefined" == typeof(CloudMagic)) {
  var CloudMagic = {};
};

CloudMagic.InterfaceLoader = function() {
    var self = this;
    var proto = CloudMagic.InterfaceLoader.prototype;
    
    self.cmextid = "cmExtNode";
    // VERSION_START //
	self.CMSCRIPTVER = "3_19_Beta";
	self.cmDebug = "0";
	self.CMHST = "www.cloudmagic.com";
	// VERSION_END //
    self.CMPTL = "https:"
	
    proto.Inject = function() {
        try {
            var doc = unsafeWindow.document;

            if (doc.getElementById(self.cmextid + "_initapp_js") && 
               !doc.getElementById("cmInterfacePlugin")) {
                var scriptnode = doc.getElementById(self.cmextid + "_initapp_js");
                if (scriptnode) {
                    scriptnode.parentNode.removeChild(scriptnode);
                }
                scriptnode = doc.getElementById(self.cmextid + "_app_css1");
                if (scriptnode) {
                    scriptnode.parentNode.removeChild(scriptnode);
                }
                scriptnode = doc.getElementById(self.cmextid + "_app_css2");
                if (scriptnode) {
                    scriptnode.parentNode.removeChild(scriptnode);
                }
                scriptnode = doc.getElementById(self.cmextid + "_app_css3");
                if (scriptnode) {
                    scriptnode.parentNode.removeChild(scriptnode);
                }
                scriptnode = doc.getElementById(self.cmextid + "_app_css4");
                if (scriptnode) {
                    scriptnode.parentNode.removeChild(scriptnode);
                }
                scriptnode = doc.getElementById(self.cmextid + "_print_css");
                if (scriptnode) {
                    scriptnode.parentNode.removeChild(scriptnode);
                }
                scriptnode = doc.getElementById(self.cmextid + "_app_js");
                if (scriptnode) {
                    scriptnode.parentNode.removeChild(scriptnode);
                }
            }


            if (!doc.getElementById(self.cmextid + "_initapp_js")) {
                self.CMPTL = unsafeWindow.location.protocol;
                // for debug
                if(self.cmDebug != "0") {
                    self.CMPTL = "http:";
                }
                var head = doc.getElementsByTagName("head")[0];
                
                var script = unsafeWindow.document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "chrome://cloudmagic/content/res/js/cmgui.js" + "?t=" + Number(new Date());
                script.setAttribute("id", self.cmextid + "_initapp_js");
                head.appendChild(script);
                
                return false;
            }
        } catch (e) {
            return false;
        }

        return true;
    };

    proto.InjectWrapper = function (attempts) {
        attempts = attempts || 0;
        TRY_COUNT = 10;
        TRY_DELAY = 35000;

        try {
            if (self.Inject() == true) {
                return;
            } else {
                if (attempts >= (TRY_COUNT - 1)) {
                    return;
                }
                var _arg = arguments;
                window.setTimeout(function () { _arg.callee.call(self, ++attempts); }, TRY_DELAY);
            }
        } catch(e) {
        }
    };
    
    proto.LoadInterface = function(attempts) {
        var ATTEMPTS = 120;
        var DELAY = 500;
        try {
            if (unsafeWindow && unsafeWindow.document && ( unsafeWindow.document.getElementById('guser') ||
														  unsafeWindow.document.getElementById('gbg') ||
														  unsafeWindow.document.getElementById('gb') ||
                                                          unsafeWindow.document.getElementById('gbmpdv') || 
                                                          unsafeWindow.document.getElementById('user-dropdown') ||
												          unsafeWindow.document.getElementById('screen-name'))) {
                self.InjectWrapper();
                return;
            }
        } catch(e) {
        }
        attempts = attempts || 0;
        if(attempts < ATTEMPTS){
            var _arg = arguments;
            window.setTimeout(function(){_arg.callee.call(self, ++attempts); }, DELAY);
        } 
    };
};

var cloudmagicinterfaceloader = new CloudMagic.InterfaceLoader();
cloudmagicinterfaceloader.LoadInterface();
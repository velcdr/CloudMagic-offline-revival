if ("undefined" == typeof(CloudMagic)) {
  var CloudMagic = {};
};

CloudMagic.Uninstall = function () {
    var self = this;
    var proto = CloudMagic.Uninstall.prototype;
    
    self.beingUninstalled = false;  
    self.surveyUrl = "https://spreadsheets.google.com/viewform?formkey=dHFNRDZUM1pJZm9Rc0l0cWRfVk9uRkE6MA";
    self.surveyUrl2 = "https://spreadsheets.google.com/a/webyog.com/viewform?formkey=dHFNRDZUM1pJZm9Rc0l0cWRfVk9uRkE6MA";
    self.id = "cloudmagic@webyog";

    proto.CMLOG = function(message) {
        if (window.top.console) {
            window.top.console.log(message);
        }
    };
    self.listener = {  
      onUninstalling: function(addon) {  
        if (addon.id == self.id) {  
            self.beingUninstalled = true;  
            
            var activeWin = Application.activeWindow;
            var found = false;
            // look at each open tab in the active browser window
            activeWin.tabs.forEach( function(tab) {
              if (tab.uri.spec == self.surveyUrl || tab.uri.spec == self.surveyUrl2) {
                tab.focus();
                found = true;
              }
            });
            
            if (found == false) {
                var uri = Components.classes["@mozilla.org/network/io-service;1"]
                                    .getService(Components.interfaces.nsIIOService)
                                    .newURI(self.surveyUrl, null, null);
                var survey_tab = Application.activeWindow.open(uri);
                survey_tab.focus();          
            }
        }  
      },  
      onOperationCancelled: function(addon) {  
        if (addon.id == self.id) {  
          self.beingUninstalled = (addon.pendingOperations & AddonManager.PENDING_UNINSTALL) != 0;  
        }  
      }
    };
    
    proto.RegisterUninstallListener = function() {  
        try {  
          Components.utils.import("resource://gre/modules/AddonManager.jsm");  
          AddonManager.addAddonListener(self.listener);  
        } catch (e) {
            cmuninstall.CMLOG(e);
        }    
    };
};


(function() {
    try {
        var cmuninstall = new CloudMagic.Uninstall();
        window.addEventListener('load', function() { 
                                            cmuninstall.RegisterUninstallListener();
	                                    }, false);
    } catch(e) {
        cmuninstall.CMLOG("Error: " + e);
    }

    
})();
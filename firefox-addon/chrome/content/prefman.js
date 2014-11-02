function CloudMagic_PrefManager() {
    var startPoint="mailbrowser.";

    var pref=Components.classes["@mozilla.org/preferences-service;1"].
        getService(Components.interfaces.nsIPrefService).
        getBranch(startPoint);

    var observers={};

    // whether a preference exists
    this.exists=function(prefName) {
        return pref.getPrefType(prefName) != 0;
    }

    // returns the named preference, or defaultValue if it does not exist
    this.getValue=function(prefName, defaultValue) {
        var prefType=pref.getPrefType(prefName);

        // underlying preferences object throws an exception if pref doesn't exist
        if (prefType==pref.PREF_INVALID) {
            return defaultValue;
        }

        switch (prefType) {
            case pref.PREF_STRING: return pref.getCharPref(prefName);
            case pref.PREF_BOOL: return pref.getBoolPref(prefName);
            case pref.PREF_INT: return pref.getIntPref(prefName);
        }
    }
    
   this.getMBPort = function() {
        // call overlay function which will parse mailbrowser.ini to get port
        var port = GetMailBrowserPort();
        return port;
    }
    
    this.MBlog = function(message) {
        var consoleService = Components.classes["@mozilla.org/consoleservice;1"]
                        .getService(Components.interfaces.nsIConsoleService);
        consoleService.logStringMessage(message);
    }
    
    this.changeMBContext = function(val, baseurl) {
        var sidebarTitle = document.getElementById("sidebar-title");
        // only if MailBorwser side bar is active
        if(sidebarTitle.value.indexOf('MailBrowser') != -1){
            var sidebar = document.getElementById('sidebar');
            if(sidebar){
                var doc = sidebar.contentDocument;
                var win = doc.defaultView;
                win.mbwidget.contactView.SetContextURL(baseurl);
                win.mbwidget.HandleContextChange(val);
            }
        }
        return true;
    }
    
    // sets the named preference to the specified value. values must be strings,
    // booleans, or integers.
    this.setValue=function(prefName, value) {
        var prefType=typeof(value);

        switch (prefType) {
            case "string":
            case "boolean":
                break;
            case "number":
                if (value % 1 != 0) {
                    throw new Error("Cannot set preference to non integral number");
                }
                break;
            default:
                throw new Error("Cannot set preference with datatype: " + prefType);
        }

        // underlying preferences object throws an exception if new pref has a
        // different type than old one. i think we should not do this, so delete
        // old pref first if this is the case.
        if (this.exists(prefName) && prefType != typeof(this.getValue(prefName))) {
            this.remove(prefName);
        }

        // set new value using correct method
        switch (prefType) {
            case "string": pref.setCharPref(prefName, value); break;
            case "boolean": pref.setBoolPref(prefName, value); break;
            case "number": pref.setIntPref(prefName, Math.floor(value)); break;
        }
    }

    // deletes the named preference or subtree
    this.remove=function(prefName) {
        pref.deleteBranch(prefName);
    }

    // call a function whenever the named preference subtree changes
    this.watch=function(prefName, watcher) {
        // construct an observer
        var observer={
            observe:function(subject, topic, prefName) {
                watcher(prefName);
            }
        };

        // store the observer in case we need to remove it later
        observers[watcher]=observer;

        pref.QueryInterface(Components.interfaces.nsIPrefBranchInternal).
            addObserver(prefName, observer, false);
    }

    // stop watching
    this.unwatch=function(prefName, watcher) {
        if (observers[watcher]) {
            pref.QueryInterface(Components.interfaces.nsIPrefBranchInternal)
                .removeObserver(prefName, observers[watcher]);
        }
    }
}
var cmpref = "cloudmagic.toolbar.button.visible";
function ManageCloudMagicToolbarIcon() {
	var prefs = Components.classes["@mozilla.org/preferences;1"]
	                      .getService(Components.interfaces.nsIPrefService);
	var prefbranch = prefs.getBranch(null);
	try {
		if (prefbranch.getBoolPref(cmpref)) {
		    return;
        }
	} catch(e) {
	    // ignore the error, will throw exception initially
	}
  
	var cmtoolbarbuttonid = "cloudmagic-toolbar-button";
	var insertafterid;
	// check for the proper toolbar
	var toolbarid = "nav-bar";	
	var toolbar = document.getElementById(toolbarid);
	if (toolbar) {
		insertafterid = "home-button";
	} else {
		toolbarid = "mail-bar";
		toolbar = document.getElementById(toolbarid);
		if (toolbar) {
			insertafterid = "button-stop";
		} else {
			toolbarid = "composeToolbar";
			toolbar = document.getElementById(toolbarid);
			if (toolbar) {
				insertafterid = "button-save";
			} else {
				return;
			}
		}
	}
  
	// check the button is avaialble in the currently visible set
	var currentbuttonset = toolbar.getAttribute(toolbar.hasAttribute("currentset") ? "currentset" : "defaultset");
	if (!currentbuttonset) {
	    return;
    }
	prefbranch.setBoolPref(cmpref, true);
	var ids = currentbuttonset.split(",");
	var len = ids.length;
	var j = -1;
	for (var i = 0; i < len; i++) {
		if (ids[i] == cmtoolbarbuttonid) {
		    // found in the list just return
		    return;
		}
		if (ids[i] == insertafterid) {
		    j = i;
        }
	}
  
  // not found try adding
	var newbuttonset;
	if (j == -1) {
		newbuttonset =  currentbuttonset + "," + cmtoolbarbuttonid;
	} else {
		var k = 0;
		for (var n = 0; n <= j ; n++) {
			k = currentbuttonset.indexOf(",", k) + 1;
		}
		newbuttonset =  currentbuttonset.slice(0, k) + 
		                cmtoolbarbuttonid + "," + 
		                currentbuttonset.slice(k);
	}
	toolbar.setAttribute("currentset", newbuttonset);
	toolbar.currentSet = newbuttonset;
	document.persist(toolbarid, "currentset");
	// call BrowserToolboxCustomizeDone() to tell Firefox to reinitialize the toolbars
	try {
		BrowserToolboxCustomizeDone(true);
	}
	catch (e) { 
	}
}

window.addEventListener("load", ManageCloudMagicToolbarIcon, false);


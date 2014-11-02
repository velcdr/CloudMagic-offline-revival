CloudMagic - Offline (revival) - Chrome and Firefox addon
==========================

CloudMagic Offline is a lightning fast, as-you-type search tool for Gmail. 
CloudMagic Offline locally indexes content from Gmail, Google Docs, and Google Contacts for offline searching within the browser. CloudMagic Offline stores all data on a local hard.

In the 2012 CloudMagic Offline has been discontinued and all users have been asked to switch to the new CloudMagic.

This repo is an effort to bring CloudMagic - Offline to life.

Initially I have:
- updated jQuery to v1.9.1 and all jQuery plugins, 
- modified code to work with the current Firefox and Chrome browsers,
- modified code to work with the new Google UI.

There is some small bug with Firefox addon. I had to add temporary workaround - messagebox "Welcome to CloudMagic" in the "Window Search" mode.

INSTALLATION

The easiest method:
1. Install extension from the “oldbase” folder
2. Close browser
3. Replace contents of the CloudMagic extension folder

How to locate CloudMagic extension folder

a) Chrome
- Navigate to chrome://version/ and look for Profile Path.
- The CloudMagic extension is located in “Profile Path + “\Extensions\” + ExtensionID.
(ExtensionID you can find on the Extensions list).

b) Firefox %APPDATA%\Mozilla\Firefox\Profiles\xxxxxxxx.default\extensions\cloudmagic@webyog
(where xxxxxxxx is unique profile id)


velcdr[at]xmail.net

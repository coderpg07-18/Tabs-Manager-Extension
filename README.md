# Tabs-Manager-Extension

A simple Chrome browser extension that allows users to save links or the current browser tab for later use.
All saved links are stored using localStorage, so they remain available even after closing the browser.

Features:
* Save any URL manually
* Save the current active browser tab
* Open saved links in a new tab
* Delete individual links
* Delete all saved links
* Data persists using localStorage

How It Works:
1. Enter a URL in the input field and click SAVE INPUT to store the link.
2. Click SAVE TAB to save the URL of the currently active browser tab.
3. All saved links appear in a list below.
4. Click the link to open it in a new tab.
5. Click ✕ next to a link to remove that specific item.
6. Double-click DELETE ALL to remove all saved links.

Technologies Used:
HTML
CSS
JavaScript
Chrome Extension API
localStorage

Installation:
  1. Clone this repository:
      git clone https://github.com/coderpg07-18/Tabs-Manager-Extension.git
  
  2. Open Chrome and go to:
      chrome://extensions/
  
  3. Enable Developer Mode (top right).
  4. Click Load unpacked.
  5. Select the project folder.

The extension will now appear in your browser.

Project Structure:
project-folder
├── index.html
├── index2.js
├── manifest.json
└── README.md

Future Improvements:
  Edit saved links
  Prevent duplicate links
  Add icons for better UI
  Export / import saved links

License:
  This project is open-source and available under the MIT License.

  

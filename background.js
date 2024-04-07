/* 
This is the background script for the extension, it runs in the background of the browser.

Video walkthrough: https://vimeo.com/923628666

Goal: Ensure that there is a continuous stream of timestamps logged from contentScript.js

Rules: 
You can only change one file: this background.js file. 
No DOM manipulation allowed such as overriding document.visibilityState.
When testing your code we will use the original files and only update the background.js file.

Testing: Use this site for easy testing https://ai-stealth-challenge.tiiny.site/

Hint: The solution is only a few lines of code.
*/

console.log("background.js running"); // background console logs can be found by inspecting the extension in chrome://extensions > developer mode > then click on "service worker" > then go to console

/* YOUR CODE BELOW THIS LINE :) */
// console.log(chrome.idle.IdleState);
// console.log(chrome.alarm);
// console.log(chrome.browsingData);
// console.log(chrome.cookies);
// console.log(chrome.wimdows);
// console.log(chrome.action);
// console.log(chrome.runtime);
// console.log(chrome.scripting);
// console.log(chrome.activeTab)

// chrome.alarms.create('myAlarm', {
//     delayInMinutes: 0, // Fire the alarm immediately
//     periodInMinutes: 1 / 60 // Repeat the alarm every second (1 minute / 60 seconds)
// });

// chrome.alarms.onAlarm.addListener(alarm => {
//     console.log("Alarm fired!", alarm);
//     // Perform your desired tasks here
//     if (alarm) {
//         // send message to content script to continue logging in time stamps
//         chrome.runtime.onMessage.addListener(
//             function(request, sender, sendResponse) {
//               console.log(sender.tab ?
//                           "from a content script:" + sender.tab.url :
//                           "from the extension");
//               if (request.greeting === "hello")
//                 sendResponse({farewell: "goodbye"});
//             }
//           );
//     }
// });

// function trigger(){
//     console.log('alarm has been triggered');
// }

// let tabsArray = [];


// // check the id of the activeTab
// chrome.tabs.onActivated.addListener(function (activeInfo) {
//   // Do something when a tab is activated
//   logAllTabUrls();
// });

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   // Do something with the message received
//   console.log("Message received:", message);

//   // Optionally, you can send a response back
//   // sendResponse("Message received successfully");
// });

// I need to push tabsId into an array, if theprevious id is ot similar then they are clearly different tabs
//

// helper function to consistently push items in an array

// tabId ensures that a tab that particular tab is active
// so to know if tab has been changed
// inorder to do that I need to keep track of all the tabIds
// once the tab is pushed run a loop to see if the the length og tabidID array is > 1
// chrome.tabs.query({
//   active: true,
//   lastFocusedWindow: true
// }, function(tabs) {
//   // and use that tab to fill in out title and url
//   var tab = tabs[0];
//   console.log(tab);
// });


// Initialize an array to store tab URLs
// let tabUrls = [];

// // Function to log all tab URLs
// function logAllTabUrls() {
//   chrome.tabs.query({}, function(tabs) {
//     // Iterate through all tabs and push their URLs into the tabUrls array
//     tabs.forEach(function(tab) {
//       if (tab.url) {
//         tabUrls.push(tab.url);
//         console.log("Tab URL added:", tab.url);
//       }
//      console.log(tabUrls)
//     });
//   });
// }

// Call the function to log all tab URLs




// Initialize an array to store URLs of active tabs
// let activeTabUrls = [];

// // Event listener for tab activation
// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   // Get the ID of the currently active tab
//   let activeTabId = activeInfo.tabId;
  
//   // Get information about the active tab
//   chrome.tabs.get(activeTabId, function(tab) {
//     // Check if the tab has a valid URL and is currently active
//     if (tab.url && tab.active) {
//       // Push the URL of the active tab into the activeTabUrls array
//       activeTabUrls.push(tab.url);
//       console.log("Active tab URL added:", tab.url);
//     }
//   });
// });

// // Function to log URLs of active tabs
// function logActiveTabUrls() {
//   console.log("URLs of active tabs:", activeTabUrls);
// }

// // Example: Log URLs of active tabs when needed
// // You can call this function at any point to log URLs of active tabs
// // For example, you could call it from a browser action or a popup
// logActiveTabUrls();

// background.js

// // Initialize an array to store URLs of active tabs
// let activeTabUrls = [];
// // Event listener for tab updates
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   // Check if the tab update is for the currently active tab
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       // if URL truthy 
//     if (tab.url) {
//         // 
//       if (activeTabUrls.length > 0 ) {
//         // run a loop so that there aren't duplicates
//         for (let i = 0; i < activeTabUrls.length; i++){
//           // if url is in the same index then it is a duplicate tab
//           if (!activeTabUrls[i].includes(tab.url)) {
//             // continue pushing in the same array 
//             activeTabUrls.push(tab.url); 
//           }
//         }
//       }
//         // push into activeTAb Array 
//         activeTabUrls.push(tab.url);
//         // Log the URLs of active tabs        
//       }
//   });
//   console.log(activeTabUrls);
// });


// Example: Log URLs of active tabs when needed
// You can call this function at any point to log URLs of active tabs
// For example, you could call it from a browser action or a popup

let activeTabUrl = '';

// Event listener for tab updates
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Check if the tab update is for the currently active tab
    if (tab.active && changeInfo.status === 'complete') {
        // Update the active tab URL
      activeTabUrl = tab.url;
      if (activeTabUrl !== "https://ai-stealth-challenge.web.app/") {
        console.log('the user is not on the testing site')
        // this is where I need to inject the code into contentScript to alter 
       alter_content()
      }
    }
});


function logTimeStamp() {
  console.log(new Date().toISOString());
}

function alter_content() {
  let number = 1
  while (number === 1) {
    // continue doing this 
    setInterval(logTimeStamp(), 1000);
  }
}





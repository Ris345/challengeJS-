// /* 
// This is the background script for the extension, it runs in the background of the browser.

// Video walkthrough: https://vimeo.com/923628666

// Goal: Ensure that there is a continuous stream of timestamps logged from contentScript.js

// Rules: 
// You can only change one file: this background.js file. 
// No DOM manipulation allowed such as overriding document.visibilityState.
// When testing your code we will use the original files and only update the background.js file.

// Testing: Use this site for easy testing https://ai-stealth-challenge.tiiny.site/

// Hint: The solution is only a few lines of code.
// */

// console.log("background.js running") // background console logs can be found by inspecting the extension in chrome://extensions > developer mode > then click on "service worker" > then go to console

// /* YOUR CODE BELOW THIS LINE :) */
// let loggedTimestamps = [new Date()]
// console.log(loggedTimestamps); 
// // Get output list element
// const outputList = document.getElementById("output-stream-list")
// console.log(outputList); 
// // Get status element
// const statusElement = document.getElementById("status")
// console.log(statusElement)

// function tabActive() {
//     document.addEventListener("visibilitychange", onchange);
//     if (!document.visibilityState || document.visibilityState) {
//         // continue logging in the timestamp 
//         log();
//     }   
// }


// const log = () => {
//     // Grab the current visibility state
//     const visibilityState = document.visibilityState
//     const isTabActive = visibilityState === 'visible' 
//     // Get current local time 
//     const now = new Date()
//     console.log(now); 
//     // Set threshold for gap
//     const threshold = 1400 // with error margin
//     // Check if last timestamp was too long ago
//     const lastDiff = now - loggedTimestamps[loggedTimestamps.length - 1]
//     console.log('lastDiff', lastDiff); 
//     // Create new list item and prepend to list
//     const logText = `${visibilityState} ${now.toLocaleTimeString()}`
//     console.log(logText);
//     const listItem = document.createElement("li")
//     listItem.appendChild(document.createTextNode(logText))
//     outputList.prepend(listItem)

//     // Log timestamp
//     loggedTimestamps.push(now)

//     // Determine if the logged timestamps have been continuous (ie. no gapps greater than threshold)
//     let success = true
//     for (let i = 1; i < loggedTimestamps.length; i++) {
//         debugger;
//         const diff = loggedTimestamps[i] - loggedTimestamps[i - 1]
//         if (Math.min(diff) > threshold) {
//             break
//         }
//     }
//     // Set status
//     statusElement.innerText = success ? "Tab has always been active :)" : "Tab became inactive :("
//     statusElement.style.color = success ? "green" : "red"
// }
// setInterval(tabActive, 1000)
// tabActive();

const outputList = document.getElementById("output-stream-list")
const statusElement = document.getElementById("status")
const start = () => {
      debugger; 
    let visibility = document.visibilityState; 
    let hidden = document.hidden; 
    const timeStamp = (new Date().toLocaleString());
    if (visibility || !hidden) {
        // continue logging in the time stamp 
        if (!hidden) {
            visibility = 'visible'; 
        }
        const logText = `${visibility} ${timeStamp}`
        const listItem = document.createElement("li")
        listItem.appendChild(document.createTextNode(logText))
        outputList.prepend(listItem)
        statusElement.innerText = visibility ? "Tab has always been active :)" : "Tab became inactive :("
        statusElement.style.color = visibility ? "green" : "red"
    }
}

setInterval(start, 1000);

start(); 



// when the user is on the tab the timestamps consistently logs in 
// when the user moves away from the tab the timestamp stops logging in 
// whether user is inactive or active the timestamps should continue to login 
// 
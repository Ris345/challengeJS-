

const outputList = document.getElementById("output-stream-list")
const statusElement = document.getElementById("status")
const start = () => {
    let visibility = document.visibilityState; 
    let hidden = document.hidden; 
    const timeStamp = new Date();



    if (visibility || !hidden) {
        // continue logging in the time stamp 
        if (hidden) {
            visibility = 'visible'; 
        }
        const logText = `${visibility} ${timeStamp.toLocaleTimeString()}`
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
chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({  
    file: "insert.js"
  })
});
let displayTurtle = document.getElementById("display");
displayTurtle.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setDisplayTurtle,
  });
});

const setDisplayTurtle = () => {
  alert("cc");
  let turtleDiv = document.createElement("div");
  turtleDiv.id = "turtlePet";
  turtleDiv.style = "z-index: 99999; position: fixed; top: 802px; right: 42px;";
  let turtleImg = document.createElement("img");
  turtleImg.src = chrome.runtime.getURL("/imgTurtle/idleTurtle2.png");
  turtleDiv.appendChild(turtleImg);
  document.body.appendChild(turtleDiv);
};

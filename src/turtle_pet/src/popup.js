let displayTurtle = document.getElementById("display");
let date = new Date();
let minutes = date.getMinutes();
let randomNumber = Math.floor(Math.random() * 6);
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
  function hungryTurtle() {
    let getHungry = 4
    if (getHungry === 4) {
      getHungry = 0
      return true
    }
    else {
      if (minutes === 0 && randomNumber === 1) {
        getHungry = 0
        return true
      }
      else {
        getHungry++
      }
    }
  }
console.log(hungryTurtle());
};

/*function hungryTurtle(name){
  if(name === "sonia")
  return 2
  console.log(hungryTurtle("sonia"));
  let getHungry = 4
  if (getHungry === 4) {
    getHungry = 0
    return true
  }
  else {
    if (minutes === 0 && randomNumber === 1) {
      getHungry = 0
      return true
    }
    else {
      getHungry++
    }
  }
}*/

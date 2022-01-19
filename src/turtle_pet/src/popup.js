let displayTurtle = document.getElementById("display");
let displayplayWith = document.getElementById("playWith");


//Execute script when clicked on popup's extension button "Joue avec moi"
displayplayWith.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setplayWith,
  });
});

//Execute script when clicked on popup's extension button "coucou"
displayTurtle.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setDisplayTurtle,
  });
});







// Display turtle on the html with div
const setDisplayTurtle = () => {
  alert("cc");
  let turtleDiv = document.createElement("div");
  turtleDiv.id = "turtlePet";
  turtleDiv.style = "z-index: 99999; position: fixed; top: 802px; right: 42px;";
  let turtleImg = document.createElement("img");
  turtleImg.id = "turtleImg";
  turtleImg.src = chrome.runtime.getURL("/imgTurtle/idleTurtle.png");
  turtleDiv.appendChild(turtleImg);
  document.body.appendChild(turtleDiv);

  let today;
  let h;
  let m;
  let s;

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTime() {
    // add a zero in front of numbers<10
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    t = setTimeout(function () {
      startTime();
    }, 1000);

    updateTurtle();
  }

  let randomNumber = Math.floor(Math.random() * 6);

  //All turtle's behaviors functions

  function isTurtleHungry() {
    let getHungry = 0;
    if (getHungry === 4) {
      getHungry = 0;
      return true;
    } else {
      if (m === 37 && s === 0) {
        getHungry = 0;
        return true;
      } else {
        if ((m = 0 && s === 0)) {
          getHungry++;
        }
        return false;
      }
    }
  }

  function isTurtleParty() {
    let fiesta = 0;
    if (fiesta === 2) {
      fiesta = 0;
      return true;
    } else {
      if (m === 37 && s === 0) {
        fiesta = 0;
        return true;
      } else {
        fiesta++;
        return false;
      }
    }
  }

  function isTurtlePooped() {
    let wantToPoop = 0;
    if (wantToPoop === 2) {
      fiesta = 0;
      return true;
    } else {
      if (m === 27 && (s === 0 || s === 1)) {
        wantToPoop = 0;
        return true;
      } else {
        wantToPoop++;
        return false;
      }
    }
  }

  function isTurtleSleepy() {
    //let sleepy = 0
    if (h === 0 && m === 0 && s === 0) {
      return true;
    } else {
      return false;
    }
  }

  const updateTurtle = () => {
    if (isTurtlePooped()) {
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/poopingTurtle.png");
    }
    if (isTurtleParty()) {
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/partyTurtle.png");
    }
    if (isTurtleHungry()) {
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/eatingTurtle.png");
    }
    if (isTurtleSleepy()) {
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/sleepingTurtle.png");
    }
  };

  startTime();
  console.log(s);
};

// Display playWith turtle game
function setplayWith() {
  let turtleImg = document.getElementById("turtleImg");
  let randomNumberOne = Math.floor(Math.random() * 99)
  let randomNumberTwo = Math.floor(Math.random() * 99)
  let result = parseInt(prompt (randomNumberOne + "+" + randomNumberTwo + "="));
    if (result === (randomNumberOne + randomNumberTwo)){ 
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/idleTurtle.png"); 
      console.log("good")
    } 
    else {
      result = prompt ("try again !" + randomNumberOne + "+" + randomNumberTwo + "=");
    }
};




/*let displayplayWith = document.getElementById("playWith");
  alert("click sur moi la");
  let clicks = 0; // counter
  displayplayWith.addEventListener("click", function(e) {
    e.preventDefault()
    clicks++
  });
setTimeout(alert("Tu as cliqué" + clicks + "X !"), 20000)*/
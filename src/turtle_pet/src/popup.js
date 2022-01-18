let displayTurtle = document.getElementById("display");

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
  turtleImg.src = chrome.runtime.getURL("/imgTurtle/idleTurtle.png");
  turtleDiv.appendChild(turtleImg);
  document.body.appendChild(turtleDiv);
  
  let today
  let h
  let m
  let s 

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
    t = setTimeout(function() {
      startTime()
    }, 2000);

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
      if (m === 4  && s === 0) {
        getHungry = 0;
        return true;
      } else {
        if ((m = 0 && s === 0)) {
          getHungry++;
        }
        console.log("cc1");
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
      if (m === 30 && (s === 0 || s === 1)) {
        fiesta = 0;
        return true;
      } else {
        fiesta++;
        console.log("cc2");
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
      if (m === 27 && (s === 0 || s === 1)
      ){
        wantToPoop = 0;
        return true;
      } else {
        wantToPoop++;
        console.log("cc3");
        return false;
      }
    }
  }

  function isTurtleSleepy() {
    //let sleepy = 0
    if (h === 0 && m === 0 && s === 0) {
      return true;
    } else {
      console.log("cc4");
      return false;
    }
  }

  const updateTurtle = () => {
    if(isTurtlePooped()){
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/poopingTurtle.png")
    };
    if (isTurtleParty()){
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/partyTurtle.png")
    };
    if (isTurtleHungry()){
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/eatingTurtle.png")
    };
    if (isTurtleSleepy()){
      turtleImg.src = chrome.runtime.getURL("/imgTurtle/sleepingTurtle.png")
    }; 
  };

  startTime();
  console.log(s)
};


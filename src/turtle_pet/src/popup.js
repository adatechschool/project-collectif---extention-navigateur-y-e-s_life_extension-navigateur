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
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let randomNumber = Math.floor(Math.random() * 6);


console.log(isTurtlePooped());
}
// function hungryTurtle() {
//   let getHungry = 0
//   if (getHungry === 4) {
//     getHungry = 0
//     return true
//   }
//   else {
//     if (minutes === 49) {
//       getHungry = 0
//       return true
//     }
//     else {
//       getHungry++
//       return false
//     }
//   }
// }



// function isSleepyTurtle() {
//   //let sleepy = 0
//   if (hours === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function partyTurtle() {
//   let fiesta = 0
//   if (fiesta === 2) {
//     fiesta = 0
//     return true
//   }
//   else {
//     if (minutes === 30){
//       fiesta = 0
//       return true
//     }
//     else {
//       fiesta++
//       console.log(fiesta)
//       return false
//     }
//   }
// };

// function isTurtlePooped() {
//   let wantToPoop = 0
//   if ( wantToPoop === 2) {
//     fiesta = 0
//     return true
//   }
//   else {
//     if (minutes === 15){
//       wantToPoop = 0
//       return true
//     }
//     else {
//       wantToPoop++
//       return false
//     }
//   }
// };
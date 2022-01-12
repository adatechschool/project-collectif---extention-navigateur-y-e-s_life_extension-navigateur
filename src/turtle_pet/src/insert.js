alert("cc")
let turtleDiv = document.createElement("div");
turtleDiv.id = "turtlePet";
turtleDiv.style = "z-index: 99999; position: fixed; top: 802px; right: 42px;";
let turtleImg = document.createElement("img");
turtleImg.src =  chrome.runtime.getURL("/imgTurtle/idleTurtle2.png");
// turtleImg.width = "500";
// turtleImg.height = "500";
turtleDiv.appendChild(turtleImg);
document.body.appendChild(turtleDiv);
// turtleDiv.innerHTML = "<img src= "../imgTurtle/idleTurtle.jpg">";
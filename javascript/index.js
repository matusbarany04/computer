
var play_sound = (dir) => {
  var audioElement = new Audio(dir);
  var promise = audioElement.play();
  if (promise !== undefined) {
    promise
      .then((_) => {
      })
      .catch((error) => {
        console.log( error);
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
  }
};

var power = document.getElementById("power");
power.onclick = function () {
  play_sound("assets/switch.mp3");
  setTimeout(() => {  window.location = "http://terminal.dismounted.space";},1000);

};
  
var red = document.getElementById("red");
red.onclick = function () {
  play_sound("assets/cancel.mp3");
  turnOff();
};
var blue = document.getElementById("blue");
blue.onclick = function () {
  play_sound("assets/noise-16bit.mp3");
  openTerminal();
};



var green = document.getElementById("green");
green.onclick = function () {
  play_sound("assets/error.mp3");

};

var iframe = document.getElementById("iframe");
function openTerminal(){
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.src= "https://terminal.dismounted.space";
}

function turnOff(){
  iframe.style.width = "0%";
  iframe.style.height = "0%";
  iframe.src= "";
}

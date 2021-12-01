
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
};

var red = document.getElementById("red");
red.onclick = function () {
  play_sound("assets/cancel.mp3");
};
var blue = document.getElementById("blue");
blue.onclick = function () {
  play_sound("assets/noise-16bit.mp3");
};
var green = document.getElementById("green");
green.onclick = function () {
  play_sound("assets/error.mp3");
};
var i = 0;
var txt =
  "Welcome to the GCU Technology Club's Official Web Site!"; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("home-welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Different Slides

var cyber = "Cyber Security";
var webdev = "Web Development";
var embedded = "Embedded Development";
var hardware = "Hardware";

var p0 = "Cyber Security is doing things.";
var p1 = "Web Dev is doing things.";
var p2 = "Embedded Dev is doing something.";
var p3 = "Hardware is doing something.";
// code that handles the turning of pages
var y = 0;
function forward() {
  y = y + 1;
  if (y > 4) {
    y = 4;
    writeThis();
  } else {
    writeThis();
  }
}
function backward() {
  y = y - 1;
  if (y < 0) {
    y = 0;
    writeThis();
  } else {
    writeThis();
  }
}
// actually writes the text onto the screen

function writeThis() {
  if (y == 0) {
    document.getElementById("home-title").innerHTML = cyber;
    document.getElementById("home-text").innerHTML = p0;
    document.getElementById("home-backward-button").style.visibility = "hidden";
    document.getElementById("home-forward-button").style.visibility = "visible";
  }
  if (y == 1) {
    document.getElementById("home-title").innerHTML = webdev;
    document.getElementById("home-text").innerHTML = p1;
    document.getElementById("home-backward-button").style.visibility =
      "visible";
  }
  if (y == 2) {
    document.getElementById("home-title").innerHTML = embedded;
    document.getElementById("home-text").innerHTML = p2;
    document.getElementById("home-forward-button").style.visibility = "visible";
  }

  if (y == 3) {
    document.getElementById("home-title").innerHTML = hardware;
    document.getElementById("home-text").innerHTML = p3;
    document.getElementById("home-forward-button").style.visibility = "hidden";
  }
}

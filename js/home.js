import { db } from './util.js';

let tw_index = 0;
let homepage_txt = "Welcome to the Tech Club!"; /* The text */
let speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (tw_index < homepage_txt.length) {
        document.getElementById("home-welcome").innerHTML +=
            homepage_txt.charAt(tw_index);
        tw_index++;
        setTimeout(typeWriter, speed);
    }
}

const getCommitteeData = async function () {
    return (await get(ref(db, 'homepage/committees'))).val();
};

// Different Slides
window.onload = async function() {
    // Get data from firebase
    const data = await getCommitteeData();
    
};

// code that handles the turning of pages

let page_index = 1;

function forward() {
    page_index = page_index + 1;
    writeThis();
}

function backward() {
    page_index = page_index - 1;
    writeThis();
}
// actually writes the text onto the screen
document.getElementById("home-title").textContent = cyber;
document.getElementById("home-text").textContent = cyber_text;
document.getElementById("home-backward-button").style.visibility = "hidden";

function writeThis() {
    if (page_index == 0) {
        document.getElementById("home-title").textContent = cyber;
        document.getElementById("home-text").textContent = cyber_text;
        document.getElementById("home-backward-button").style.visibility = "hidden";
        document.getElementById("home-forward-button").style.visibility = "visible";
    }
    if (page_index == 1) {
        document.getElementById("home-title").textContent = webdev;
        document.getElementById("home-text").textContent = webdev_text;
        document.getElementById("home-backward-button").style.visibility =
            "visible";
    }
    if (page_index == 2) {
        document.getElementById("home-title").textContent = embedded;
        document.getElementById("home-text").textContent = embedded_text;
        document.getElementById("home-forward-button").style.visibility = "visible";
    }

    if (page_index == 3) {
        document.getElementById("home-title").textContent = hardware;
        document.getElementById("home-text").textContent = hardware_text;
        document.getElementById("home-forward-button").style.visibility = "visible";
    }
    if (page_index == 4) {
        document.getElementById("home-title").textContent = girlswc;
        document.getElementById("home-text").textContent = girlswc_text;
        document.getElementById("home-forward-button").style.visibility = "hidden";
    }
}
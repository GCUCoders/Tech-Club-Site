import { get, ref } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js';
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
    // Frontend stuff to be executed right away
    typeWriter();


    // Get data from firebase
    const data = await getCommitteeData();
    
    // code that handles the turning of pages
    let page_index = 0;

    document.querySelector("#home-backward-button").addEventListener('click', () => {
        page_index--;
        writeThis();
    });

    document.querySelector("#home-forward-button").addEventListener('click', () => {
        page_index++;
        writeThis();
    });

    // actually writes the initial text onto the screen
    writeThis();

    function writeThis() {
        document.querySelector("#home-title").textContent = data[page_index].name;
        document.querySelector("#home-text").textContent = data[page_index].description;
        document.querySelector("#home-backward-button").style.visibility = "visible";
        document.querySelector("#home-forward-button").style.visibility = "visible";
        if(page_index === 0) 
            document.querySelector("#home-backward-button").style.visibility = "hidden";
        
        if(page_index === data.length - 1) 
            document.querySelector("#home-forward-button").style.visibility = "hidden";
        
    }
};


/* Array of all committee document item ID's.  */
const committees = [
	'web-dev',
	'embedded',
	'cyber',
	'girls-who-code',
	'hardware',
]; 


// Left div column (tab highlighting) function. 
function highlightSelection(turnOn) 
{
    // which tab in the left column is currently selected
    for (const committee of committees) 
    {
        // turn on tab highlight
        if (committee == turnOn) {
            document.getElementById(turnOn).style.backgroundColor = '#A68AC8';
        }
        // turn off highlight
        else {  
            document.getElementById(committee).style.backgroundColor = '#774BAA';
        }
    }
} 



/*          Web-Development Body Content function             */ 
function showWebDev()
{
    // select content title and body elements
    const title = document.getElementById('content-title');
    const body = document.getElementById('content-body'); 
    
    // set content title 
    title.innerText = 'Web Development Committee'; 

    // create image element
    const img = document.createElement('img'); 
    img.classList.add('content'); 
    img.src = 'images/webdev_customImg.png'; 

    // create description element
    const description = document.createElement('div'); 
    description.innerHTML = document.querySelector('#info-webdevelopment').textContent; 

    // add elements into content node 
    body.replaceChildren(img, document.createElement('br'), document.createElement('br'), description); 

    // highlight web-development tab 
    highlightSelection("web-dev"); 
}



/*          Embedded-Development Body Content function              */ 
function showEmbedded() 
{
    // select content title and body elements
    let body = document.getElementById('content-body'); 
    let title = document.getElementById('content-title'); 
    
    // set content title 
    title.innerText = 'Embedded Development Committee'; 

    // create image element 
    const img = document.createElement('img');
    img.classList.add('content');
    img.src = 'https://www.ssla.co.uk/wp-content/uploads/2020/10/embedded-software-entwickler-entwicklung-tasks.png';

    // create description element
    const description = document.createElement('div');
    description.innerHTML = document.querySelector("#info-embeddeddevelopment").textContent;

    // add elements into content node 
    body.replaceChildren(img, document.createElement('br'), document.createElement('br'), description);

    // highlight embedded-development tab 
    highlightSelection("embedded");
}



/*          Cybersecurity Body Content function              */ 
function showCyber()
{
    // select content title and body elements
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // set content title  
    title.innerText = 'Cybersecurity Committee'; 

    // create image element 
    const img = document.createElement('img');
    img.classList.add('content');
    img.src = 'images/cyber_img.png';

    // create description element
    const description = document.createElement('div');
    description.innerHTML = document.querySelector("#info-cybersecurity").textContent;

    // add elements into content node 
    body.replaceChildren(img, document.createElement('br'), document.createElement('br'), description);

    // highlight cybersecurity tab
    highlightSelection('cyber');
}



/*          Girls-Who-Code Body Content function              */
function showGWC()
{
    // select title and body elements
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // set content title 
    title.innerText = 'Girls Who Code Committee'; 

    // create image element 
    const img = document.createElement('img');
    img.classList.add('content');
    img.src = 'images/gwc_logo1.png';

    // create description element
    const description = document.createElement('div');
    description.innerHTML = document.querySelector("#info-girlswhocode").textContent + '<br>Check out their website at:  <a style="color:white; font-size:bolder;" href="https://girlswhocode.com/" target="_blank">www.girlswhocode.com</a></div>';

    // add elements into content node 
    body.replaceChildren(img, document.createElement('br'), document.createElement('br'), description);

    // highlight girls who code tab 
    highlightSelection('girls-who-code');
}


/*          Hardware Content function              */ 
function showHardware()
{
    // select content title and body 
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // Set the right column div title. 
    title.innerText = 'Hardware Committee'; 

    // create image element 
    const img = document.createElement('img');
    img.classList.add('content');
    img.src = 'images/hardware-committee-img.png';

    // create description element
    const description = document.createElement('div');
    description.innerHTML = document.querySelector("#info-hardware").textContent;

    // add elements into content node 
    body.replaceChildren(img, document.createElement('br'), document.createElement('br'), description);

    // highlight hardware tab 
    highlightSelection('hardware');
}

/*
    Author: Shazeb Suhail
    Date:   1/24/2022
*/
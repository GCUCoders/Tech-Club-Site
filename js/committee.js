
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

<<<<<<< Updated upstream
    // create markup that sets an image and 
    let codeline = '<img class="content" src="images/webdev_customImg.png"><br><br><div>' + 
    // cool way to query select an id on the document 
    $("#info-webdevelopment").text() + '</div>'; 
=======
    // create image element
    const img = document.createElement('img'); 
    img.classList.add('content'); 
    img.src = 'images/webdev_customImg.png'; 
>>>>>>> Stashed changes

    // create description element
    const description = document.createElement('div'); 
    description.innerHTML = $('#info-webdevelopment').text(); 

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

<<<<<<< Updated upstream
    const desc = document.createElement('div');
    desc.innerHTML = $("#info-embeddeddevelopment").text();
=======
    // create description element
    const description = document.createElement('div');
    description.innerHTML = $("#info-embeddeddevelopment").text();
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    // Create some markup to write to page displaying an image and text via query select
    let codeline = '<img class="content" src="images/cyber_img.png"><br><br><div>' + $("#info-cybersecurity").text() + '</div>';
=======
    // create image element 
    const img = document.createElement('img');
    img.classList.add('content');
    img.src = 'images/cyber_img.png';

    // create description element
    const description = document.createElement('div');
    description.innerHTML = $("#info-cybersecurity").text();
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    // Create some markup to page displaying the committee image and description 
    let codeline = '<img class="content" src="images/gwc_logo1.png"><br><br><div>' + 
    $("#info-girlswhocode").text() + '<br>Check out their website at:  <a style="color:white; font-size:bolder;" href="https://girlswhocode.com/" target="_blank">www.girlswhocode.com</a></div>'; 
=======
    // create image element 
    const img = document.createElement('img');
    img.classList.add('content');
    img.src = 'images/gwc_logo1.png';
>>>>>>> Stashed changes

    // create description element
    const description = document.createElement('div');
    description.innerHTML = $("#info-girlswhocode").text() + '<br>Check out their website at:  <a style="color:white; font-size:bolder;" href="https://girlswhocode.com/" target="_blank">www.girlswhocode.com</a></div>';

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

<<<<<<< Updated upstream
    // Create some markup displaying committee image and text 
    let codeline = '<img class="content" src="images/hardware-committee-img.png"><br><br><div>' + 
    $("#info-hardware").text() + '</div>'; 
    
    // Write markup to page. 
    body.innerHTML = codeline; 
=======
    // create image element 
    const img = document.createElement('img');
    img.classList.add('content');
    img.src = 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg';

    // create description element
    const description = document.createElement('div');
    description.innerHTML = $("#info-hardware").text();

    // add elements into content node 
    body.replaceChildren(img, document.createElement('br'), document.createElement('br'), description);
>>>>>>> Stashed changes

    // highlight hardware tab 
    highlightSelection('hardware');
}

/*
    Author: Shazeb Suhail
    Date:   1/24/2022
*/
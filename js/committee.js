
const committees = [
	'web-dev',
	'embedded',
	'cyber',
	'girls-who-code',
	'hardware',
]; 

// Left div selection highlight function. 
function highlightSelection(turnOn) 
{
    for(const committee of committees)
    {
        if (committee == turnOn) {
            document.getElementById(turnOn).style.backgroundColor = '#A68AC8';
        }
        else {
            document.getElementById(committee).style.backgroundColor = '#774BAA';
        }
    }
} 


function showWebDev(){

    // Select Right Div content components. 
    const title = document.getElementById('content-title');
    const body = document.getElementById('content-body'); 

    // Set the Content Title. 
    title.innerText = 'Web Development Committee'; 

    // create markup to write to page. 
    let codeline = '<img class="content" src="images/img1.png"><br><br><div>' + 
    $("#info-webdevelopment").text() + '</div><br>'; 

    // write the markup. 
    body.innerHTML = codeline;  

    highlightSelection("web-dev"); 
}


function showEmbedded() 
{
    // Select Right Div title and body sections. 
    let body = document.getElementById('content-body'); 
    let title = document.getElementById('content-title'); 
    
    // Set content title. 
    title.innerText = 'Embedded Development Committee'; 

    // Write markup to the page. 
    const img = document.createElement('img');
    img.classList.add('content');
    img.src = 'https://www.ssla.co.uk/wp-content/uploads/2020/10/embedded-software-entwickler-entwicklung-tasks.png';

    const desc = document.createElement('div');
    desc.innerHTML = $("#info-embeddeddevelopment").text();

    //body.innerHTML = '<img class="content" src="https://www.ssla.co.uk/wp-content/uploads/2020/10/embedded-software-entwickler-entwicklung-tasks.png"/><br><br><div>' + 
    //$("#info-embeddeddevelopment").text() + '</div><br>'; 
    body.replaceChildren(img, document.createElement('br'), document.createElement('br'), desc);

    highlightSelection("embedded");
}

function showCyber()
{
    // Select content title and body elements. 
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // Set Content title. 
    title.innerText = 'Cybersecurity Committee'; 

    // Create some markup to write to page. 
    let codeline = '<img class="content" src="images/cyber_img.png"><br><br><div>' + $("#info-cybersecurity").text() + '</div><br>';

    // Write markup to the document. 
    body.innerHTML = codeline; 

    highlightSelection('cyber');
}

function showGWC(){
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // Set the right div title. 
    title.innerText = 'Girls Who Code Committee'; 

    // Create some markup to page. 
    let codeline = '<img class="content" ><br><br><div>' + 
    $("#info-girlswhocode").text() + '</div><br>'; 

    // Write markup to the document. 
    body.innerHTML = codeline; 

    highlightSelection('girls-who-code');
}

function showHardware(){
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // Set the right div title. 
    title.innerText = 'Hardware Committee'; 

    // Create some markup.
    let codeline = '<img class="content" src="https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg"><br><br><div>' + 
    $("#info-hardware").text() + '</div><br>'; 
    
    // Write markup to page. 
    body.innerHTML = codeline; 

    highlightSelection('hardware');
}




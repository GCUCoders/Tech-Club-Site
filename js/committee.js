
/* Array of all committees.  */
const committees = [
	'web-dev',
	'embedded',
	'cyber',
	'girls-who-code',
	'hardware',
]; 




// Left div (tab highlighting) function. 
function highlightSelection(turnOn) 
{
    // which tab in the left column is currently selected
    for(const committee of committees)
    {
        // turn on highlight
        if (committee == turnOn) {
            document.getElementById(turnOn).style.backgroundColor = '#A68AC8';
        }
        else { // turn off highlight 
            document.getElementById(committee).style.backgroundColor = '#774BAA';
        }
    }
} 



/*          Committees Body Contents              */ 

// Web Development Data Initialization function 
function showWebDev()
{
    // Select Right Div title and body (see variable names) 
    const title = document.getElementById('content-title');
    const body = document.getElementById('content-body'); 

    // Set the Content Title value via innerText() method
    title.innerText = 'Web Development Committee'; 

    // create markup that sets an image and 
    let codeline = '<img class="content" src="images/img1.png"><br><br><div>' + 
    // cool way to query select an id on the document 
    $("#info-webdevelopment").text() + '</div><br>'; 

    // write the markup to document 
    body.innerHTML = codeline;  

    // make sure web dev is highlighted 
    highlightSelection("web-dev"); 
}


// Embedded Development Data Initialization function 
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

    // highlight embedded tab 
    highlightSelection("embedded");
}


// Cybersecurity Data is initialized with this function 
function showCyber()
{
    // Select content title and body elements. 
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // Set Content title. 
    title.innerText = 'Cybersecurity Committee'; 

    // Create some markup to write to page displaying an image and text via query select
    let codeline = '<img class="content" src="images/cyber_img.png"><br><br><div>' + $("#info-cybersecurity").text() + '</div><br>';

    // Write markup to the document. 
    body.innerHTML = codeline; 

    // highlight cyber tab
    highlightSelection('cyber');
}


// Girls who code data initialization function 
function showGWC()
{
    // query select by id the right column title and description 
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // Set the right div title. 
    title.innerText = 'Girls Who Code Committee'; 

    // Create some markup to page displaying the committee image and description 
    let codeline = '<img class="content" src="images/gwc_logo.png"><br><br><div>' + 
    $("#info-girlswhocode").text() + '</div><br>'; 

    // Write markup to the document. 
    body.innerHTML = codeline; 

    // highlight girls who code tab 
    highlightSelection('girls-who-code');
}


// Hardware data initialization function 
function showHardware()
{
    // select right column title and text boxes
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // Set the right column div title. 
    title.innerText = 'Hardware Committee'; 

    // Create some markup displaying committee image and text 
    let codeline = '<img class="content" src="https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg"><br><br><div>' + 
    $("#info-hardware").text() + '</div><br>'; 
    
    // Write markup to page. 
    body.innerHTML = codeline; 

    // highlight hardware tab 
    highlightSelection('hardware');
}




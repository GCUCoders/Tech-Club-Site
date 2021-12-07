function showWebDev(){

    // Select Right Div content components. 
    var title = document.getElementById('content-title'); 
    var body = document.getElementById('content-body'); 

    // Set the Content Title. 
    title.innerText = 'Web Development Committee'; 

    // create markup to write to page. 
    var codeline = '<img class="content" src="images/img1.png"><br>' + 
    $("#info-webdevelopment").text(); 

    // write the markup. 
    body.innerHTML = codeline;  
}


function showEmbedded() 
{
    // Select Right Div title and body sections. 
    var body = document.getElementById('content-body'); 
    var title = document.getElementById('content-title'); 
    
    // Set content title. 
    title.innerText = 'Embedded Development Committee'; 

    // Write markup to the page. 
    body.innerHTML = '<img class="content" src="https://www.ssla.co.uk/wp-content/uploads/2020/10/embedded-software-entwickler-entwicklung-tasks.png"/><br>' + 
    $("#info-embeddeddevelopment").text(); 


}

function showCyber()
{
    // Select content title and body elements. 
    let title = document.getElementById('content-title'); 
    let body = document.getElementById('content-body'); 

    // Set Content title. 
    title.innerText = 'Cybersecurity Committee'; 

    // Create some markup to write to page. 
    let codeline = '<img class="content" src="images/cyber_img.png"><br>' + 
    $("#info-cybersecurity").text();

    // Write markup to the document. 
    body.innerHTML = codeline; 
}

function showGWC(){
    var title = document.getElementById('content-title'); 
    var body = document.getElementById('content-body'); 
    title.innerText = 'Girls Who Code Committee'; 

    // Create some markup to page. 
    var codeline = '<img class="content" src="https://cdn.myanimelist.net/r/560x300/s/common/uploaded_files/1472794821-841ff512db1def20fba45c98328bc924.jpeg?s=d5e3294311d6f81d4731142b3681302f"><br>'; 

    // Write markup to the document. 
    body.innerHTML = codeline; 
}

function showHardware(){
    var title = document.getElementById('content-title'); 
    var body = document.getElementById('content-body'); 
    title.innerText = 'Hardware Committee'; 

    var codeline = '<img class="content" src="https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg"><br>'; 
    
    body.innerHTML = codeline; 
}
const committees = [
  'web-dev',
  'embedded',
  'cyber',
  'girls-who-code',
  'hardware',
];






let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (const slide of slides) {
slide.style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) slideIndex = 1; 
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 8000); // Change image every 8 seconds
}





slideIndex = 1;
showSlides1(slideIndex);

function plusSlides(n) {
  showSlides1(slideIndex += n);
}

function currentSlide(n) {
  showSlides1(slideIndex = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// mouse trail


let body=document.body;

document.addEventListener('mousemove',(e)=>{
  let elem=document.createElement('div');
  elem.setAttribute('class', 'trail')
  elem.setAttribute('style', `left: ${e.clientX -10}px; top: ${e.clientY -20}px;`);

  elem.onanimationend=()=>{
    elem.remove();
  }
  body.insertAdjacentElement('beforeend', elem);
})



var sidebar=document.getElementById("side-nav");
// var viewplayers=document.querySelector(".hide-players")

function show(){
    sidebar.style.left="0";
 
}

function cancel(){
    sidebar.style.left="-900px";

}

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides();




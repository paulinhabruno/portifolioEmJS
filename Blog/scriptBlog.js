const msg = "Paula Bruno Developer!";
let titulo = document.querySelector('.titulo');
for (let i=0; i< msg.length; i++) {
    (function(pos){
        setTimeout(function(){
           titulo.innerHTML += msg.charAt(pos);
        },300*pos);
    })(i);
};

//   A partir daqui entra o código

let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = `${sliderWidth}px`;

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();

}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);
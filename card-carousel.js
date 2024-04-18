

/*
function appendCustomerRateCard(title, about, location, url) {
    // Создаем новый элемент div
    var customerRateCard = document.createElement("div");
    customerRateCard.classList.add("customer__rate__card");
    customerRateCard.classList.add("slide");
    // Создаем вложенные элементы
    var bioDiv = document.createElement("div");
    bioDiv.classList.add("customer__rate__card__bio");

    var logoDiv = document.createElement("div");
    logoDiv.classList.add("customer__card__bio__logo");

    var logoImg = document.createElement("img");
    var logZapatie = document.createElement("img");
   // logoImg.src = "./static/Avatar.png";
   //     <img src="./static/Frame.png" class="zapatie" alt="zapatie">
   logoImg.src = url;
    logoImg.alt = "logo";

    logZapatie.src= "./static/Frame.png"
    logZapatie.alt="zapatie"
    logZapatie.classList.add("zapatie");
    logoImg.classList.add("customer__card__bio__logo__image");

    var textDiv = document.createElement("div");
    textDiv.classList.add("customer__rate__card__bio__text");

    var titleP = document.createElement("p");
    titleP.classList.add("customer__rate__card__bio__title");
  //  titleP.textContent = "Natasha D";
  titleP.textContent = title
    var locationP = document.createElement("p");
    locationP.classList.add("customer__rate__card__bio__location");
 //   locationP.textContent = "Newyork";
 locationP.textContent = location;
    textDiv.appendChild(titleP);
    textDiv.appendChild(locationP);
    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(logZapatie);
    bioDiv.appendChild(logoDiv);
    bioDiv.appendChild(textDiv);

    var contentDiv = document.createElement("div");
    contentDiv.classList.add("customer__rate__card__content");

    var hr = document.createElement("hr");
    hr.classList.add("customer__rate__card__line");

    var commentP = document.createElement("p");
    commentP.classList.add("customer__rate__card__comment");
   commentP.textContent = about
    contentDiv.appendChild(hr);
    contentDiv.appendChild(commentP);

    customerRateCard.appendChild(bioDiv);
    customerRateCard.appendChild(contentDiv);


  const parent = document.querySelector('.slider-track');
  parent.appendChild(customerRateCard);
}


let currentElems;
fetch('./data.json')
    .then(response => response.json())
    .then(jsonData => {
jsonData.customers.forEach((item, index) => {
    console.log("CUSTOMERRRRRRRRRRRRRRRRR"+JSON.stringify(item))
    appendCustomerRateCard(item.title, item.about, item.location, item.url);
})
    }).then(()=> {

        
        



     let isEnd = false;
     const CARD_WIDTH = document.querySelector(".customer__rate__card").offsetWidth;
let pos = 0;
let slideIndex = 0;

const btns = document.querySelectorAll(".customers__cards__button");
const carousel = document.querySelector(".customers__carousel");
let slider = document.querySelector('.slider'),
    sliderList = slider.querySelector('.slider-list'),
    sliderTrack = slider.querySelector('.slider-track'),
    slides = slider.querySelectorAll('.slide'),
    arrows = slider.querySelector('.customers__cards__dots'),
    prev = arrows.children[0],
    next = arrows.children[1],
    slideWidth = slides[0].offsetWidth;

let startX = 0;
let endX = 0;


slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});


slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', handleSwipe);

slider.addEventListener('mousedown', (e) => {
    startX = e.clientX;

    slider.addEventListener('mousemove', onMouseMove);

    slider.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    endX = e.clientX;
}

function onMouseUp() {
    slider.removeEventListener('mousemove', onMouseMove);
    slider.removeEventListener('mouseup', onMouseUp);
    handleSwipe();
}

function handleSwipe() {
    console.log("Current slide index:", slideIndex);
    
    const diff = startX - endX;
    const threshold = CARD_WIDTH / 2; 

    if (diff > threshold) {

       if (slideIndex < slides.length ) {
   // if (slideIndex < slides.length ) {
            slideIndex++;
            pos -= CARD_WIDTH;
        }
        if (pos < -(CARD_WIDTH * (slides.length ))) {
            pos = -(CARD_WIDTH * (slides.length ));
        }
    } else if (diff < -threshold) {

        if (slideIndex > 0) {
            slideIndex--;
            pos += CARD_WIDTH;
        }
        if (pos > 0) {
            pos = 0;
        }
    }


    sliderTrack.style.transform = `translateX(${pos}px)`;


    startX = 0;
    endX = 0;

    if (slideIndex === slides.length ) {
        btns[0].classList.remove("active__card");
        btns[1].classList.add("active__card");
    } else {
        btns[1].classList.remove("active__card");
        btns[0].classList.add("active__card");
    }
}




arrows.addEventListener('click', function () {
    let target = event.target;

    if (target.classList.contains('next')) {
        slideIndex=slides.length-1
        btns[0].classList.remove("active__card")
        btns[1].classList.add("active__card")
        sliderTrack.style.transform = `translateX(-${CARD_WIDTH*(slides.lengt)}px)`;
     
    }  else {
        slideIndex=0
        btns[1].classList.remove("active__card")
        btns[0].classList.add("active__card")
        sliderTrack.style.transform = `translateX(-${0}px)`;
    }

    
});


 const arrowBtns =   document.querySelector(".first-arrows")
 
 
const arrowLeft = document.querySelector(".arrow__left")
const arrowRight = document.querySelector(".arrow__right")
 

arrowLeft.addEventListener("click", ()=> {

})

arrowRight.addEventListener("click", ()=> {
  console.log(111)  
})
if( slides.length<4) {
    document.querySelector(".second-arrows").style.display = "flex"
}   
else {
    
}
})



 

*/















let isEnd = false;
const CARD_WIDTH = document.querySelector(".customer__rate__card").offsetWidth;
let pos = 0;
let slideIndex = 0;

const btns = document.querySelectorAll(".customers__cards__button");
const carousel = document.querySelector(".customers__carousel");
let slider = document.querySelector('.slider'),
sliderList = slider.querySelector('.slider-list'),
sliderTrack = slider.querySelector('.slider-track'),
slides = slider.querySelectorAll('.slide'),
arrows = slider.querySelector('.customers__cards__dots'),
prev = arrows.children[0],
next = arrows.children[1],
slideWidth = slides[0].offsetWidth;

let startX = 0;
let endX = 0;


slider.addEventListener('touchstart', (e) => {
startX = e.touches[0].clientX;
});


slider.addEventListener('touchmove', (e) => {
endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', handleSwipe);

slider.addEventListener('mousedown', (e) => {
startX = e.clientX;

slider.addEventListener('mousemove', onMouseMove);

slider.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
endX = e.clientX;
}

function onMouseUp() {
slider.removeEventListener('mousemove', onMouseMove);
slider.removeEventListener('mouseup', onMouseUp);
handleSwipe();
}

function handleSwipe() {
console.log("Current slide index:", slideIndex);

const diff = startX - endX;
const threshold = CARD_WIDTH / 2; 

if (diff > threshold) {

  if (slideIndex < slides.length ) {
// if (slideIndex < slides.length ) {
       slideIndex++;
       pos -= CARD_WIDTH;
   }
   if (pos < -(CARD_WIDTH * (slides.length ))) {
       pos = -(CARD_WIDTH * (slides.length ));
   }
} else if (diff < -threshold) {

   if (slideIndex > 0) {
       slideIndex--;
       pos += CARD_WIDTH;
   }
   if (pos > 0) {
       pos = 0;
   }
}


sliderTrack.style.transform = `translateX(${pos}px)`;


startX = 0;
endX = 0;

if (slideIndex === slides.length ) {
   btns[0].classList.remove("active__card");
   btns[1].classList.add("active__card");
} else {
   btns[1].classList.remove("active__card");
   btns[0].classList.add("active__card");
}
}




arrows.addEventListener('click', function () {
let target = event.target;

if (target.classList.contains('next')) {
   slideIndex=slides.length-1
   btns[0].classList.remove("active__card")
   btns[1].classList.add("active__card")
   sliderTrack.style.transform = `translateX(-${CARD_WIDTH*(slides.lengt)}px)`;

}  else {
   slideIndex=0
   btns[1].classList.remove("active__card")
   btns[0].classList.add("active__card")
   sliderTrack.style.transform = `translateX(-${0}px)`;
}


});


const arrowBtns =   document.querySelector(".first-arrows")


const arrowLeft = document.querySelector(".arrow__left")
const arrowRight = document.querySelector(".arrow__right")


arrowLeft.addEventListener("click", ()=> {

})

arrowRight.addEventListener("click", ()=> {
console.log(111)  
})
if( slides.length<4) {
document.querySelector(".second-arrows").style.display = "flex"
}   
else {

}





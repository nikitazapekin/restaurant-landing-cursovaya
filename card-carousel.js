/*
const btns = document.querySelectorAll(".customers__cards__button")
const carousel = document.querySelector(".customers__carousel")
const CARD_WIDTH = document.querySelector(".customer__card").offsetWidth
let isEnd = false

btns[1].addEventListener("click", () => {
    if (!isEnd) {

        let currentTranslateX = carousel.style.transform ? parseFloat(carousel.style.transform.match(/translateX\((.+?)px\)/)[1]) : 0;
        carousel.style.transform = `translateX(-${currentTranslateX + CARD_WIDTH}px)`;
        isEnd = true

        btns[1].classList.add("active__card")
        btns[0].classList.remove("active__card")
    }
    else {
        carousel.style.transform = `translateX(0px)`;
        isEnd = false
        btns[0].classList.add("active__card")
        btns[1].classList.remove("active__card")
    }
})

btns[0].addEventListener("click", () => {
    if (isEnd) {
        let currentTranslateX = carousel.style.transform ? parseFloat(carousel.style.transform.match(/translateX\((.+?)px\)/)[1]) : 0;
        carousel.style.transform = `translateX(${currentTranslateX + CARD_WIDTH}px)`;
        isEnd = false
        btns[0].classList.add("active__card")
        btns[1].classList.remove("active__card")
    }

    else {
        let currentTranslateX = carousel.style.transform ? parseFloat(carousel.style.transform.match(/translateX\((.+?)px\)/)[1]) : 0;
        carousel.style.transform = `translateX(${currentTranslateX - CARD_WIDTH}px)`;
        btns[1].classList.add("active__card")
        btns[0].classList.remove("active__card")
        isEnd = true

    }
})

*/











/*

let isEnd = false
const CARD_WIDTH = document.querySelector(".customer__rate__card").offsetWidth
let pos = 0



const btns = document.querySelectorAll(".customers__cards__button")
const carousel = document.querySelector(".customers__carousel")
let slider = document.querySelector('.slider'),
    sliderList = slider.querySelector('.slider-list'),
    sliderTrack = slider.querySelector('.slider-track'),
    slides = slider.querySelectorAll('.slide'),
    arrows = slider.querySelector('.customers__cards__dots'),
    prev = arrows.children[0],
    next = arrows.children[1],

  //  console.log()
   // slideWidth = slides[0].offsetWidth,
   slideWidth = slides.offsetWidth,
    slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posY1 = 0,
    posY2 = 0,
    posFinal = 0,
    isSwipe = false,
    isScroll = false,
    allowSwipe = true,
    transition = true,
    nextTrf = 0,
    prevTrf = 0,
    lastTrf = --slides.length * slideWidth,
    posThreshold = slides[0].offsetWidth  ,
    trfRegExp = /([-0-9.]+(?=px))/,
    swipeStartTime,
    swipeEndTime,
    getEvent = function () {
        return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    },
    slide = function () {
        if (transition) {
            sliderTrack.style.transition = 'transform .5s';
        }
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

        prev.classList.toggle('disabled', slideIndex === 0);
        next.classList.toggle('disabled', slideIndex === --slides.length);
    },
    swipeStart = function () {
        let evt = getEvent();

        if (allowSwipe) {

            swipeStartTime = Date.now();

            transition = true;

            nextTrf = (slideIndex + 1) * -slideWidth;
            prevTrf = (slideIndex - 1) * -slideWidth;

            posInit = posX1 = evt.clientX;
            posY1 = evt.clientY;

            sliderTrack.style.transition = '';

            document.addEventListener('touchmove', swipeAction);
            document.addEventListener('mousemove', swipeAction);
            document.addEventListener('touchend', swipeEnd);
            document.addEventListener('mouseup', swipeEnd);

            sliderList.classList.remove('grab');
            sliderList.classList.add('grabbing');
        }
    },
    swipeAction = function () {

        let evt = getEvent(),
            style = sliderTrack.style.transform,
            transform = +style.match(trfRegExp)[0];

        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;

        posY2 = posY1 - evt.clientY;
        posY1 = evt.clientY;
        
        if (!isSwipe && !isScroll) {
            let posY = Math.abs(posY2);
            if (posY > 7 || posX2 === 0) {
                isScroll = true;
                allowSwipe = false;
            } else if (posY < 7) {
                isSwipe = true;
            }
        }

        if (isSwipe) {
            if (slideIndex === 0) {

                btns[1].classList.remove("active__card")
                btns[0].classList.add("active__card")



                if (posInit < posX1) {
                    setTransform(transform, 0);
                    return;
                } else {
                    allowSwipe = true;
                }
            }
        //    slideIndex++
//slideIndex== Math.round(slides.length)-1
//if (slideIndex === (Math.round(slides.length)-1)) {
    
    // if (transform>=-CARD_WIDTH*(Math.round(slides.length)-1)) {
        console.log("TRANS" +transform)
        console.log("wid"+-CARD_WIDTH*(Math.round(slides.length)-1))
         if (transform*(-1) >=CARD_WIDTH*(Math.round(slides.length)-1)) {
        //   if (slideIndex === --slides.length) {
                btns[0].classList.remove("active__card")
                btns[1].classList.add("active__card")
                if (posInit > posX1) {
                    setTransform(transform, lastTrf);
                    return;
                } else {
                    allowSwipe = true;
                }
            } else {
                btns[1].classList.remove("active__card")
                btns[0].classList.add("active__card")
            }

            console.log("tr"+transform*(-1))
//if(transform*(-1) >=CARD_WIDTH*(Math.round(slides.length)-1) || transform*(-1)<-500) {
 //   reachEdge();
//} 
            if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
               reachEdge();


                
                return;
            }

            sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
          //  slideIndex++
            console.log("INDD" +slideIndex)
        }

    },
    swipeEnd = function () {
        posFinal = posInit - posX1;

        isScroll = false;
        isSwipe = false;

        document.removeEventListener('touchmove', swipeAction);
        document.removeEventListener('mousemove', swipeAction);
        document.removeEventListener('touchend', swipeEnd);
        document.removeEventListener('mouseup', swipeEnd);

        sliderList.classList.add('grab');
        sliderList.classList.remove('grabbing');

        if (allowSwipe) {
            swipeEndTime = Date.now();
            if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
                if (posInit < posX1) {
                    slideIndex--;
                } else if (posInit > posX1) {
                    slideIndex++;
                }
            }

            if (posInit !== posX1) {
                allowSwipe = false;
                slide();
            } else {
                allowSwipe = true;
            }

        } else {
            allowSwipe = true;
        }

    },
    setTransform = function (transform, comapreTransform) {
        if (transform >= comapreTransform) {
            if (transform > comapreTransform) {
                sliderTrack.style.transform = `translate3d(${comapreTransform*1}px, 0px, 0px)`;
              //  slideIndex--
                console.log("INDD" +slideIndex)
            }
        }
        allowSwipe = false;
    },
    reachEdge = function () {
        transition = false;
        swipeEnd();
        allowSwipe = true;
    };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);


//let isEnd = false
//const CARD_WIDTH = document.querySelector(".customer__rate__card").offsetWidth
//let pos = 0


arrows.addEventListener('click', function () {
    let target = event.target;

    if (target.classList.contains('next')) {
        slideIndex++;
        if (!isEnd) {
            btns[0].classList.remove("active__card")
            btns[1].classList.add("active__card")
         
            pos+=CARD_WIDTH

            console.log(pos)
            sliderTrack.style.transform = `translateX(-${pos*1.5}px)`;
    
            isEnd = true
        } else {
            btns[1].classList.remove("active__card")
            btns[0].classList.add("active__card")
            isEnd = false
            pos=0
        sliderTrack.style.transform = `translateX(0px)`;
    }
    }  
    else {

        if (isEnd) {

            btns[1].classList.remove("active__card")
            btns[0].classList.add("active__card")
            sliderTrack.style.transform = `translateX(0px)`;
            isEnd=false
            pos=0
        } else {
            btns[0].classList.remove("active__card")
            btns[1].classList.add("active__card")
            pos+=CARD_WIDTH

            console.log(pos)
            sliderTrack.style.transform = `translateX(-${pos*1.5}px)`;
            isEnd=true
        }
        return;
    }

    
});


//.first-arrows, .second-arrows 
 console.log("SLIDES "+JSON.stringify(slides))

 console.log("IND" +slideIndex)

 const arrowBtns =   document.querySelector(".first-arrows")

 console.log("ARR" +JSON.stringify(arrowBtns))

const arrowLeft = document.querySelector(".arrow__left")
const arrowRight = document.querySelector(".arrow__right")

arrowLeft.addEventListener("click", ()=> {
    console.log("len", slideIndex, slides.length)
    console.log("IND" +slideIndex)




    
    //     console.log(slideIndex)
    if(slideIndex<=0){
    pos+=(Math.round(slides.length)-1)*CARD_WIDTH
    slideIndex=Math.round(slides.length)-1
    sliderTrack.style.transform = `translateX(-${pos*1}px)`;
} else {
    slideIndex--;
    pos-=CARD_WIDTH
   
 sliderTrack.style.transform = `translateX(-${pos*1}px)`;
    
}
     




 })

 
 arrowRight.addEventListener("click", ()=> {
     console.log("len", slideIndex, slides.length)
     console.log("IND" +slideIndex)
     if(slideIndex== Math.round(slides.length)-1){
         sliderTrack.style.transform = `translateX(0px)`;
        slideIndex=0
        pos=0
        isEnd=true

        }  else {
         slideIndex++;
             pos+=CARD_WIDTH
          sliderTrack.style.transform = `translateX(-${pos*1}px)`;

        }

 })
if( slides.length<=3) {
    document.querySelector(".second-arrows").style.display = "flex"
}   
else {
  arrowBtns.style.display = "flex"
}
                      
*/





/*
let isEnd = false
const CARD_WIDTH = document.querySelector(".customer__rate__card").offsetWidth
let pos = 0



const btns = document.querySelectorAll(".customers__cards__button")
const carousel = document.querySelector(".customers__carousel")
let slider = document.querySelector('.slider'),
    sliderList = slider.querySelector('.slider-list'),
    sliderTrack = slider.querySelector('.slider-track'),
    slides = slider.querySelectorAll('.slide'),
    arrows = slider.querySelector('.customers__cards__dots'),
    prev = arrows.children[0],
    next = arrows.children[1],

  //  console.log()
   // slideWidth = slides[0].offsetWidth,
   slideWidth = slides.offsetWidth
 


*/


/*
let isEnd = false
const CARD_WIDTH = document.querySelector(".customer__rate__card").offsetWidth
let pos = 0
let slideIndex=0


const btns = document.querySelectorAll(".customers__cards__button")
const carousel = document.querySelector(".customers__carousel")
let slider = document.querySelector('.slider'),
    sliderList = slider.querySelector('.slider-list'),
    sliderTrack = slider.querySelector('.slider-track'),
    slides = slider.querySelectorAll('.slide'),
    arrows = slider.querySelector('.customers__cards__dots'),
    prev = arrows.children[0],
    next = arrows.children[1],

  //  console.log()
   // slideWidth = slides[0].offsetWidth,
   slideWidth = slides.offsetWidth


   let startX = 0;
let endX = 0;

// Event listener for touch start
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

// Event listener for touch move
slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

// Event listener for touch end
slider.addEventListener('touchend', handleSwipe);

// Event listener for mouse down
slider.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    // Event listener for mouse move
    slider.addEventListener('mousemove', onMouseMove);
    // Event listener for mouse up
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
    console.log(slideIndex)
    const diff = startX - endX;
    const threshold = CARD_WIDTH / 2; // Adjust the threshold as needed

    if (diff > threshold) {
        // Swipe left
        if(slideIndex<=slides.length){
console.log(slideIndex, slides.length)
            slideIndex++
        }
        // Translate slider to show next slide
        pos -= CARD_WIDTH;
        if (pos < -(CARD_WIDTH * (slides.length - 1))) {
            pos = -(CARD_WIDTH * (slides.length - 1));
        }
    } else if (diff < -threshold) {
        // Swipe right
        // Translate slider to show previous slide
            slideIndex--
        pos += CARD_WIDTH;
        if (pos > 0) {
            pos = 0;
        }
    }

    // Apply the translation
    sliderTrack.style.transform = `translateX(${pos}px)`;

    // Reset startX and endX
    startX = 0;
    endX = 0;


    if(slideIndex==slides.length-1) {
        btns[0].classList.remove("active__card")
        btns[1].classList.add("active__card")
    } else {
        btns[1].classList.remove("active__card")
        btns[0].classList.add("active__card")
    }
}
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

       if (slideIndex < slides.length - 1) {
   // if (slideIndex < slides.length ) {
            slideIndex++;
            pos -= CARD_WIDTH;
        }
        if (pos < -(CARD_WIDTH * (slides.length - 1))) {
            pos = -(CARD_WIDTH * (slides.length - 1));
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

    if (slideIndex === slides.length - 1) {
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
        sliderTrack.style.transform = `translateX(-${CARD_WIDTH*(slides.length-1)}px)`;
     
    }  else {
        slideIndex=0
        btns[1].classList.remove("active__card")
        btns[0].classList.add("active__card")
        sliderTrack.style.transform = `translateX(-${0}px)`;
    }

    
});


 const arrowBtns =   document.querySelector(".first-arrows")

 console.log("ARR" +JSON.stringify(arrowBtns))

const arrowLeft = document.querySelector(".arrow__left")
const arrowRight = document.querySelector(".arrow__right")
 
if( slides.length<3) {
    document.querySelector(".second-arrows").style.display = "flex"
}   
else {
    arrowBtns.style.display = "flex"
}

























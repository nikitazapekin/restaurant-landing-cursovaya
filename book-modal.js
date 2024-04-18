
const modalWindow = document.querySelector(".modal")
const overlay = document.querySelector(".modal__overlay")

function test() {
    const cards = document.querySelectorAll(".popular__card");
let isOpenWindow = false; 

console.log("Cards: " + JSON.stringify(cards));

cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
        console.log(1);
        isOpenWindow = true;  
        if( isOpenWindow){

            console.log(JSON.stringify(modalWindow));
            modalWindow.style.display = "flex";
        }
    });
});


overlay.addEventListener("click", ()=> {
   
isOpenWindow=false;
modalWindow.style.display = "none";
document.body.style.overflow = "hidden";
 
})

document.querySelector(".modal__content__right__btn").addEventListener("click", ()=> {
    isOpenWindow=false;
    modalWindow.style.display = "none";
})
}



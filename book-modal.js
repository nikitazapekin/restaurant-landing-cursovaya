
const cards = document.querySelectorAll(".popular__card");

const modalWindow = document.querySelector(".modal")
const overlay = document.querySelector(".modal__overlay")
console.log("MOD" +modalWindow)
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



/*
cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
        console.log(1);
        isOpenWindow = true;  
        if (isOpenWindow){
            console.log(JSON.stringify(modalWindow));
            modalWindow.style.display = "flex";
            document.body.style.overflow = 'hidden'; // Здесь блокируем скроллинг
        }
    });
});


overlay.addEventListener("click", ()=> {
    isOpenWindow=false;
    modalWindow.style.display = "none";
    document.body.style.overflow = ''; // Возвращаем обычное поведение скроллинга
});

document.querySelector(".modal__content__right__btn").addEventListener("click", ()=> {
    isOpenWindow=false;
    modalWindow.style.display = "none";
    document.body.style.overflow = ''; // Возвращаем обычное поведение скроллинга
});
 */
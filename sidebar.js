const burger = document.querySelector(".burger")
console.log(burger)
const sidebar = document.querySelector(".burger__content")
const btns__header  = document.querySelectorAll(".burger__btn")
let isOpen = false
burger.addEventListener("click", ()=> {
    if(!isOpen){

        sidebar.style.transform = `translateX(${0}%)`;
        isOpen=true
    } else {
        sidebar.style.transform = `translateX(${-100}%)`;
        isOpen=false
    }

})

btns__header.forEach(item=> {

    item.addEventListener("click", ()=> {
        if(isOpen){
            sidebar.style.transform = `translateX(${-100}%)`;
            isOpen=false
        }
    })
})
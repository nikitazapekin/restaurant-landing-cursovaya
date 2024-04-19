

//function test() {

    const modalWindow = document.querySelector(".modal")
    const overlay = document.querySelector(".modal__overlay")

    
    let modalImage = document.querySelector(".modal__content__image")
    let modalTitle = document.querySelector(".modal__content__right__title")
    let modalAbout = document.querySelector(".modal__content__right__about")
    function addEventsModalWindow() {
        const popularImages = document.querySelectorAll(".popular__card__image")
        const popularTitle = document.querySelectorAll(".popular__card__title")
        const popularAbout = document.querySelectorAll(".popular__card__about")
        console.log("POP"+JSON.stringify(popularImages))
    const cards = document.querySelectorAll(".popular__card");
    let isOpenWindow = false;

    console.log("Cards: " + JSON.stringify(cards));

    cards.forEach((card, index) => {
        card.addEventListener("click", (event) => {
            console.log(1);

            console.log("CARDDD" + card.innerHTML)
            
            isOpenWindow = true;
            if (isOpenWindow) {
                document.body.style.overflow = "hidden";
              //  console.log(popularImages.innerHTML)
             // popularImages.forEach(item=>console.log(item.innerHTML))
modalImage.src = popularImages[index].src
console.log("TITLE" + popularTitle[index].textContent,  popularAbout[index].textContent)
modalTitle.textContent= popularTitle[index].textContent
modalAbout.textContent = popularAbout[index].textContent
                console.log(JSON.stringify(modalWindow));
                modalWindow.style.display = "flex";
            }
        });
    });


    overlay.addEventListener("click", () => {

        isOpenWindow = false;
        modalWindow.style.display = "none";

        document.body.style.overflow = "scroll";
      
        
    })

    document.querySelector(".modal__content__right__btn").addEventListener("click", () => {
        isOpenWindow = false;
        modalWindow.style.display = "none";
        document.body.style.overflow = "scroll";
    })
}

//}

/*

   <div class="modal">
        <div class="modal__window" id="modal">
            <div class="modal__header">
                <p class="modal__header__title">
                    Buy your loved one
                </p>
                <p class="modal__header__about">
                    Choose your loved one
                    </p>
                <div class="modal__content">
                    <div class="modal__content__left">
                        <img src="./static/popular/IMAGE.png" alt="dish" class="modal__content__image" />
                    </div>
                    <div class="modal__content__right">
                        <div class="modal__content__right__inform">

                            <p class="modal__content__right__title">
                                Desert Sicilia
                            </p>
                            <p class="modal__content__right__about">
                                The most common dish in ancient Greece
                            </p>
                        </div>
                        <button class="modal__content__right__btn btn__animation ">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal__overlay"></div>
    </div>

    */
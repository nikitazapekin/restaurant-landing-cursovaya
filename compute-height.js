window.onload = function() {

    const slider = document.querySelector(".slider")
    const cards = document.querySelectorAll(".slide")
    let maxHeight = 0
    cards.forEach(card=> card.offsetHeight >maxHeight ? maxHeight =  card.offsetHeight : maxHeight = maxHeight )
    console.log("HEIGHT "+ maxHeight)
    slider.style.height = maxHeight+"px"
   /* var parent = document.getElementById("parent");
    var child = document.getElementById("child");
    var cards = document.getElementsByClassName("card");
    var maxHeight = 0;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].offsetHeight > maxHeight) {
            maxHeight = cards[i].offsetHeight;
        }
    }
    child.style.height = maxHeight + "px";
    parent.style.height = maxHeight + "px"; */
};
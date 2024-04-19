window.onload = function() {
    const slider = document.querySelector(".slider")
    const cards = document.querySelectorAll(".slide")
    let maxHeight = 0
    cards.forEach(card=> card.offsetHeight >maxHeight ? maxHeight =  card.offsetHeight : maxHeight = maxHeight )
    slider.style.height = maxHeight+"px"
};
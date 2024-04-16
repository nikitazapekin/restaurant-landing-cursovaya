const eye = document.querySelector(".eye__btn")
const input = document.querySelector(".password__input")
let isVisible = false
eye.addEventListener("click", () => {
    if (isVisible) {
        isVisible = false
        eye.src="./static/auth/hidden.png"
        input.type="password"
    } else {
        isVisible = true
        eye.src = "./static/auth/eye.png"
        input.type="text"
    }
})
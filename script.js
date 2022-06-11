let popup_wrapper = document.querySelector(".popup-wrapper");
let mes__send = document.querySelector(".mes__send")
let close = document.querySelector(".close")

popup_wrapper.style.display = "none"

mes__send.onclick = () => {
    popup_wrapper.style.display = "flex"
}
close.onclick = () => {
    popup_wrapper.style.display = "none"
}
let tech__btn = document.querySelector(".tech__btn");
let tech = document.querySelector(".tech");

let contact__btn = document.querySelector(".contact__btn");
let contact = document.querySelector(".contact");

let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let close = document.querySelector(".nav__close");

burger.onclick = () => {
    if (nav.style.transform == "translateX(0px)"){
        nav.style.transform = "translateX(-999%)"
    }
    else{
        nav.style.transform = "translateX(0px)"
    }
}

close.onclick = () => {
    nav.style.transform = "translateX(-999%)"
}

tech__btn.onclick = () => {
    if(tech.style.height == "100%"){
        tech.style.height = "0"
    }
    else{
        tech.style.height = "100%"
    }
}
contact__btn.onclick = () => {
    if (contact.style.display == "none"){
        contact.style.display = "block"
    }
    else{
        contact.style.display = "none"
    }
}
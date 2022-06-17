let tech__btn = document.querySelector(".tech__btn");
let tech = document.querySelector(".tech");
let tech__img = document.querySelector(".tech__img")

let contact__btn = document.querySelector(".contact__btn");
let contact = document.querySelector(".contact");
let contact__img = document.querySelector(".contact__img")

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
        tech__img.style.transform = "rotate(0)"
        tech__btn.style.marginTop = "0"
        tech__btn.style.background = "0"
    }
    else{
        tech.style.height = "100%";
        tech__img.style.transform = "rotate(180deg)";
        tech__btn.style.marginTop = "15px"
        tech__btn.style.background = "#202020"
    }
}
contact__btn.onclick = () => {
    if (contact.style.display == "none"){
        contact.style.display = "block"
        contact__img.style.transform = "rotate(180deg)"
        contact__btn.style.background = "#202020"
    }
    else{
        contact.style.display = "none"
        contact__img.style.transform = "rotate(0)"
        contact__btn.style.background = "0"
    }
}
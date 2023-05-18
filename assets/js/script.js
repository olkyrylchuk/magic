let menuBtn = document.querySelector(".nav__burger");
let menu = document.querySelector(".menu");
let submenu = document.querySelector(".submenu");
let projSubmenu = document.querySelector(".proj__submenu");
let down = document.querySelector(".aboutus__arrow-down");
let pDown = document.querySelector(".projects__arrow-down");
let rotate = document.querySelector(".rotate");
let mass = document.querySelector(".thanks-message");
const sendMail = document.getElementById("sendMail");
const modalElem = document.querySelector(".modal");
const burger = document.querySelector(".header__burger");
const close = document.querySelector(".header__close");

menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});
down.addEventListener("click", function () {
    submenu.classList.toggle("submenu__active");
    down.classList.toggle("rotate");
});
pDown.addEventListener("click", function () {
    projSubmenu.classList.toggle("proj__submenu__active");
    pDown.classList.toggle("rotate");
});

// виводить повідомлення після відправки контактної форми
sendMail.addEventListener("click", function () {
    mass.classList.add("thanks-message-visible");
    modalElem.classList.add("modal-visible");
});

document.addEventListener("click", (e) => {
    // const withinBoundaries = e.composedPath().includes(modalElem);
    const target = e.target;
    if (target === modalElem) {
        modalElem.style.opacity = 0;
        setTimeout(() => {
            location.reload();
        }, 300);
    }
});

// заміна іконки бургер на хрестик
burger.addEventListener("click", function () {
    burger.style.display = "none";
    close.style.display = "flex";
});

close.addEventListener("click", function () {
    close.style.display = "none";
    burger.style.display = "flex";
});

// блок відповідає за розкріття відгуків
// let resize = document.querySelector(".opinions-text__resize");
// let opinanItemOne = document.querySelector(".opinian__item-01");
// let opinanItemTwo = document.querySelector(".opinian__item-02");
// let opinanItemThree = document.querySelector(".opinian__item-03");
// let opinanItem = document.querySelector(".opinions-block-item-01");
// let opinanItemSecond = document.querySelector(".opinions-block-item-02");
// let opinanItemTherd = document.querySelector(".opinions-block-item-03");
// let opinanHidden = document.querySelector(".opinions-text__hidden");

// opinanItem.addEventListener("click", function () {
//     opinanItemOne.classList.toggle("opinions-text__resize");
// });

// opinanItemSecond.addEventListener("click", function () {
//     opinanItemTwo.classList.toggle("two-columns-resize");
// });

// opinanItemTherd.addEventListener("click", function () {
//     opinanItemThree.classList.toggle("opinions-text__resize");
// });

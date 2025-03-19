// Анимация счетчика
const INCREASE_NUMBER_ANIMATION_SPEED = 1000;
const INCREASE_NUMBER_ANIMATION_SPEED_20 = 400;
const INCREASE_NUMBER_ANIMATION_SPEED_1000 = 400;
let animationInited = false;


function increaseNumberAnimationStep4(i, element, endNumber) {
    if(i <= endNumber) {
        element.innerText = i;
        i ++;
    }
    setTimeout(() => increaseNumberAnimationStep4(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED);
}

function initIncreaseNumberAnimation4() {
    element = document.querySelectorAll(".school_card_4");

    element.forEach((element) => increaseNumberAnimationStep4(0, element, 4));
}



function increaseNumberAnimationStep20(i, element, endNumber) {
    if(i <= endNumber) {
        if(i === endNumber) {
            element.innerText = ">" + i;
        } else {
            element.innerText = i;
        }
        i += 2;
    }
    setTimeout(() => increaseNumberAnimationStep20(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED_20);
}

function initIncreaseNumberAnimation20() {
    element = document.querySelector(".school_card_20");
    increaseNumberAnimationStep20(0, element, 20);
}


function increaseNumberAnimationStep1000(i, element, endNumber) {
    if(i <= endNumber) {
        if(i === endNumber) {
            element.innerText = ">" + i;
        } else {
            element.innerText = i;
        }
        i += 100;
    }
    setTimeout(() => increaseNumberAnimationStep1000(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED_1000);
}

function initIncreaseNumberAnimation1000() {
    element = document.querySelector(".school_card_1000");
    increaseNumberAnimationStep1000(0, element, 1000);
}


function updateCounter() {
    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector(".school_card_text").offsetTop;

    if (windowBottomPosition >= countElementPosition && !animationInited) {
        animationInited = true;
        initIncreaseNumberAnimation4();
        initIncreaseNumberAnimation20();
        initIncreaseNumberAnimation1000();
    }
}
window.addEventListener("scroll", updateCounter);


function addSmoothScroll(link) {
    link.addEventListener("click", onLinkClick);
}

function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelectorAll('a[href^="#"]').forEach(addSmoothScroll);
document.querySelectorAll('button[href^="#"]').forEach(addSmoothScroll);
document.querySelectorAll('img[href^="#"]').forEach(addSmoothScroll);
document.querySelectorAll('p[href^="#"]').forEach(addSmoothScroll);
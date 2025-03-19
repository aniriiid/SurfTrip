 
 // Скролл при нажатии на стрелки, просто переделала в цикл
        // leftBtn.addEventListener("click", e => {
        //     coachScroll.scrollLeft -= window.innerWidth * 0.32;// Здесь нужно подумать, как написать, чтобы сдвиг был не фикс
        //     leftBtn.style.color = "#001E89";
        //     leftBtn.style.backgroundColor = "#E1E1E1";
        //     leftBtn.style.borderColor = "#001E89";            
        //     rightBtn.style.color = "#fff";
        //     rightBtn.style.backgroundColor = "rgba(2, 7, 46, 0)";
        //     rightBtn.style.borderColor = "#fff";

        // });
        //  rightBtn.addEventListener("click", e => {
        //     coachScroll.scrollLeft += window.innerWidth * 0.32 // Здесь нужно подумать, как написать, чтобы сдвиг был не фикс
        //     rightBtn.style.color = "#001E89";
        //     rightBtn.style.backgroundColor = "#E1E1E1";
        //     rightBtn.style.borderColor = "#001E89";            
        //     leftBtn.style.color = "#fff";
        //     leftBtn.style.backgroundColor = "rgba(2, 7, 46, 0)";
        //     leftBtn.style.borderColor = "#fff";
        // });
 
 
 // Scroll события правильные
 const scrollContainer = document.querySelectorAll(".scroll_container");
 const leftScroll = document.querySelectorAll(".scroll_left");
 const rightScroll = document.querySelectorAll(".scroll_right");
 let arrLength = leftScroll.length;
 const programScroll = document.querySelectorAll(".program_scroll_container");
 const leftScrollProgram = document.querySelector(".program_scroll_left");
 const rightScrollProgram = document.querySelector(".program_scroll_right");


 const programCard = document.querySelectorAll(".program_container_card");
 const coachCard = document.querySelectorAll(".coach_card");
 const reviewCard = document.querySelectorAll(".review_card");



 const cardText = document.querySelectorAll(".user_name");
 const cardReview = document.querySelectorAll(".review_card");
 const imgReview = document.querySelectorAll(".review_card img");


 // Скролл для блока "Наши программы"
 function getProgramWidth (container) {
    const card = container.querySelector(".program_container_card");
    return card ? card.offsetWidth + 20 : 0;
 }
 programScroll.forEach((container) => {
    leftScrollProgram.addEventListener("click", () => {
        let cardWidth = getProgramWidth(container);
        container.scrollLeft -= cardWidth;
    });

    rightScrollProgram.addEventListener("click", () => {
        let cardWidth = getProgramWidth(container);
        container.scrollLeft += cardWidth;
    });

    leftScrollProgram.addEventListener("mouseover", () => {
        leftScrollProgram.classList.add("activeBtn");
    });
    
    leftScrollProgram.addEventListener("mouseout", () => {
        leftScrollProgram.classList.remove("activeBtn");
    }); 

    rightScrollProgram.addEventListener("mouseover", () => {
        rightScrollProgram.classList.add("activeBtn");
    });

    rightScrollProgram.addEventListener("mouseout", () => {
        rightScrollProgram.classList.remove("activeBtn");
    });
        
 });



// Скролл для блока "Наши тренеры" и "Отзывы"
 function getCardWidth (container) {
    const card = container.querySelector(".coach_card, .review_card");
    return card ? card.offsetWidth + 40 : 0;

 }
 scrollContainer.forEach((container, index) => {
    leftScroll[index].addEventListener("click", () => {
        let cardWidth = getCardWidth(container);
        container.scrollLeft -= cardWidth;
    });

    rightScroll[index].addEventListener("click", () => {
        let cardWidth = getCardWidth(container);
        container.scrollLeft += cardWidth;
    });

    leftScroll[index].addEventListener("mouseover", () => {
        leftScroll[index].classList.add("activeBtn");
    });
    
    leftScroll[index].addEventListener("mouseout", () => {
        leftScroll[index].classList.remove("activeBtn");
    }); 

    rightScroll[index].addEventListener("mouseover", () => {
        rightScroll[index].classList.add("activeBtn");
    });

    rightScroll[index].addEventListener("mouseout", () => {
        rightScroll[index].classList.remove("activeBtn");
    });
        
 });

for (let i = 0; i < cardReview.length; i++) {
    cardReview[i].addEventListener("mouseover", () => {
        cardText[i].classList.add("visible");
        imgReview[i].classList.add("mouseOver");

    });

    cardReview[i].addEventListener("mouseout", () => {
        cardText[i].classList.remove("visible");
        imgReview[i].classList.remove("mouseOver");

    });
}; 



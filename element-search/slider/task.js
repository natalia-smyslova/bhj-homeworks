function slideSetActive(index) {
    // Деактивировать текущий слайд

    slides.forEach(function (item) {
        if (item.classList.contains("slider__item_active")) {
            item.classList.remove("slider__item_active")
        }
    });

    // Активировать index слайд
    slides[index].classList.add("slider__item_active");

    // Деактивировать текущю точку
    dots.forEach(function (item) {
        if (item.classList.contains("slider__dot_active")) {
            item.classList.remove("slider__dot_active")
        }
    });
    // Активировать index точку
    dots[index].classList.add("slider__dot_active");

}

const slides = document.querySelectorAll("div.slider__item");
const arrSlides = Array.from(slides);

//Присвоить клик стрелкам
const arrows = document.querySelectorAll("div.slider__arrow");
arrows.forEach(function (item) {
    item.onclick = function () {
        if (this.classList.contains("slider__arrow_next")) {
            //Поиск индекса слайда
            let index = arrSlides.findIndex(function (item) {
                if (item.classList.contains("slider__item_active")) {
                    return item
                }
            });
            slideSetActive((index + 1) % arrSlides.length);
        }

        if (this.classList.contains("slider__arrow_prev")) {
            //Поиск индекса слайда
            let index = arrSlides.findIndex(function (item) {
                if (item.classList.contains("slider__item_active")) {
                    return item
                }
            });
            if (index > 0) {
                slideSetActive((index - 1))
            }
            if (index <= 0) {
                index = (arrSlides.length - 1);
                slideSetActive((index));
            }
        }
    }
});

const dots = document.querySelectorAll("div.slider__dot");

dots.forEach(function (element, index) {
    element.onclick = function Search() {
        // Ищем индекс нажатой точки
        slideSetActive(index);
    }
});


// function getElementIndex(element) {
//     return Array.from(element.parentNode.children).indexOf(element);
// }

// const arrows = document.querySelectorAll("div.slider__arrow");
// console.log(arrows);

// const dots = document.querySelectorAll("div.slider__dot");
// dots.forEach(function(item){
//     item.onclick = function(){
//         let dotClickedIndex = getElementIndex(this);
//         document.querySelector("div.slider__item_active").className = "slider__item";
//         document.querySelector("div.slider__item:nth-child(" +(dotClickedIndex+1)+ ")").className = "slider__item slider__item_active";

//         document.querySelector("div.slider__dot_active").className = "slider__dot";
//         this.className = "slider__dot slider__dot_active";



//     }
// });

// arrows.forEach(function (item) {
//     item.onclick = function () {
//         let sliderItemActive = document.querySelector("div.slider__item_active");
//         if (this.className == "slider__arrow slider__arrow_next") {
//             if (sliderItemActive.nextElementSibling == null) {
//                 document.querySelector("div.slider__item:first-child").className = "slider__item slider__item_active";
//             }
//             else {
//                 sliderItemActive.nextElementSibling.className = "slider__item slider__item_active";
//             }
//         }
//         else {
//             if (sliderItemActive.previousElementSibling == null) {
//                 document.querySelector("div.slider__item:last-child").className = "slider__item slider__item_active";
//             }
//             else {
//                 sliderItemActive.previousElementSibling.className = "slider__item slider__item_active";
//             }
//         }
//         sliderItemActive.className = "slider__item";

//         let sliderItemActiveIndex = getElementIndex(document.querySelector("div.slider__item_active"));
//         document.querySelector("div.slider__dot_active").className = "slider__dot";
//         document.querySelector("div.slider__dot:nth-child(" + (sliderItemActiveIndex + 1) + ")").className = "slider__dot slider__dot_active";
//     };
// });




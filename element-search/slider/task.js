function getElementIndex(element) {
    return Array.from(element.parentNode.children).indexOf(element);
}

const arrows = document.querySelectorAll("div.slider__arrow");
console.log(arrows);

const dots = document.querySelectorAll("div.slider__dot");
dots.forEach(function(item){
    item.onclick = function(){
        let dotClickedIndex = getElementIndex(this);
        document.querySelector("div.slider__item_active").className = "slider__item";
        document.querySelector("div.slider__item:nth-child(" +(dotClickedIndex+1)+ ")").className = "slider__item slider__item_active";
        
        document.querySelector("div.slider__dot_active").className = "slider__dot";
        this.className = "slider__dot slider__dot_active";



    }
});

arrows.forEach(function (item) {
    item.onclick = function () {
        let sliderItemActive = document.querySelector("div.slider__item_active");
        if (this.className == "slider__arrow slider__arrow_next") {
            if (sliderItemActive.nextElementSibling == null) {
                document.querySelector("div.slider__item:first-child").className = "slider__item slider__item_active";
            }
            else {
                sliderItemActive.nextElementSibling.className = "slider__item slider__item_active";
            }
        }
        else {
            if (sliderItemActive.previousElementSibling == null) {
                document.querySelector("div.slider__item:last-child").className = "slider__item slider__item_active";
            }
            else {
                sliderItemActive.previousElementSibling.className = "slider__item slider__item_active";
            }
        }
        sliderItemActive.className = "slider__item";

        let sliderItemActiveIndex = getElementIndex(document.querySelector("div.slider__item_active"));
        document.querySelector("div.slider__dot_active").className = "slider__dot";
        document.querySelector("div.slider__dot:nth-child(" + (sliderItemActiveIndex + 1) + ")").className = "slider__dot slider__dot_active";
    };
});



















// Отображение блока осуществляется путём присовения класса reveal_active:

// <div class="reveal reveal_active"></div>

// Процесс реализации
// Отслеживайте изменение прокрутки окна
// При изменении прокрутки, получите информацию о конкретном положении элемента с классом reveal.
// При нахождении элемента в поле зрения, присвойте этому элементу класс reveal_active

// Событие scroll
// Метод getBoundingClientRect

// Обратите внимание, что при прокрутке возвращаемые координаты getBoundingClientRect() меняются

const reveal = document.querySelectorAll("div.reveal");
console.log(reveal);
let arrReveal = Array.from(reveal);
console.log(arrReveal);
console.log(arrReveal[0].className);

function isVisible(arrReveal) {
    for (let i = 0; i < arrReveal.length; i++) {
        setInterval(() => {
            let viewportHeight = window.innerHeight;
            let { top, bottom } = reveal[i].getBoundingClientRect();
            console.log(top,bottom);
            if ((top < viewportHeight) == true) {
                arrReveal[i].className = "reveal reveal_active";
            }

            if ((bottom < 0) == true) {
                arrReveal[i].className = "reveal";
            }

        }, 1000);
    }
};

window.addEventListener("scroll", isVisible(arrReveal));

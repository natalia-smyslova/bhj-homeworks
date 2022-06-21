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

window.onscroll = function(){  
    for (let i = 0; i < reveal.length; i++) {
    let viewportHeight = window.innerHeight;
    console.log(viewportHeight);
    let { top, bottom } = reveal[i].getBoundingClientRect();
    console.log(top,bottom);
    if ((top < viewportHeight) == true) {
        reveal[i].classList.add("reveal_active");
    }

    if ((bottom < 0) == true) {
        reveal[i].classList.remove("reveal_active");
    }
}
};

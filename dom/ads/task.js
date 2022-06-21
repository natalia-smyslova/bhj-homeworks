// Необходимо реализовать механизм смены текстовых объявлений. Каждое объявление меняется через 1 секунду.

// Для того, чтобы задать текстовый элемент активным, установите у него класс rotator__case_active:

// Процесс реализации

// Каждую секунду меняйте класс с одного элемента на другой
// Сделайте акцент на том, чтобы на странице можно было использовать несколько ротаторов одновременно
// Смена текстовых блоков должна быть бесконечной.
// Подумайте, как из setInterval сделать бесконечный цикл

const rotator = document.querySelectorAll("span.rotator__case");

setInterval(() => {
    let rotatorActive = document.querySelector("span.rotator__case_active");
    let nextElement = rotatorActive.nextElementSibling;
    rotatorActive.classList.toggle("rotator__case_active");
    if (nextElement == null) {
        rotator[0].classList.toggle("rotator__case_active");
    }
    else {
        nextElement.classList.toggle("rotator__case_active");
    }
}, 1000);
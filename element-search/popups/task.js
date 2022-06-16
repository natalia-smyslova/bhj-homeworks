// Процесс реализации
// В момент запуска скрипта, покажите окно #modal_main
// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
// По нажатию на элемент с классом show-success покажите окно #modal_success
// Элементы с классом modal__close предназначены для закрытия активного окна.

//Главное окно
const modal = document.getElementById("modal_main");
console.log(modal);
modal.className = "modal modal_active";

const modalSuccess = document.getElementById("modal_success");
console.log(modalSuccess);

const cross = document.getElementsByClassName("modal__close modal__close_times");
const closeCross = Array.from(cross);
console.log(closeCross);

const modalClose = document.getElementsByClassName("btn btn_danger modal__close show-success");
const redButton = Array.from(modalClose);
console.log(redButton);


if (modal.className == "modal modal_active") {
    let result = "кнопка поменялась";
    redButton[0].onclick = function () {
        console.log(result);
        modalSuccess.className = "modal modal_active";
        modal.className = "modal";

    };
}

for (let i = 0; i < closeCross.length; i++) {
    closeCross[i].onclick = function () {
        console.log("крестик нажат");
        modalSuccess.className = "modal";
        modal.className = "modal";
    }
};


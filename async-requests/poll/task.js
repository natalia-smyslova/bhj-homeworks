// Процесс реализации
// Загрузите случайный опрос, отправив GET-запрос по адресу: https://netology-slow-rest.herokuapp.com/poll.php

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

let poolTitle = document.getElementById("poll__title");

let poolAnswers = document.getElementById("poll__answers");


xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === xhr.DONE) {

        let response = JSON.parse(xhr.responseText);
        response = response.data;


        // Отобразите вопрос и список ответов в виде кнопок
        let responseAnswers = response.answers;
        poolTitle.textContent = response.title;

        responseAnswers.forEach(function (item, index) {
            poolAnswers.insertAdjacentHTML("beforeend", `<button class="poll__answer">
            </button>`)

            let button = document.querySelectorAll("button");
            button[index].textContent = item;

            button[index].onclick = function () {
                confirm("Спасибо, ваш голос засчитан!");
            }
        });
    }
})






// При нажатии на какую-либо кнопку, выведите диалоговое окно с надписью «Спасибо, ваш голос засчитан!»

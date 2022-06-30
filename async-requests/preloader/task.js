// Процесс реализации

// Загрузите данные о курсе валют, отправив GET-запрос по адресу https://netology-slow-rest.herokuapp.com
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

let img = document.querySelector("img");

let items = document.getElementById("items");

xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === xhr.DONE) {

        let response = JSON.parse(xhr.responseText);

        // По факту загрузки скройте анимацию загрузки
        img.classList.remove("loader_active");

        // Все данные о курсе валют необходимо подгрузить в элемент #items

        response = response.response;
        //Находим массив валюты
        let valutes = response.Valute;

        //Делаем массив с информацией о каждой конкретной валюте
        let information = []
        for (let key in valutes) {
            information.push(valutes[key]);
        }

        //Находим конкретный параметр внутри одной валюты и присваиваем его нашему шаблону
        information.forEach(function (element, index) {

            //Создаем шаблон
            items.insertAdjacentHTML("beforeend", `
        <div class="item">
        <div class="item__code">
        USD
    </div>
    <div class="item__value">
        32
    </div>
    <div class="item__currency">
        руб.
    </div>
    </div>
          `)

            let itemCode = document.querySelectorAll("div.item__code");
            itemCode[index].textContent = element.CharCode;

            let itemValue = document.querySelectorAll("div.item__value");
            itemValue[index].textContent = element.Value;

        });

    }
})




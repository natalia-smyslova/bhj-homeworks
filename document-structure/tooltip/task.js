//Элемент с гипертекстом
let promt = document.getElementsByClassName("has-tooltip");;
promt = Array.from(promt);

promt.forEach(function (item) {

    item.onclick = function () {
        //Положение на странице элемента, по которому клик
        let promtPlace = item.getBoundingClientRect();
        console.log(promtPlace.bottom, promtPlace.left);

        //Отключение всех активных подсказок при клике 
        let tooltips = document.querySelectorAll("div.tooltip");
        tooltips.forEach(function (element) {
            if (element.classList.contains("tooltip_active")) {
                element.classList.remove("tooltip_active");
                return false
            }
        });


        //Проверка: не создана ли уже подсказка?
        if (item.nextElementSibling == null || item.nextElementSibling.classList.contains("tooltip") == false) {

            //Создаем у этого элемента подсказку
            item.insertAdjacentHTML("afterend", '<div class="tooltip" style="left: 0; top: 0"></div>');

            //Подсказка конкретного элемента
            let tooltip = item.nextElementSibling;

            //Присваиваем тексту подсказки заголовок элемента
            tooltip.textContent = item.getAttribute("title");

            //Делаем подсказку видимой
            tooltip.classList.add("tooltip_active");

            //Расположение подсказки
            tooltip.style.top = (String(promtPlace.bottom) + "px");
            tooltip.style.left = (String(promtPlace.left) + "px")

            return false

        }
    }
});


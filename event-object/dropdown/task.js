// Процесс реализации
// Сделайте сворачивание/разворачивание списка по нажатию на кнопку
// Сделайте замену значения по выбору соответствующего пункта меню
// Предусмотрите случай, когда на странице может одновременно находиться несколько таких кнопок
// Не забывайте запрещать переход по ссылке


// В элементе с классом dropdown__value содержится выбранное значение.

const value = document.querySelector("div.dropdown__value");
console.log(value);

// Для того, чтобы открыть меню, требуется проставить класс dropdown__list_active:

const list = document.querySelector("ul")

value.onclick = function () {
    list.className = "dropdown__list dropdown__list_active";
};

// Нажатие на элемент с классом dropdown__item при открытом списке должно:

const item = document.querySelectorAll("li.dropdown__item");
const arrItem = Array.from(item);

for (let i = 0; i < arrItem.length; i++) {
    arrItem[i].onclick = function () {
        // Закрывать список
        list.className = "dropdown__list";
        // Устанавливать новое значение в элемент с классом dropdown__value
        document.querySelector("div.dropdown__value").textContent = arrItem[i].textContent;
        return false;
    };
};
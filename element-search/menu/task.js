// Процесс реализации
// Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link

const link = document.querySelectorAll("a.menu__link");
console.log(link);

const arr = Array.from(link);


for (let i = 0; i < arr.length; i++) {

    if (arr[i].closest("ul") != null) {
        const menu = arr[i].closest("ul");
        arr[i].onclick = function () {
            menu.className = "menu menu_sub menu_active";
            console.log(menu.className);
            return false
        }
    }
}



// Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
// Запрещайте переход по ссылке для тех, что имеют вложенное меню.
// Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.
// В решении необходимо использовать методы, изученные на занятии, работы с ручной подстановкой индексов массива приниматься не будут.
// Необходимые методы указаны в "Подсказках"

// Метод Array.from() или оператор распространения (spread, «...») для удобной навигации по найденным элементам


// Процесс реализации
// Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link

// Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
// Запрещайте переход по ссылке для тех, что имеют вложенное меню.
// Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.
// В решении необходимо использовать методы, изученные на занятии, работы с ручной подстановкой индексов массива приниматься не будут.
// Необходимые методы указаны в "Подсказках"

// Метод Array.from() или оператор распространения (spread, «...») для удобной навигации по найденным элементам

const links = document.querySelectorAll(".menu_main > li > a.menu__link");
console.log(links);

for (let i = 0; i < links.length; ++i) {
    console.log(links[i]);
    links[i].onclick = function () {
        // console.log(this.parentElement.querySelectorAll("ul").length);
        console.log(this);
        if (this.parentElement.querySelectorAll("ul").length) {
            let isActive = this.parentElement.querySelector("ul").classList.contains('menu_active');
            console.log(isActive);
            // <ul class="menu menu_sub menu_active"> => <ul class="menu menu_sub">
            document.querySelectorAll(".menu_main ul.menu.menu_sub.menu_active").forEach(function (item) {
                // item.className = "menu menu_sub";
                item.classList.remove("menu_active");
            });
            if (!isActive)
                this.parentElement.querySelector("ul").classList.add("menu_active");
            // this.parentElement.querySelector("ul").classList.toggle("menu_active");
            return false;
        }
    };

}

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

for(let i = 0; i < links.length; ++i){
    console.log(links[i]);
    links[i].onclick = function(){
        // console.log(this.parentElement.querySelectorAll("ul").length);
        console.log(this);
        if(this.parentElement.querySelectorAll("ul").length){
            // <ul class="menu menu_sub menu_active"> => <ul class="menu menu_sub">
            document.querySelectorAll(".menu_main ul.menu.menu_sub.menu_active").forEach(function(item){
                item.className = "menu menu_sub";
            }); 
            this.parentElement.querySelector("ul").className = "menu menu_sub menu_active";
            return false;
        }
    };

}

// const arr = Array.from(link);
// console.log(arr);

// console.log(arr[1].closest("ul").querySelector("ul.menu.menu_sub").className);



// const ul = document.querySelectorAll("ul.menu.menu_sub");
// console.log(ul);


// // ВАРИАНТ ВТОРОЙ

// for (let i = 1; i < arr.length; i++) {
//     //Получили все элементы (2) menu.menu_sub
//     console.log(arr[i].closest("ul").querySelectorAll("ul.menu.menu_sub"));
//     //так работает только у ближайшего элемента
//     console.log(arr[i].closest("ul").querySelector("ul.menu.menu_sub").className);
    
//     if (arr[i].closest("ul").querySelectorAll("ul.menu.menu_sub") != null) {
//         arr[i].onclick = function () {
//             let test = arr[i].closest("ul").querySelector("ul.menu.menu_sub");
//             console.log(test);
//             // test[i].className = "menu menu_sub menu_active";
//             // return false



//             // menu.querySelector("ul.menu.menu_sub").className = "menu menu_sub menu_active";
//             // arr[i].closest("ul.menu.menu_sub").className = "menu menu_sub menu_active";
//             // return false
//         }
//         break
//     }
// }
// // }



// ВАРИАНТ ПЕРВЫЙ


// for (let i = 1; i < arr.length; i++) {

//     if (arr[i].closest("ul") != null) {
//         let menu = arr[i].closest("ul");
//         arr[i].onclick = function () {
//             menu.className = "menu menu_sub menu_active";
//             console.log(menu.className);
//             return false
//         }
//     }
// }

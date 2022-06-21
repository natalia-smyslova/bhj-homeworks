// Процесс реализации
// Зарегистрируйте обработчики событий на переключателях вкладок
// Сделайте акцент на том, что таких механизмов переключения может быть несколько на странице

// Советы
// Для удобного нахождения индекса вкладки, можно использовать метод indexOf 
// в найденном массиве вкладок .tab. Найденный индекс можно использовать для показа нужного содержимого .tab__c

// Для того, чтобы вкладка была выбранной, у элемента с классом tab должен быть класс tab_active:
// Для того, чтобы показывалось верное содержимое, у элемента с классом tab__content должен быть класс tab__content_active:
// При переключении вкладки, нужно поставить эти два активных класса соответствующим элементам.

const tab = document.querySelectorAll("div.tab");
const arrTab = Array.from(tab);

const content = document.querySelectorAll("div.tab__content");
const arrContent = Array.from(content);


for (let i = 0; i < arrTab.length; i++) {
    arrTab[i].onclick = function () {
        if (arrTab[i].classList.contains("tab")) {
            let activeTab = document.querySelector("div.tab_active");
            activeTab.classList.remove("tab_active");
            arrTab[i].classList.add("tab_active");
        };

        let number = arrTab.indexOf(arrTab[i]);
        console.log(number);
        arrContent.forEach(function (element, index) {
            console.log(index);
            if (index != number) {
                element.className = "tab__content";
            }
            else {
                element.className = "tab__content_active";
            }
        })
    };
};

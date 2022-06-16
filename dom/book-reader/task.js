// При нажатии на один из элементов с классом font-size, вам необходимо:

// Поставить этому элементу класс font-size_active
// В зависимости от размера, поставить элементу с классом book соответствующий класс

let fontSize = document.querySelectorAll("a.font-size");

let book = document.getElementById("book");

fontSize.forEach(function (item) {

    item.onclick = function () {
        let fontSizeActive = document.querySelector("a.font-size_active");
        fontSizeActive.classList.toggle("font-size_active");
        item.classList.toggle("font-size_active");

        if (item.classList.contains("font-size_small")) {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        }
        if (item.classList.contains("font-size_big")) {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        }
        if ((item.classList.contains("font-size_small")) == false && (item.classList.contains("font-size_big")) == false) {
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
        }
        
        return false
    }
})

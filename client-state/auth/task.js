// Процесс реализации
// Реализуйте механизм авторизации. Для этого передайте данные формы с помощью POST-запроса по адресу
//  https://netology-slow-rest.herokuapp.com/auth.php

let btn = document.getElementById("signin__btn");

let welcome = document.getElementById("welcome");

let signin = document.getElementById("signin");

let xhr = new XMLHttpRequest();

let input = document.querySelectorAll("input");

btn.onclick = function () {
    console.log(input[0].value.length > 0 && input[1].value.length > 0);
    if (input[0].value.length > 0 && input[1].value.length > 0) {
        let formData = new FormData(document.forms.signin__form);
        xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
        xhr.send(formData);
        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === xhr.DONE) {
                let response = JSON.parse(xhr.response);
                console.log(response);

                if (response.success == true) {
                    signin.classList.remove("signin_active");
                    welcome.classList.add("welcome_active");
                    // При успешной авторизации, задайте id пользователя в блок #welcome и отобразите его
                    welcome.textContent = welcome.textContent + response.user_id;

                    // После успешного входа, сохраните полученный id-пользователя в локальное хранилище
                    localStorage.setItem("id", response.user_id);
                }

                // Если авторизация не удалась, выведите сообщение «Неверный логин/пароль»
                else {
                    confirm("Неверный логин/пароль")
                }
            }
        })
    };
    return false
}

// При загрузке страницы, в случае, если в локальном хранилище имеется id пользователя, выведите блок #welcome с заданным id пользователя
let id = localStorage.getItem("id");

if (id != null) {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    welcome.textContent = welcome.textContent + id;
}

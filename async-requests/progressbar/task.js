// Процесс реализации
// Загрузите форму через AJAX по адресу https://netology-slow-rest.herokuapp.com/upload.php


//ВОПРОСЫ:
// Почему объект formData остается пустым, но при этом по запросу get(name) показывает файл из импута?
// Как понять, что объект formData передался в send? 
// Как должен отобразиться размер файла в onprogress.total?


const progress = document.getElementById('progress');

let xhr = new XMLHttpRequest();

let input = document.getElementById("file");

let button = document.getElementById("send");
button.onclick = function () {

    // let files = input.files;
    // console.log(files);
    // let file = files[0];
    // console.log(file);
    // let name = input.name;
    // console.log(name);

    let formData = new FormData(document.forms.form);
    // let formData = new FormData();
    // formData.append('test', 123);
    // formData.append(name, file);

    // console.log(formData.get(name));
    // console.log(formData.entries());

    for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
    }

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.upload.onprogress = function (event) {
        // console.log(event.loaded / event.total * 100);
        progress.value = event.loaded / event.total;
    }
    xhr.onprogress = function (event) {
        // console.log(event);
        progress.value = event.loaded / (1024 * 1024 * 100);
    }
    xhr.send(formData);
    // xhr.upload.onprogress

    return false
};



// Отслеживайте событие изменения загрузки и в соответствии с ним корректируйте прогресс

const progress = document.getElementById('progress');

let xhr = new XMLHttpRequest();

let input = document.getElementById("file");

let button = document.getElementById("send");
button.onclick = function () {


    let formData = new FormData(document.forms.form);
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
    }

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
    xhr.upload.onprogress = function (event) {
        progress.value = event.loaded / event.total;
    }
    // xhr.onprogress = function (event) {
    //     progress.value = event.loaded / (1024 * 1024 * 100);
    // }
    xhr.send(formData);

    return false
};

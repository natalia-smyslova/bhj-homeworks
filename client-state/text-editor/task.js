// Процесс реализации
// Сохраняйте значение текстового редактора в локальном хранилище.
// После перезагрузки, восстанавливайте текст из локального хранилица

let textArea = document.getElementById("editor");

textArea.textContent = localStorage.getItem("текст");

textArea.addEventListener("keyup", function () {
    localStorage.setItem("текст", textArea.value);
})



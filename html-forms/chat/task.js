// Процесс реализации

const chat = document.querySelector("div.chat-widget");
const chatRedSide = document.querySelector("div.chat-widget__side");

// Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
chatRedSide.onclick = function () {
    chat.classList.add("chat-widget_active");
};

//Ввод сообщения в окошечко
const form = document.querySelector("input");

const robotMessages = ["Мне некогда", "Не грубите мне", "Погуглите сами", "Как это понимать?"];

form.addEventListener("keyup", function (event) {
    console.log(event.key); //Нажатая буква
    console.log(form.value); //Вся введенная строка

    // По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
    if (event.key == "Enter" && form.value.length > 0) {
        const messages = document.querySelector('.chat-widget__messages');

        //Добавляем сообщения (написала сразу парой: от клиента и от робота)
        messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time"></div>
            <div class="message__text"></div>
          </div>
          <div class="message">
          <div class="message__time"></div>
          <div class="message__text"></div>
        </div>
        `;

        //Одно сообщение
        let message = document.querySelectorAll("div.message");

        // ТЕКУЩЕЕ ВРЕМЯ В ФОРМАТЕ HH:MM
        let time = new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" });

        message.forEach(function (item) {
            //Если сообщение от клиента
            if (item.classList.contains("message_client")) {

                //Отправка сообщения
                if (item.children[0].textContent.length == 0) {
                    console.log("о нет");
                    // Проставляйте реальную дату переписки
                    item.children[0].textContent = time;
                    // Запись строки в отправленное сообщение
                    item.children[1].textContent = form.value;
                }

            }

            //Сообщение от робота в ответ
            if (item.classList.contains("message_client") == false) {
                // Проставляйте реальную дату переписки
                if (item.children[1].textContent.length == 0) {
                    item.children[0].textContent = time;
                    let rand = Math.floor(Math.random() * robotMessages.length);
                    item.children[1].textContent = robotMessages[rand];
                }
            }
        })
    }
});

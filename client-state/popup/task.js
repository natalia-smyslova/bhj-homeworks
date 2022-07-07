// Процесс реализации
// После закрытия окна, установите в cookie-файле информацию о закрытии окна
// Если после перезагрузки в cookie нет информации о закрытии, необходимо окно показать.
// Если страница была перезагружена с показанным окном, в cookie-файл не нужно ничего вносить

// возвращает cookie если есть или undefined
function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
  
  let modal = document.getElementById("subscribe-modal");
  if (getCookie('modal') == 'true') { } else {
    modal.classList.add("modal_active");
  }
  
  let modalClose = document.querySelector("div.modal__close_times");
  
  console.log(document.cookie);
  
  
  modalClose.onclick = function () {
    modal.classList.remove("modal_active");
  
    document.cookie = "modal=true";
    console.log(document.cookie);
  
  };
  



// Методы classList:
// .contains( className ) 
// – проверяет наличие класса у элемента; в качестве ответа возвращает true или false.



// Процесс реализации
// Используя цикл зарегистрируйте для каждой лунки обработчик событий


const hole = document.querySelectorAll("div");
const lost = document.getElementById("lost");
const dead = document.getElementById("dead");

for (let i = 0; i < hole.length; i++) {
  if (hole[i].id !== undefined) {
    hole[i].onclick = function () {
      if (hole[i].className == "hole") {
        lost.textContent++
      };
      if (hole[i].className == "hole hole_has-mole") {
        dead.textContent++
      };
      if (lost.textContent == 5) {
        lost.textContent == 0;
        dead.textContent == 0;
        location.reload();
        alert("Вы проиграли!");
      }
      if (dead.textContent == 10) {
        alert("Победа!");
        location.reload();
        dead.textContent == 0;
        lost.textContent == 0;
      }
    }
  }

}


// Проверьте наличие нужного класса и увеличьте значение нужного счетчика
// По выигрышу или проигрышу обнулите статистику
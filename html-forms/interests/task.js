// Процесс реализации
// Реализуйте функционал, когда при клике на галочку будут проставляться/сниматься галочки вложенных списков
// В этом варианте задаче списки имеют максимум 1 уровень вложенности, поэтому не нужно делать максимально общее и абстрактное решение.


const groups = document.querySelectorAll(".interest > ul.interests");

groups.forEach(function (item) {
  let firstCheck = item.closest("li");
  firstCheck = firstCheck.firstElementChild.querySelector("input");
  let secondChecks = item.querySelectorAll("li > label > input");

  firstCheck.onclick = function () {

    if (firstCheck.checked == true) {
      firstCheck.checked = true;
      secondChecks.forEach(function (item) { console.log(item.checked = true) })
    }

    if (firstCheck.checked == false) {
      firstCheck.checked = false;
      secondChecks.forEach(function (item) { console.log(item.checked = false) });
    }
  }
});

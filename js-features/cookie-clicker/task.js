const counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
image.onclick = function () {
    if (image.width == "200") {
        image.width = 100;
    }
    else image.width = 200;
    counter.textContent++
};
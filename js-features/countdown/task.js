const counter = document.getElementById("timer");
let interval = setInterval(()=>{
    counter.textContent--;
    if (counter.textContent == 0){
alert("Вы победили в конкурсе!");
clearInterval(interval);
    }
},1000)
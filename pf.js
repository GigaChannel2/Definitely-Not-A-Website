let txt = document.getElementById("txt");
document.getElementById("container").style.opacity = 1;
txt.textContent = "I loved you";
setTimeout(() => {
    txt.textContent = "She loved you and you killed her";

}, 143000)
let txt = document.getElementById("txt");
let speed = 14300;
let changed = 0;
document.getElementById("container").style.opacity = 1;
txt.textContent = "I loved you";

text()
setInterval(() => {
    switch (changed) {
        case 1:
            speed = 14300;
            break;
        case 2:
            speed = 1430;
            break;
        case 3:
            speed = 143;
            break;
        case 43:
            speed = 43;
            break;
        case 70:
            speed = 14;
            break;
    }
}, 14);

function text() {
    setTimeout(() => {
        txt.textContent = "She loved you and you killed her";
        setTimeout(() => {
            txt.textContent = "He loved her and you killed her";
            setTimeout(() => {
                txt.textContent = "They loved her and you killed her";
                if (changed < 143){                    
                    changed += 1;
                    text();
                } else {
                    txt.textContent = "You loved her and you killed her.";
                    txt.style.color = "#800000";
                }
            }, speed)
        }, speed)
    }, speed)
}
// setTimeout(() => {
//     txt.textContent = "She loved you and you killed her";
//     text()
// }, 143000)
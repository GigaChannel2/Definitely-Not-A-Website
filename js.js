let password = document.getElementById("tbox");
let txt = document.getElementById("txt");
let pass = "";
let sound = document.getElementById("aud");
let on = document.getElementById("on");
let body = document.getElementById("body");
let dia = document.getElementById("dia");

on.play();
setTimeout(function() {
    body.style.opacity = 1;
}, 1);
/*password.addEventListener("input", function(event) {
    this.value = this.value.toUpperCase();
});*/
/*password.addEventListener("input", ()=>{
    password.value = password.value.toUpperCase();
});*/

password.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submit();
    }
});

function close_d() {
    dia.close();
}
function submit() {
    pass = password.value.toLowerCase();
    let donate = document.getElementById("donation");
    let sfx_donate = document.getElementById("sfx_donate");
    if (pass == "donate"){
        //donate.style.display = "block";
        dia.showModal();
        sfx_donate.play();
    } else {
        //donate.style.display = "none";
        dia.close();
    }
    switch (pass){
        default:
            wrong();
            break;
        case "0704":
            goTo("jason/jason.html")
            break;
        case "donate":
            break;
        case "the prism":
            goTo("theprism.html");
            break;
        case "green prism":
            goTo("prisms/greenprism.html");
            break;
        case "purple prism":
            goTo("prisms/purpleprism.html");
            break;
        case "pink prism":
            goTo("prisms/pinkprism.html");
            break;
        case "orange prism":
            goTo("prisms/orangeprism.html");
            break;
        case "yellow prism":
            goTo("prisms/yellowprism.html")
            break;
        case "blue prism":
            goTo("prisms/blueprism.html")
            break;
        case "red prism":
            goTo("prisms/redprism.html");
            break;
        case "deva":
            textCh("papua boi");
            break;
        case "experiment 14":
            goTo("exp14.html");
            break;
        case "experiment 8":
            goTo("exp8.html");
            break;
        case "dina":
        case "farid":
            textCh("farid + dina = chinese boi");
            break;
        case "uoldvb":
            textCh("HAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\n");
            break;
        case "mobile legend":
            textCh("apa bagusnya coba, bosenin");
            break;
        case "experiment 17":
            textCh("Dark.\nDarker.\nYet Darker.");
            break;
        case "4 brothers":
            textCh("Great Childhood");
            break;
        case "sans smp":
            textCh("Memories.");
            break;
        case "girzmtov":
            goTo("https://youtu.be/4I6smtKoJE4?si=R3cbKvzSgepL2jjw");
            break;
        case "mystery":
            textCh("Girzmtov");
            break;
        case "hour of joy":
            goTo("https://youtu.be/TbWV7gCPiYc?si=6c5DmdMRQSCOQTeW");
            break;
        case "gravity falls":
            textCh("Great Show.");
            break;
        case "yogi":
            textCh("boti");
            break;
        case "sekolah":
        case "school":
            textCh("Prison - Kids Edition");
            break;
        case "nadya":
        case "nadia":
            goTo("https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://id.wikihow.com/Cepat-Kurus&ved=2ahUKEwiovv7A4O2LAxV3wTgGHYK6MZ8QFnoECC0QAQ&sqi=2&usg=AOvVaw0GJeJ5-8ny9ulUMstXglBb");
            break;
        case "azzam arsyad":
        case "azzam":
        case "arsyad":
            goTo("https://solo.to/gigachannel");
            break;
        case "zidan":
        case "zaidan":
            goTo("https://youtu.be/lNZF_4DWJwo?si=MZPtF5QpDcqM5CLA");
            break;
        case "pdil":
        case "fadhil":
            goTo("https://www.google.com/search?client=ms-android-xiaomi-rvo2&sca_esv=f689f82e8856ae16&sxsrf=AHTn8zodOsV_xeKmZwuN2VvBnA2OyL4nhg:1740943555600&q=s+tee&udm=2&fbs=ABzOT_BSNAwfaLO6lL4gBi3V_V3PQPlU4bhzkBMjtuVnbBJlspph4VFOvLSFhpFsz0u1rgu6EKGcKjAe4KkpgL67phj3JemwytjEZii_aoTYSZ5UyamQN4ROwCdwCcMUq73Bxi2kr_ZGJIao7D-lmeOKtyPfh8v4o-oIXb9rt-PUfxuRSpZwoyJJ9twb9r2ghl4ozkD2uhOSWzmNYBQQqnYSjep8HvQOVWxQrcRAvoy0ovbnLmlVFMs&sa=X&ved=2ahUKEwjKmdKRkOyLAxUHSmwGHZQTMqsQtKgLegQICxAB&biw=501&bih=998&dpr=2.16")
            break;
        case "kasane":
        case "kasane teto":
        case "teto":
            goTo("https://pin.it/w9r49zVFj");
            break;
        case "miku":
        case "hatsune miku":
        case "hatsune":
            goTo("https://youtube.com/shorts/2oa5WCUpwD8?si=b3w06K4bQYKGxtwG");
            break;
        case "magical miku":
            goTo("https://youtu.be/3iUgKH8c7p4?si=0CSLP3D9ve2NzHdK&t=96");
            break;
        case "magical teto":
            goTo("https://youtu.be/4e2XnoNEsdE?si=9h4i9rQDsN2VY22z&t=96");
            break;
    }
}

function wrong() {
    password.style.borderColor = "red";
    txt.style.color = "red";
    txt.style.opacity = 1;
    txt.innerHTML = "Wrong Password";
    sound.play();
    setTimeout(function() {
        txt.style.opacity = 0;
        password.style.borderColor = "aliceblue";
        password.onfocus = function () {
            this.style.borderColor = "limegreen";
        }
        password.onblur = function() {
            this.style.borderColor = "aliceblue";
        }
    }, 500);
}

function textCh(value) {
    txt.style.color = "white";
    txt.style.opacity = 1;
    txt.innerHTML = value;
    setTimeout(function() {
        txt.style.opacity = 0;
    }, 3000);
}

function goTo(value) {
    window.location.href = value;
}
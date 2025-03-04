let password = document.getElementById("tbox");
let txt = document.getElementById("txt");
let pass = "";
let sound = document.getElementById("aud");
let on = document.getElementById("on");
let body = document.getElementById("body");

body.style.opacity = 0;
setTimeout(function() {
    body.style.opacity = 1;
    on.play();
}, 1);
/*password.addEventListener("input", function(event) {
    this.value = this.value.toUpperCase();
});*/
/*password.addEventListener("input", ()=>{
    password.value = password.value.toUpperCase();
});*/
function submit() {
    pass = password.value.toLowerCase();
    switch (pass){
        default:
            wrong();
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
        case "regan" :
            textCh("liat bkp gak dihapus");
            break;
        case "azzam gf":
            textCh("thats a secret.")
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
            goTo("https://youtu.be/poa_QBvtIBA?si=6CcotfoXKYk6D04I");
            break;
        case "zidan":
        case "zaidan":
            goTo("https://youtu.be/lNZF_4DWJwo?si=MZPtF5QpDcqM5CLA");
            break;
        case "pdil":
        case "fadhil":
            goTo("https://www.google.com/search?client=ms-android-xiaomi-rvo2&sca_esv=f689f82e8856ae16&sxsrf=AHTn8zodOsV_xeKmZwuN2VvBnA2OyL4nhg:1740943555600&q=s+tee&udm=2&fbs=ABzOT_BSNAwfaLO6lL4gBi3V_V3PQPlU4bhzkBMjtuVnbBJlspph4VFOvLSFhpFsz0u1rgu6EKGcKjAe4KkpgL67phj3JemwytjEZii_aoTYSZ5UyamQN4ROwCdwCcMUq73Bxi2kr_ZGJIao7D-lmeOKtyPfh8v4o-oIXb9rt-PUfxuRSpZwoyJJ9twb9r2ghl4ozkD2uhOSWzmNYBQQqnYSjep8HvQOVWxQrcRAvoy0ovbnLmlVFMs&sa=X&ved=2ahUKEwjKmdKRkOyLAxUHSmwGHZQTMqsQtKgLegQICxAB&biw=501&bih=998&dpr=2.16")
    }
}

function wrong() {
    password.style.borderColor = "red";
    txt.style.color = "red";
    txt.style.opacity = 1;
    txt.innerHTML = "Wrong Password"
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
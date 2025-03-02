let password = document.getElementById("tbox");
let txt = document.getElementById("txt");
function submit() {
    switch (password.value){
        default:
            wrong();
            break;
        case "Yogi":
            textCh("boti");
            break;
        case "School":
            textCh("Prison - Kids Edition");
            break;
        case "Nadia":
            goTo("https://thisisnotawebsitedotcom.com");
            break;
        case "Azzam Arsyad":
        case "Azzam":
        case "Arsyad":
            goTo("https://youtu.be/dQw4w9WgXcQ?si=zIyTvueDL6XiejEB");
            break;
        case "Zaidan":
            goTo("https://youtu.be/lNZF_4DWJwo?si=MZPtF5QpDcqM5CLA");
            break;
        case "Fadhil":
            goTo("https://www.google.com/search?client=ms-android-xiaomi-rvo2&sca_esv=f689f82e8856ae16&sxsrf=AHTn8zodOsV_xeKmZwuN2VvBnA2OyL4nhg:1740943555600&q=s+tee&udm=2&fbs=ABzOT_BSNAwfaLO6lL4gBi3V_V3PQPlU4bhzkBMjtuVnbBJlspph4VFOvLSFhpFsz0u1rgu6EKGcKjAe4KkpgL67phj3JemwytjEZii_aoTYSZ5UyamQN4ROwCdwCcMUq73Bxi2kr_ZGJIao7D-lmeOKtyPfh8v4o-oIXb9rt-PUfxuRSpZwoyJJ9twb9r2ghl4ozkD2uhOSWzmNYBQQqnYSjep8HvQOVWxQrcRAvoy0ovbnLmlVFMs&sa=X&ved=2ahUKEwjKmdKRkOyLAxUHSmwGHZQTMqsQtKgLegQICxAB&biw=501&bih=998&dpr=2.16")
    }
}

function wrong() {
    password.style.borderColor = "red";
    txt.style.color = "red";
    txt.style.opacity = 1;
    txt.innerHTML = "Wrong Password"
    setTimeout(function() {
        txt.style.opacity = 0;
        password.style.borderColor = "aliceblue";
        password.onfocus = function () {
            this.style.borderColor = "limegreen";
        }
        password.onblur = function() {
            this.style.borderColor = "aliceblue";
        }
    }, 1000);
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
let password = document.getElementById("tbox");
let txt = document.getElementById("txt");
let pass = "";
let sound = document.getElementById("aud");
let on = document.getElementById("on");
let body = document.getElementById("body");
let dia = document.getElementById("dia");
let diawarn = document.getElementById("diawarn");
let sfx = document.getElementById("sfx");
let isTimer = false;

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
        case "everything is going to be okay":
            goTo("everythingisgoingtobeokay.html");
            break;
        case "long poem":
            goTo("longpoem.html");
            break;
        case "therapy session":
        case "therapy":
        case "therapy?":
            goTo("therapy.html");
            break;
        case "6524":
            goTo("event/6524/web/c2l4IGZpdmUgdHdvIGZvdXI=.xml");
            break;
        case "kuyashi":
            playSfx("sfx/kuyashi.mp3");
            break;
        case "yatta":
            playSfx("sfx/yatta.mp3");
            break;
        case "field of hopes and dreams":
            goTo("fohad.html");
            break;
        case "cgfzc3dvcmq=":
            goTo("event/cGFzc3dvcmQ=.html");
            break;
        case "3415":
            goTo("event/3145.html");
            break;
        case "event":
            goTo("event/QkxBU1BIRU1Z.json");
            break;
        case "trinity of shadows":
            goTo("trinity.html");
            break;
        case "dark place":
            goTo("darkplace.html");
            break;
        case "playing forever":
            goTo("playingforever.html");
            break;
        case "red space":
            goTo("redspace.html");
            break;
        case "pupue":
            goTo("pupue.html");
            break;
        case "butt certificate":
            textCh("So majestic... So beautiful...");
            break;
        case "starwalker":
            textCh("Very                          Original");
            break;
        case "original":
            textCh("            Starwalker");
            break;
        case "mahiro fan art":
        case "mahiro baddie pic":
        case "mahiro picture":
            goTo("https://id.pinterest.com/search/pins/?q=mahiro%20oyama%20fan%20art&rs=ac&len=11&source_id=ac_kIQPgMLu&eq=mahiro%20oyama&etslf=5242");
            break;
        case "mahiro":
        case "mahiro oyama":
            textCh("Best Femboy imo");
            break;
        case "mihari":
        case "mihari oyama":
            textCh("Best Scientist (made the best femboy)");
            break;
        case "mari?":
            showwarn();
            break;
        case "findher":
            goTo("d.html");
            break;
        case "white door":
            goTo("whitedoor.html");
            break;
        case "white space":
            goTo("whitespace.html");
            break;
        case "black space":
            goTo("blackspace.html");
            break;
        case "bocchi the rock":
        case "bocchi":
            goTo("https://id.pinterest.com/search/pins/?q=bocchi%20happy&rs=rs&source_id=rs_xYXVHrhD&top_pin_ids=327214729197769176&eq=&etslf=12075");
            break;
        case "34":
            goTo("https://gelbooru.com");
            break;
        case "bad poem":
            textCh("followed the Lost would forest children where\ntail. pointed grow, the the. The poor children!");
            break;
        case "poem":
            textCh("Lost where the forest would grow,\nthe children followed the pointed tail. The poor children!");
            break;
        case "pedo":
        case "pedophile":
        case "child naked picture":
            goTo("https://www.google.com/search?sca_esv=f4adb27807e92ea2&sxsrf=ANbL-n5vZ71ZGcHsr51u2kGEvg-1y1kw3w:1775213803220&q=nearest+therapy+sessiom&source=lnms&fbs=ADc_l-b9VKtw-PEOgpNtBvxtbTosleNvVAXweKdFkN1Lw1_WR-Tnhg_B3LC7uKNO3Vlrl6vjIhPVL-T2z0qicik9jtMCbRBKlo_-g0G209-i_ulTgCJ7142Yv48xOvOUlv_Ee7SGBksbWDfWj6Py3gjeY1lCcBOBLp_MbOmDEoCtHeaohSLTrcRexCjor9rk2yJ2KPIyp5L0cIUh1vtzcfDy7vsYJ8f3zO80g0DEms3JdhDP_KowyWI&sa=X&ved=2ahUKEwjevZDhwtGTAxVQSmwGHT6EIoUQ0pQJegQIDBAB&biw=1432&bih=776&dpr=1");
            break;
        case "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa":
            textCh("AAAAAAAAAAAAAAAAA");
            break;
        case "hang tuah 3":
            textCh("fuck you");
            break;
        case "ado":
            goTo("https://www.google.com/search?sca_esv=f4adb27807e92ea2&sxsrf=ANbL-n4Pl7sqSEU62x78uxO_ZWkzdPy3ow:1775212960963&udm=2&fbs=ADc_l-ZfIPzv45NHkpmEx1uvAy1Y0jSl1hx3Xkmo2lpunDqItvmOdSOit7muIXZsXvpLBdHparcpJwBJPZvwUJitlUSAAObBERCLj5B1G_Ze_uTNZ95aI3CpUVrxpXF6D6vd12ppXIvKgVZFZyetuYmVWNYibTZHtKzdOF-wAWnuk0UgfuzcwdebN7r15sUTyRvJO_KY59v2uwAW5m9pUmPfDpo6NaYdig&q=shrimp+town&sa=X&ved=2ahUKEwjD8MDPv9GTAxU8xDgGHbJSNQEQtKgLegQIERAB&biw=1432&bih=776&dpr=1");
            break;
        case "yellow gates":
            goTo("https://youtu.be/1-F1oCFPiIM?si=BVENZoNRDc1bwWFr");
            break;
        case "yellow gate":
            goTo("https://drive.google.com/drive/folders/1Zv7eBKziKf5Rb_IhlFNFxMizdhn3lYwk");
            break;
        case "mayonnaise":
        case "mayo":
            goTo("https://www.youtube.com/@averylargemayo");
            break;
        case "omori":
            textCh("Don't forget to forgive yourself.");
            break;
        case "gone":
            goTo("gone.html");
            break;
        case "duet":
            goTo("duet.html");
            break;
        case "undertale":
            textCh("How was the fall?");
            break;
        case "lancer":
            goTo("https://deltarune.com/lancer");
            break;
        case "deltarune":
            goTo("https://www.youtube.com/watch?v=VrPpnRRpux8");
            break;
        case "richie":
            goTo("https://raw.githubusercontent.com/GigaChannel2/Definitely-Not-A-Website/refs/heads/main/Richie.jpg");
            break;
        case "lionel":
            textCh("monyet");
            break;
        case "0704":
            goTo("jason/jason.html");
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
            goTo("prisms/yellowprism.html");
            break;
        case "blue prism":
            goTo("prisms/blueprism.html");
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
            goTo("https://www.google.com/search?sca_esv=e18616a4d636eb23&sxsrf=ANbL-n4GHcWe9dDiH1UPRgsJvT0u3af-Qw:1775212259552&udm=2&fbs=ADc_l-aNj6uplnfLbRFO_hsDAWa36jV53wIX7ZveR57-j40Yw0fvSHkrwH3Q13rTGipQZviqORSiEM6KkbfW7BEmLRh_XGKQd3yqLbBx5CDmeqjPOJsVNWIORl2J-xRxnzhARJNvEB_IeNxZEkCgNagbHVMAm0H3Hysat59yvfHbAw1zK8-K93b6mwXghECLa31W4gkp8OeRGkzrUqH3ETVKct31_0YpnA&q=bocchi+maid+outfit&sa=X&ved=2ahUKEwj-_YWBvdGTAxVcUGwGHSdBKwUQtKgLegQIFBAB");
            break;
        case "pdil":
        case "fadil":
        case "fadhil":
            goTo("https://www.google.com/search?sca_esv=e18616a4d636eb23&udm=2&biw=1432&bih=776&sxsrf=ANbL-n57ZcOcCDeMy21dBJu0ZpMAZR5xaQ:1775212364296&q=seiun+sky&spell=1&sa=X&ved=2ahUKEwjdtf-yvdGTAxULSGwGHRNzJ6EQBSgAegQIChAB")
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

function playSfx(src) {
    sfx.src = src;
    sfx.play();
}

function showwarn() {
    diawarn.classList.add("show");
}

function warn_con() {
    goTo("mari.html")
}

function close_warn() {
    diawarn.classList.remove("show");
}

function wrong() {
    if (!isTimer) {
        isTimer = true;
        password.classList.add("wrong");
        txt.style.color = "red";
        txt.style.opacity = 1;
        txt.innerHTML = "Wrong Password";
        txt.style.fontFamily = "Source Code Pro";
        txt.style.visibility = "visible";
        sound.play();
        setTimeout(function() {
            txt.style.opacity = 0;
            password.classList.remove("wrong");
            setTimeout(function() {
                txt.style.visibility = "hidden";
                isTimer = false;
            }, 500);
            password.onfocus = function () {
                password.classList.remove("wrong");
            }
            password.onblur = function() {
                password.classList.remove("wrong");
            }
        }, 500);
    }
}

function textCh(value) {
    if(!isTimer) {
        isTimer = true;
        txt.style.color = "white";
        txt.style.opacity = 1;
        txt.innerHTML = value;
        txt.style.visibility = "visible";
        if (pass == "butt certificate") {
            txt.style.fontFamily = "omori";
        } else {
            txt.style.fontFamily = "Source Code Pro";
        }
        let timer = setTimeout(function() {
            txt.style.opacity = 0;
            setTimeout(function() {
                txt.style.visibility = "hidden";
                isTimer = false;
            }, 500);
        }, 3000);
    }
}

function goTo(value) {
    window.location.href = value;
}
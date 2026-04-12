setInterval(() => {
    let time = new Date;
    let hour = time.getHours();
    let min = time.getMinutes();

    document.getElementById("grandclock").textContent = time;
    if (hour == 1 && min == 43) {
        document.getElementById("timesup").textContent = "Password: igvOgCNqxgtRnu";
        document.getElementById("txt2").textContent = "Quickly Submit Your Password Before It's Too Late!";
    } else {
        document.getElementById("timesup").textContent = " ";
        document.getElementById("txt2").textContent = " ";
    }
}, 500);  
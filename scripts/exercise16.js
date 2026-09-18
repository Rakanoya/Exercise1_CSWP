function updateTime() {
    let currentDate = new Date();
    
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + formattedMinutes + ":" + formattedSeconds;

    let th = document.getElementById("timeheader");
    if (th) {
        th.textContent = timeString;
    }

    setTimeout(updateTime, 1000);
}
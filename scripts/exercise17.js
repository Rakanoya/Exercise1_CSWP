function startClock() {
  setInterval(() => {
    const now = new Date();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const time = now.getHours() + ":" + minutes + ":" + seconds;

    const timeHeader = document.getElementById("timeheader");
    if (timeHeader) {
      timeHeader.textContent = time;
    }
  }, 1000);
}

(() => {
  startClock();
})();

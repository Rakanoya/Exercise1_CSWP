function startClock() {
	setInterval(() => {
		const now = new Date();
		const hours = now.getHours();
		const minutes = String(now.getMinutes()).padStart(2, "0");
		const seconds = String(now.getSeconds()).padStart(2, "0");
		document.getElementById("timeheader").textContent = `${hours}:${minutes}:${seconds}`;
	}, 1000);
}

function runClock() {
	(() => {
		startClock();
	})();
}

runClock();
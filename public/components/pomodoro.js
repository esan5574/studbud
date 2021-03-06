//referred to Dawidow's pomodoro timer code https://github.com/dawidow/pomodoro-timer-js .

const timer = document.querySelector(".pt-time");
const start = document.querySelector(".pt-start");
const stop = document.querySelector(".pt-stop");
const reset = document.querySelector(".pt-reset");
const work = document.querySelector(".options-work");
const breakBtn = document.querySelector(".options-break");
const breakBtn2 = document.querySelector(".options-break2");

let seconds = 0,
	active = false,
	intervalID;

const startTimer = mins => {
	clearInterval(intervalID);

	if (!active) {
		timer.textContent = "25:00";
		seconds = mins * 60 || 0;
	}
	active = true;
	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const breakTimer = mins => {
	resetTime();
	clearInterval(intervalID);
	if (!active) {
		timer.textContent = "5:00";
		seconds = mins * 60 || 0;
	}
	active = true;
	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const breakTimer2 = mins => {
	resetTime();
	clearInterval(intervalID);
	if (!active) {
		timer.textContent = "15:00";
		seconds = mins * 60 || 0;
	}
	active = true;
	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const resetTime = () => {
	clearInterval(intervalID);
	timer.textContent = "25:00";
	active = false;
};

const stopTime = () => {
	clearInterval(intervalID);
};

const time = () => {
	seconds--;
	minutes = Math.floor(seconds / 60);
	sec = seconds % 60;
	if (sec < 10) {
		sec = `0${sec}`;
	}

	timer.textContent = `${minutes}:${sec}`;
	if (seconds === 0) {
		clearInterval(intervalID);
	}
};

start.addEventListener(
	"click",
	function() {
		startTimer(25);
	},
	false
);
stop.addEventListener("click", stopTime, false);
reset.addEventListener("click", resetTime, false);
work.addEventListener(
	"click",
	function() {
		resetTime();
	},
	false
);
work.addEventListener(
	"click",
	function() {
		startTimer(25);
	},
	false
);

breakBtn.addEventListener("click",function() {
		breakTimer(5);
	},
	false
);

breakBtn2.addEventListener("click",function() {
		breakTimer2(15);
	},
	false
);

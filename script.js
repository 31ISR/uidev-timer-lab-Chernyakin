const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const hoursCircle = document.getElementById("hours-circle");
const minutesCircle = document.getElementById("minutes-circle");
const secondsCircle = document.getElementById("seconds-circle");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");

const lapsContainer = document.getElementById("lapsContainer");
const lapList = document.getElementById("lapList");


const circumference = 2 * Math.PI * 52;

let elapsedTime = 0;   // сколько секунд прошло
let timer = null;      // ID интервала (null — таймер не запущен)
let isRunning = false; // идёт ли отсчёт
let lapCount = 0;      // сколько кругов записано

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    HoursEl.textContent = hours.toString().padStart(2, '0');
    MinutesEl.textContents = minutes.toString().padStart(2, '0');
    SecondsEl.textContent = seconds.toString().padStart(2, '0');

    const circumference = 2 * Math.PI * 52;

function updateCircleProgress(circle, value, max) {
    const progress = (value / max) * circumference;
    circle.style.strokeDasharray = `${progress} ${circumference}`;
}

updateCircleProgress(hoursCircle, hours, 24);
updateCircleProgress(minutesCircle, minutes, 60);
updateCircleProgress(secondsCircle, seconds, 60);
}

function start() {
    if (isRunning) return; // защита от двойного запуска

    isRunning = true;

let timer = setInterval(() => {
    elapsedtime++;
    updateDisplay();
    lapBtn.disabled = false;
    stopBtn.disabled = false;
    startBtn.disabled = true;
}
function stop() {
    clearInterval(timer);
    isRunning = false;
    timer = null;
    lapBtn.disabled = true;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
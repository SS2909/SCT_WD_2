
let [minutes, seconds, milliseconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let lapList = document.getElementById("laps");

function updateDisplay() {
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  display.innerText = `${m}:${s}:${ms}`;
}

function startTimer() {
  if (timer !== null) return;
  timer = setInterval(() => {
    milliseconds++;
    if (milliseconds == 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  [minutes, seconds, milliseconds] = [0, 0, 0];
  updateDisplay();
  lapList.innerHTML = "";
}

function lapTime() {
  if (timer === null) return;
  const li = document.createElement("li");
  li.innerText = display.innerText;
  lapList.appendChild(li);
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("lapBtn").addEventListener("click", lapTime);

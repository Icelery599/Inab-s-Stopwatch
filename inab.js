let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? '0' + hours : hours;
let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
}

updateDisplay(); // initialize display

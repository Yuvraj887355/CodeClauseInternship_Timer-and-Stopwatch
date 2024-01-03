var timer = 0;

var timerInterval;

var ms = document.getElementById('milliseconds');

var second = document.getElementById('mainsecond');

var minute = document.getElementById('mainminute');

function start(){
  stop();
  timerInterval = setInterval( function(){
     timer += 1/60;
    msVal = Math.floor((timer - Math.floor(timer) )*100); // Gives the milliseconds value
     secondVal = Math.floor(timer) - Math.floor(timer/60) *60; // Gives the Second values
    minuteVal = Math.floor(timer/60); // Gives the Minute value
    ms.textContent = msVal <10 ? "0" + msVal.toString() : msVal;
     second.textContent = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
     minute.textContent = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/60);
 
}

function stop(){
  clearInterval(timerInterval);
}

function reset(){
    stop();
    timer = 0;
    ms.textContent = '00';
    second.textContent = '00';
    minute.textContent = '00';
  }




let timer1;
let seconds1 = 0;
let minutes1 = 0;
let hours1 = 0; 

function startTimer() {
    timer1 = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer1);
}

function resetTimer() {
    clearInterval(timer1);
    seconds1 = 0;
    minutes1 = 0;
    hours1 = 0;
    updateDisplay();
}

function updateTimer() {
    seconds1++;
    if (seconds1 === 60) {
        seconds1 = 0;
        minutes1++;
        if (minutes1 === 60) {
            minutes1 = 0;
            hours1++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = pad(hours1) + ':' + pad(minutes1) + ':' + pad(seconds1);
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

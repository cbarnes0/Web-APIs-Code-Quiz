var timerElement = document.querySelector(".timer-count");
var startButtonEl = document.querySelector(".startButton");

var timer;
var timerCount;

// This is JUST TO TEST timer CURRENTLY !!!
startButtonEl.addEventListener("click", function() {
    timerElement.textContent = 5;
    timerCount = 5;
    startTimer();
})

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000);
  }
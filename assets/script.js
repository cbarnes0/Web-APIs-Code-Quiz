var timerElement = document.querySelector(".timer-count");
var startButtonEl = document.querySelector(".startButton");
var answerButtomsEl = document.getElementsByClassName("answerButtons");

var timer;
var timerCount;


// This is JUST TO TEST timer CURRENTLY !!!
startButtonEl.addEventListener("click", function() {
    timerElement.textContent = 5;
    timerCount = 5;
    startTimer();
    buttonsAppear();
    
});
// This is the function that starts the timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000);
  };
  
// This is the function that makes the 'answer' buttons appear
function buttonsAppear() {
    let answers = [
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('answer3'),
        document.getElementById('answer4')];

    for (let i=0; i < answers.length; i++) {
        
        answers[i].setAttribute('style', 'display: block;' );
    };
}

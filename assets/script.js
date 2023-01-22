var timerElement = document.querySelector(".timer-count");
var startButtonEl = document.querySelector(".startButton");
var titleQuestionEl = document.querySelector(".titleQuestion");
var subtitleEl = document.querySelector(".subtitle")
var answerButtomsEl = document.getElementsByClassName("answerButtons");
var inputEl = document.querySelector(".input");
var correctEl = document.querySelector(".correct");

let answers = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3'),
    document.getElementById('answer4')];

var timer;
var timerCount;


// This is JUST TO TEST timer CURRENTLY !!!
startButtonEl.addEventListener("click", function() {
    timerElement.textContent = 75;
    timerCount = 75;
    startTimer();
    buttonsAppear();
    hideSubtitle();
    hideStartButton();
    
});

function init() {
    hideInput();
    hideCorrect();
};

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

    for (let i=0; i < answers.length; i++) {
        
        answers[i].setAttribute('style', 'display: block;' );
    };
};

// This function hides the initial subtitle
function hideSubtitle() {
    subtitleEl.textContent = '';
};

// This function hides the first start button
function hideStartButton() {
    startButtonEl.setAttribute("style", "visibility: hidden");
};

// This function hides the highscore input
function hideInput() {
    inputEl.setAttribute("style", "visibility: hidden");
};

// Make the input section visible
function showInput() {
    inputEl.setAttribute("style", "visibility: visible");
};

// Hides the text where correct!/incorrect! will be held
function hideCorrect() {
    correctEl.textContent = '';
};

// Displays the correct! text and has it disappear after 1 second
function correct() {
    correctEl.textContent = 'Correct!'
    const intervalID = setInterval(hideCorrect, 1000);
    clearInterval(1000, intervalID);
};

// Displays the incorrect! text and has it disappear after 1 second
function incorrect() {
    correctEl.textContent = 'Incorrect!'
    const intervalID = setInterval(hideCorrect, 1000);
    clearInterval(1000, intervalID);
};

function firstQueston() {
    titleQuestionEl.textContent = 'What is the correct way to declare a variable in JavaScript?';
    answers[0].textContent = 'a. var x = 5';
    answers[1].textContent = 
    answers[2].textContent = 
    answers[3].textContent = 
}

init();
const questions = [
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses",
        d: "Square Brackets",
        correctAnswer: "a",
        
    },
];


var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");

var answerOne = document.getElementById("answerButton1");
var answerTwo = document.getElementById("answerButton2");
var answerThree = document.getElementById("answerButton3");
var answerFour = document.getElementById("answerButton4");


startButton.addEventListener("click", startGame);



function startGame () {
    startButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");
};

function setNextQuestion () {
    
};

function showQuestion(questions) {
    questionEl.innerText = questions.question;

    
    
};


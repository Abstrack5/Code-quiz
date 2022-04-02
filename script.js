const questions = [
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses",
        d: "Square Brackets",
        correctAnswer: "Parentheses",
        
    },
    {
        question: "Question 2",
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses",
        d: "Square Brackets",
        correctAnswer: "Parentheses",
        
    },
];


var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");

var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");

var answerEl = document.getElementsByClassName("ans-btn");
var answerOne = document.getElementById("answerButton1");
var answerTwo = document.getElementById("answerButton2");
var answerThree = document.getElementById("answerButton3");
var answerFour = document.getElementById("answerButton4");

var questionCount = 0;
var score = 0;
var timeLeft = 200;


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", showQuestion);
// console.log(answerEl);
for (var i = 0; i < answerEl.length; i++ ) {
    answerEl[i].addEventListener("click", checkAnswer);
}

function startGame() {
    startButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    nextButton.classList.remove("hide");

    showQuestion();
};


function showQuestion() {
    questionEl.textContent = questions[questionCount].question;
    answerOne.textContent = questions[questionCount].a;
    answerTwo.textContent = questions[questionCount].b;
    answerThree.textContent = questions[questionCount].c;
    answerFour.textContent = questions[questionCount].d;


};


function checkAnswer(event) {
    if (event.target.textContent === questions[questionCount].correctAnswer) {
         score += 5;
        console.log("correctAnswer");
     }else {
         timeLeft -= 5;
         console.log("Incorrect")
     };
    if (questionCount < questions.length) {
        questionCount++;
        console.log("anotherQUestion");
    }
};








// add correct or incorrect message when answering questions

// Timer
// highscore
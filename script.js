const questions = [
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: [
            {text: "Quotes", correct: true},
            {text: "Curly Brackets", correct: false},
            {text: "Parentheses", correct: false},
            {text: "Square Brackets", correct: false}
        ]
    }
];


var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");

var shuffledQuestions, currentQuestionIndex;
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");



startButton.addEventListener("click", startGame);



function startGame () {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion(); 
};

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
        answerButtonEl.appendChild(button);
    });
};

function selectAnswer (e) {
};

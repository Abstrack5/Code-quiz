const questions = [
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        a: "quotes",
        b: "curlyBrackets",
        c: "parentheses",
        d: "squareBrackets",
        correctAnswer: "parentheses",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<javaScript>",
        c: "<scripting>",
        d: "<script>",
        correctAnswer: "<script>",
    },
    {
        question: "The first index of an array is ____.",
        a: "iLoveJavascript",
        b: "1",
        c: "0",
        d: "pineApple",
        correctAnswer: "0",
    },
    {
        question: "How do you add a comment in a JavaScript?",
        a: "<!-- commentThis -->",
        b: "/* commentThis */",
        c: "//commentThis",
        d: "'commentThis",
        correctAnswer: "//commentThis",
    },
];


var welcomeHeader = document.getElementById("welcomeHeader");
var welcomeText = document.getElementById("welcomeText");

var viewHighScore = document.getElementById("viewHighScore");
var playerScore = document.getElementById("userScore");
// var userScorePoints = document.getElementById("userScorePoints")

var timeLeft = document.getElementById("timeLeft");
var timer = document.getElementById("timer");

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");

var container = document.getElementById("container");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");

var answerEl = document.getElementsByClassName("ans-btn");
var answerOne = document.getElementById("answerButton1");
var answerTwo = document.getElementById("answerButton2");
var answerThree = document.getElementById("answerButton3");
var answerFour = document.getElementById("answerButton4");

var shuffledQuestions = questions.sort(() => Math.random() - .5);
var questionCountIndex = 0;

var userScorePoints = 0;


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", showQuestion);
// console.log(answerEl);
for (var i = 0; i < answerEl.length; i++ ) {
    answerEl[i].addEventListener("click", checkAnswer);
}

function startTimer() {
    var totalTime = 120;

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            
        }
    },1000);
}

function startGame() {
    startButton.classList.add("hide");
    welcomeHeader.classList.add("hide");
    welcomeText.classList.add("hide");
    container.classList.add("container");
    timer.classList.remove("hide");
    playerScore.classList.remove("hide");
    questionContainerEl.classList.remove("hide");
    // nextButton.classList.remove("hide");
    startTimer();

    showQuestion();
};


function showQuestion() {
    questionEl.textContent = shuffledQuestions[questionCountIndex].question;
    answerOne.textContent = shuffledQuestions[questionCountIndex].a;
    answerTwo.textContent = shuffledQuestions[questionCountIndex].b;
    answerThree.textContent = shuffledQuestions[questionCountIndex].c;
    answerFour.textContent = shuffledQuestions[questionCountIndex].d;

    nextButton.classList.add("hide");
};


function checkAnswer(event) {
    if (event.target.textContent === shuffledQuestions[questionCountIndex].correctAnswer) {
        userScorePoints += 5;
        playerScore.textContent = ("Score: " + userScorePoints);
        nextButton.classList.remove("hide");
        console.log("correct!");
        // add another question
         if (questionCountIndex <= shuffledQuestions.length) {
            questionCountIndex++;
            console.log("nextQuestion!");
        }
            // ends quiz after last question
            if (questionCountIndex > shuffledQuestions.length - 1) {
            console.log("GameOver");
            // gameOver()
            };  

     }else {
         timeLeft -= 5;
        //  nextButton.classList.remove("hide");
        console.log("Incorrect!");
        };
    
};








// add correct or incorrect message? 
// choice box change to red for incorrect, green for correct?

// add gameover function to shower restart or view highscores
// Timer, setinterval, stop timer after last question, add timer clock
// highscore/localstorage


// if (correct) {
//     Element.classlist.add('correct')
// } else {
//     Element.classlist.add('wrong')

// }

// Element.classlist.remove('wrong')
// Element.classlist.remove('wrong')

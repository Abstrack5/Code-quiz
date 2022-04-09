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
var finalScore = document.getElementById("finalScore");

var initialInput = document.getElementById("initialInput");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var summary = document.getElementById("summary");
var highScoreSection = document.getElementById("highScoreSection");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

var timeLeft = document.getElementById("timeLeft");
var timer = document.getElementById("timer");
var timesUp = document.getElementById("timesUp");

var startButton = document.getElementById("start-btn");
var restartButton = document.getElementById("restart-btn");

var container = document.getElementById("container");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");

var answerEl = document.getElementsByClassName("ans-btn");
var answerOne = document.getElementById("answerButton1");
var answerTwo = document.getElementById("answerButton2");
var answerThree = document.getElementById("answerButton3");
var answerFour = document.getElementById("answerButton4");
var answerCheck = document.getElementById("answerCheck");

var shuffledQuestions = questions.sort(() => Math.random() - .5);
var questionCountIndex = 0;

var userScorePoints = 0;
var totalTime = 81;
var scoreResult;

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});
viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});
goBackBtn.addEventListener("click", function() {
    startButton.classList.remove("hide");
    welcomeHeader.classList.remove("hide");
    welcomeText.classList.remove("hide");
    container.classList.remove("hide");
    container.classList.remove("container");
    questionContainerEl.classList.add("hide");
    highScoreSection.classList.add("hide");
});
clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    clearHighScoreBtn.classList.add("hide");
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});


for (var i = 0; i < answerEl.length; i++ ) {
    answerEl[i].addEventListener("click", checkAnswer);
}




// function startTimer() {
//     var startTimer = setInterval(function() {
//         totalTime--;
//         timeLeft.textContent = totalTime;
//         if(totalTime <= 0) {
//             clearInterval(startTimer);
//             gameOver();
//             if (questionCountIndex < questions.length - 1) {
//                 timesUp.classList.add("hide");
//                 gameOver();
//             }
//         };

//     },1000);
// }

function startGame() {
    startButton.classList.add("hide");
    welcomeHeader.classList.add("hide");
    welcomeText.classList.add("hide");
    container.classList.add("container");
    timer.classList.remove("hide");
    playerScore.classList.remove("hide");
    questionContainerEl.classList.remove("hide");

    initialInput.textContent = "";
    questionCountIndex = 0;
    totalTime = 80;
    timeLeft.textContent = totalTime;


    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            gameOver();
            if (questionCountIndex < questions.length - 1) {
                timesUp.classList.add("hide");
                gameOver();
            }
        };

    },1000);
    

    showQuestion();
};


function showQuestion() {
    questionEl.textContent = shuffledQuestions[questionCountIndex].question;
    answerOne.textContent = shuffledQuestions[questionCountIndex].a;
    answerTwo.textContent = shuffledQuestions[questionCountIndex].b;
    answerThree.textContent = shuffledQuestions[questionCountIndex].c;
    answerFour.textContent = shuffledQuestions[questionCountIndex].d;
};


function checkAnswer(event) {
    if (event.target.textContent === shuffledQuestions[questionCountIndex].correctAnswer) {
        userScorePoints += 5;
        playerScore.textContent = ("Score: " + userScorePoints);
        answerCheck.classList.remove("hide");
        answerCheck.textContent = "Correct!";
     }
     else {
        totalTime -= 10;
        answerCheck.classList.remove("hide");
        answerCheck.textContent = "Wrong! The correct answer was: " + " " + questions[questionCountIndex].correctAnswer;
        answerCheck.classList.add("text-danger");
        };

        questionCountIndex++;

    // add another question
    if (questionCountIndex < shuffledQuestions.length) {
        // questionCountIndex++;
        showQuestion();
    } else {
        gameOver();
    }

}


function gameOver() {
    container.classList.add("hide");
    answerCheck.classList.add("hide");
    playerScore.classList.add("hide");
    timer.classList.add("hide");
    welcomeHeader.classList.add("hide");
    welcomeText.classList.add("hide");
    summary.classList.remove("hide");

    finalScore.textContent = userScorePoints
}


// enter initial and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    
    // stop function is initial is blank
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 
    
    container.classList.add("hide");
    answerCheck.classList.add("hide");
    playerScore.classList.add("hide");
    timer.classList.add("hide");
    summary.classList.remove("hide");
    highScoreSection.classList.remove("hide");



    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    // stringify array in order to store in local
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

    container.classList.add("hide");
    answerCheck.classList.add("hide");
    playerScore.classList.add("hide");
    timer.classList.add("hide");
    summary.classList.add("hide");
    welcomeHeader.classList.add("hide");
    welcomeText.classList.add("hide");
    highScoreSection.classList.remove("hide");

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}
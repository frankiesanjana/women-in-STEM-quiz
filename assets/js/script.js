// define variables to select elements

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const introText = document.getElementById("intro-text");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

// define variables to drive quiz

let currentQuestionIndex;
let shuffledQuestions;
let currentCorrect = 0;
let currentIncorrect = 0;

// event listeners

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', displayNextQuestion);

// functions


/**
 * Hides the start button and intro text, displays the quiz
 */
function startQuiz() {
    startButton.classList.add('hide');
    introText.classList.add('hide');
    quizContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    displayNextQuestion();
}

function displayNextQuestion() {
    
}

function checkAnswer() {
    
}

function incrementCorrect() {
    
}

function incrementIncorrect() {
    
}

function endQuiz() {

}
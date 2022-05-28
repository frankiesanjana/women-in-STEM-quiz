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
    clearQuizArea();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function clearQuizArea() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        answerButtons.appendChild(button);
        button.addEventListener('click', checkAnswer);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }      
    })
}

function checkAnswer(event) {
    console.log("checked answer");
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct;
    setFeedback(selectedAnswer, correct);
    Array.from(answerButtons.children).forEach(button => {
        setFeedback(button, button.dataset.correct);
    })
    nextButton.classList.remove('hide');
}

function setFeedback(element, correct) {
    console.log("set feedback");
    clearFeedback(element);
    correct ? element.classList.add('correct') : element.classList.add('incorrect');
}

function clearFeedback(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function incrementCorrect() {
    
}

function incrementIncorrect() {
    
}

function endQuiz() {

}
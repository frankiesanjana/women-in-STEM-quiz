// define variables to select elements

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const restartButton = document.getElementById("restart-btn");
const introText = document.getElementById("intro-text");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const quizFeedback = document.getElementById("quiz-feedback");
const extraInfo = document.getElementById("extra-info");
const moreInfo = document.getElementById("more-info");
const extraOne = document.getElementById("extra1");
const extraTwo = document.getElementById("extra2");
const extraThree = document.getElementById("extra3");

// define variables to drive quiz

let currentQuestionIndex;
let shuffledQuestions;
let currentCorrect = 0;
let currentIncorrect = 0;

// event listeners

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', displayNextQuestion);

// functions


/**
 * Hides the start button and intro text, displays the quiz
 */
function startQuiz() {
    startButton.classList.add('hide');
    introText.classList.add('hide');
    quizFeedback.classList.add('hide');
    restartButton.classList.add('hide');
    document.getElementById('right').textContent = 0;
    document.getElementById('wrong').textContent = 0;
    quizContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    displayNextQuestion();
}

function displayNextQuestion() {
    clearQuizArea();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex++;
}

function clearQuizArea() {
    nextButton.classList.add('hide');
    extraInfo.classList.add('hide');
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
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct;
    setFeedback(selectedAnswer, correct);
    Array.from(answerButtons.children).forEach(button => {
        setFeedback(button, button.dataset.correct);
    })
    shuffledQuestions.length > currentQuestionIndex ? nextButton.classList.remove('hide') : endQuiz();
    correct ? incrementCorrect() : incrementIncorrect();
    showExtraInfo(shuffledQuestions[currentQuestionIndex-1]);
}

function showExtraInfo(question) {
    extraInfo.classList.remove('hide');
    moreInfo.innerText = question.info;
    extraOne.innerText = question.other1;
    extraTwo.innerText = question.other2;
    extraThree.innerText = question.other3;
}

function setFeedback(element, correct) {
    clearFeedback(element);
    correct ? element.classList.add('correct') : element.classList.add('incorrect');
    
}

function clearFeedback(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

/**
 * Takes the current score from the DOM and increments it by 1
 */
function incrementCorrect() {
    let previousScore = parseInt(document.getElementById('right').textContent);
    document.getElementById('right').textContent = previousScore + 1;
}

/**
 * Takes the current number of incorrect answers from the DOM and increments it by 1
 */
function incrementIncorrect() {
    let previousIncorrect = parseInt(document.getElementById('wrong').textContent);
    document.getElementById('wrong').textContent = previousIncorrect + 1;
}

function endQuiz() {
    finishButton.classList.remove('hide');
    finishButton.addEventListener('click', showEndPage);
}

function showEndPage() {
    quizContainer.classList.add('hide');
    finishButton.classList.add('hide');
    extraInfo.classList.add('hide');
    quizFeedback.classList.remove('hide');
    restartButton.classList.remove('hide');
    const finalScore = parseInt(document.getElementById('right').textContent);
    if (finalScore > 7) {
        document.getElementById('score-feedback').textContent = `Congratulations! You scored ${finalScore}. You're an expert!`;
    } else if (finalScore > 4) {
        document.getElementById('score-feedback').textContent = `Not bad! You scored ${finalScore}. You have a good level of knowledge!`;
    } else {
        document.getElementById('score-feedback').textContent = `You scored ${finalScore}. Want to learn more about women in STEM?`;
    }
}
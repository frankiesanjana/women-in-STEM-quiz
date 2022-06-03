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

// provides an index number for the current question, which is then incremented until all questions have been used
let currentQuestionIndex;

// this variable is used to randomise the order of the questions found in the array of questions (see separate file questions.js) and will create a new array in a different order each time it is used
let shuffledQuestions;

// event listeners

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', displayNextQuestion);

// functions


/**
 * hides the start button and intro text, displays the quiz. Adding a class of 'hide' to certain elements allows them to be targeted in the CSS to remove them from display
 */
function startQuiz() {
    startButton.classList.add('hide');
    introText.classList.add('hide');
    quizFeedback.classList.add('hide');
    restartButton.classList.add('hide');
    document.getElementById('right').textContent = 0;
    document.getElementById('wrong').textContent = 0;
    quizContainer.classList.remove('hide');
    // in the shuffledQuestions variable, the Math.random function is used to return a number between 0 and 1, then 0.5 is subtracted (since this is the mean value) in order to produce an equal probability of a positive or negative value. For a positive value, the index of the chosen parameter in the new array will be higher than that of the following parameter; for a negative value the index of the following parameter will be higher.
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    displayNextQuestion();
}

/**
 * removes the old content from the quiz area and selects the following question, then increments the current question index by 1
 */
function displayNextQuestion() {
    clearQuizArea();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex++;
}

/**
 * removes the Next button, extra information and old answer buttons from the quiz area
 */
function clearQuizArea() {
    nextButton.classList.add('hide');
    extraInfo.classList.add('hide');
    answerButtons.innerHTML = '';
}

/**
 * displays the next question and creates new answer buttons for it
 */
function showQuestion(question) {
    questionElement.textContent = question.question;
    // for each possible answer, creates a button and sets its content to the answer text, then adds the button to the answer-buttons div in the HTML
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

/**
 * checks whether the selected answer is correct, chooses whether to increment the score or the number of incorrect answers and calls the function to display extra info about all possible answers
 */
function checkAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct;
    setFeedback(selectedAnswer, correct);
    Array.from(answerButtons.children).forEach(button => {
        setFeedback(button, button.dataset.correct);
    })
    // conditional (ternary) operator: if the length of the shuffledQuestions array is greater than the currentQuestionIndex (i.e., if there are unused questions remaining), then remove the 'hide' class from the Next button so that the button displays to the user; otherwise, run the endQuiz function
    shuffledQuestions.length > currentQuestionIndex ? nextButton.classList.remove('hide') : endQuiz();
    // conditional (ternary) operator: if the correct answer has been selected, run the incrementCorrect function; otherwise, run the incrementIncorrect function
    correct ? incrementCorrect() : incrementIncorrect();
    showExtraInfo(shuffledQuestions[currentQuestionIndex-1]);
}

/**
 * displays extra info about all possible answers: unhides the div where the extra info is placed and then sets the content of each p element within the div to the corresponding piece of information for that option
 */
function showExtraInfo(question) {
    extraInfo.classList.remove('hide');
    moreInfo.innerText = question.info;
    extraOne.innerText = question.other1;
    extraTwo.innerText = question.other2;
    extraThree.innerText = question.other3;
}

/**
 * adds the class of correct or incorrect to the answers to provide feedback
 */
function setFeedback(element, correct) {
    clearFeedback(element);
    // conditional (ternary) operator: if the option is correct, adds 'correct' to the class so that it can be targeted in the CSS (coloured green); otherwise, adds 'incorrect' (coloured red in the CSS)
    correct ? element.classList.add('correct') : element.classList.add('incorrect');
    
}

/**
 * removes feedback colours so that the next question can be displayed
 */
function clearFeedback(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

/**
 * takes the current score from the DOM and increments it by 1. The parseInt function is used so that an integer is returned rather than a string
 */
function incrementCorrect() {
    let previousScore = parseInt(document.getElementById('right').textContent);
    document.getElementById('right').textContent = previousScore + 1;
}

/**
 * takes the current number of incorrect answers from the DOM and increments it by 1. Again, the parseInt function is used so that an integer is returned rather than a string
 */
function incrementIncorrect() {
    let previousIncorrect = parseInt(document.getElementById('wrong').textContent);
    document.getElementById('wrong').textContent = previousIncorrect + 1;
}

/**
 * provides a link to the end page once the user has answered all quiz questions
 */
function endQuiz() {
    finishButton.classList.remove('hide');
    finishButton.addEventListener('click', showEndPage);
}

/**
 * displays quiz end page with user's final score and feedback
 */
function showEndPage() {
    quizContainer.classList.add('hide');
    finishButton.classList.add('hide');
    extraInfo.classList.add('hide');
    quizFeedback.classList.remove('hide');
    restartButton.classList.remove('hide');
    // pulls the final score so that user feedback can be given. Again, the parseInt function is used so that an integer is returned rather than a string
    const finalScore = parseInt(document.getElementById('right').textContent);
    // if statement to provide feedback to the user dependent on their score. Template literals (backticks) are used so that the finalScore variable can be included in the string, as well as providing a less error-prone way of including single quotes inside the string
    if (finalScore > 7) {
        document.getElementById('score-feedback').textContent = `Congratulations! You scored ${finalScore}. You're an expert!`;
    } else if (finalScore > 4) {
        document.getElementById('score-feedback').textContent = `Not bad! You scored ${finalScore}. You have a good level of knowledge!`;
    } else {
        document.getElementById('score-feedback').textContent = `You scored ${finalScore}. Want to learn more about women in STEM?`;
    }
}
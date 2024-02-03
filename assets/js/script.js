// Global variables to access from more than 1 functions
const rulesBtn = document.querySelector('.rules-btn');
const rulesInfo = document.querySelector('.rules-info');
const exitBtn = document.querySelector('.info-btn-exit');
const main = document.querySelector('.main');
const quizSection = document.querySelector('.quiz-section');
const startBtn = document.querySelector('.start-btn')
const quizBox = document.querySelector('.quiz-box')
const homeBox = document.querySelector('.home-content');
const resultBox = document.querySelector('.result-box')
const nameInput = document.getElementById('name-input');
const questionText = document.querySelector('.question-text');
const questionNumber = document.querySelector('.question-number')
const optionsList = document.querySelector('.options-list')
const scoreIndicatorContainer = document.querySelector('.header-score')
const tryAgainBtn = document.querySelector('.tryagain-btn');
const homeSection = document.querySelector('.home');

// Add event listeners to button click
rulesBtn.addEventListener('click', clickedButtonHandler);
exitBtn.addEventListener('click', clickedButtonHandler);
tryAgainBtn.addEventListener('click', clickedButtonHandler);
startBtn.addEventListener('click', clickedButtonHandler);

// Add an event listener to each option
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        // Remove 'selected' class from all options
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

        // Add 'selected' class to the clicked option
        option.classList.add('selected');
    });
});


/***
 * Function to change pages when buttons clicked
 */
function clickedButtonHandler(event) {
    const clickedButton = event.target;
    //check if try again button clicked, then reset quiz
    if (clickedButton === tryAgainBtn) {
        resetQuiz();
    }
    
    // Check if Start button is clicked
    if (clickedButton === startBtn) {
        // Check if the nameInput is empty
        if (!nameInput.value.trim()) {
            alert('Please enter your username.');
        } else {
            // If not empty, start the quiz
            quizSection.classList.add('active');
            rulesInfo.classList.remove('active');
            quizBox.classList.add('active');
            startQuiz();
        }
    }
    // Rules info activates when the rules button clicked
    if (clickedButton === rulesBtn) {
        rulesInfo.classList.add('active');
        homeBox.classList.add('no-display');
    }
    // Exit button removes Rules info
    if (clickedButton === exitBtn) {
        rulesInfo.classList.remove('active');
        homeBox.classList.remove('no-display');
    }
}


// Inside this function, the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    const nameInput = document.getElementById('name-input');
    nameInput.focus();
});


    let questionCount = 0;
    let currentQuestion;
    let availableQuestions = [];
    let availableOptions = [];
    let correctAnswers = 0;
    const totalQuestion = 10;
    let attempt = 0;

    const nextBtn = document.querySelector('.next-btn');
    

//Inspired by https://youtu.be/LJ4PZ8JnRCg?si=WmTnFSNYpJCSLI95    

    /***
     * Function to push questions into availableQuestions
     */
    function setAvailableQuestions() {
        const totalQuestion = questions.length;
        for (let i = 0; i < totalQuestion; i++) {
            availableQuestions.push(questions[i]);
        }
    }
//Random question and options inspired by https://www.geeksforgeeks.org/random-string-generator-using-javascript/
    /***
     * Function to get new question and options
     */
    function getNewQuestion() {
        //set question number
        questionNumber.innerHTML = "Question" + " " + (questionCount + 1) + " " + "of " + totalQuestion;
        //set question text
        //randomize questions
        const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
        currentQuestion = questionIndex;
        questionText.innerHTML = currentQuestion.question;
        //get the position of "questionIndex" from the questions array
        const index1 = availableQuestions.indexOf(questionIndex);
        //remove the question index, that is why once given question will not repeated
        availableQuestions.splice(index1, 1);

        //set options
        //get the length of options
        const optionLen = currentQuestion.options.length
        //push options to available options array
        for (let i = 0; i < optionLen; i++) {
            availableOptions.push(i)
        }
        //remove old options
        optionsList.innerHTML = '';

        //create options in html
        for (let i = 0; i < optionLen; i++) {
            //random option
            const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

            // get the position of optionIndex from available options
            const index2 = availableOptions.indexOf(optionIndex);

            //remove the option from options array, then option will not repeat
            availableOptions.splice(index2, 1);
            const option = document.createElement("div");
            option.innerHTML = currentQuestion.options[optionIndex];
            option.id = optionIndex;

            option.className = "option";
            optionsList.appendChild(option)
            option.setAttribute('onclick', 'getResult(this)');
        }

        questionCount++

    }

    /***
     * Function to get the result of current attempt
     */
    function getResult(optionElement) {
        const id = parseInt(optionElement.id);
        // Remove 'selected' class from all options
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

        // Add 'selected' class to the clicked option
        optionElement.classList.add('selected');
        //get the answer by comparing the id of the clicked option
        if (id === currentQuestion.answer) {
            //set green background color if it is true
            optionElement.classList.add('correct');
            //add mark to correct answer
            updateScoreIndicator('correct');
            correctAnswers++;
            console.log("correct:" + correctAnswers)
        }
        else {
            //set red background color if it is wrong
            optionElement.classList.add('wrong');
            //add mark to incorrect answer
            updateScoreIndicator('wrong');
            //show the true answer in green if user's answer is wrong
            const optionLen = optionsList.children.length;
            for (let i = 0; i < optionLen; i++) {
                if (parseInt(optionsList.children[i].id) === currentQuestion.answer) {
                    optionsList.children[i].classList.add('correct');
                }
            }
        }
        attempt++;
        unclickableOptions();
    }

    /***
     * Function to choose one option per question
     */
    function unclickableOptions() {
        const optionLen = optionsList.children.length;
        for (let i = 0; i < optionLen; i++) {
            optionsList.children[i].classList.add('answered-once');
        }
    }

    /***
     * Function to set score
     */
    function scoreIndicator() {
        scoreIndicatorContainer.innerHTML = '';
        
        for (let i = 0; i < totalQuestion; i++) {
            const indicator = document.createElement('div');
            scoreIndicatorContainer.appendChild(indicator);
        }
    }

    /***
     * Function to update score indicator
     */
    function updateScoreIndicator(markType) {
        scoreIndicatorContainer.children[questionCount - 1].classList.add(markType)

    }

    /***
     * Function to change the questions when clicked next button,
     * displays alert message, if user clicks next without choosing any answer 
     * if questions are over, finishes quiz 
     */
    function next() {
        const selectedOption = document.querySelector('.option.selected');
        if (!selectedOption) {
            alert('Please select an answer before moving to the next question.');
        } else {
            if (questionCount === totalQuestion) {
            console.log("quiz over");
            questionCount = 0; // Reset question count
            quizOver();
        }
            else {
            getNewQuestion();
            }
        }
    }
    /***
     * Function to finish the quiz
     */
    function quizOver() {
        homeBox.classList.add('active');
        homeSection.classList.add('no-pointer-event');
        quizSection.classList.remove('active');
        resultBox.classList.add('active');
        rulesInfo.classList.remove('active');
        quizBox.classList.remove('active');
        homeBox.classList.add('no-display');
        quizResult();
    }

    /***
     * Function to get the user result 
     */
    function quizResult() {
        
        resultBox.querySelector('.total-question').innerHTML = totalQuestion;
        resultBox.querySelector('.total-attempt').innerHTML = attempt;
        resultBox.querySelector('.total-correct').innerHTML = correctAnswers;
        resultBox.querySelector('.total-wrong').innerHTML = attempt - correctAnswers;
        const percentage = (correctAnswers / totalQuestion) * 100;
        resultBox.querySelector('.percentage').innerHTML = percentage.toFixed(2) + "%";
        resultBox.querySelector('.total-score').innerHTML = correctAnswers + " / " + totalQuestion;
    }

    /***
     * Function to restart the quiz
     */
    function resetQuiz() {
        quizSection.classList.add('active');
        quizBox.classList.add('active');
        correctAnswers = 0;
        attempt = 0;
        questionCount = 0;
        startQuiz();
    }

    /***
     * Function to start the game
     */
    function startQuiz() {
        //Set all questions in availableQuestions Array first
        setAvailableQuestions();
        //Second set new question among available questions array
        getNewQuestion();
        //Set score
        scoreIndicator();
    }


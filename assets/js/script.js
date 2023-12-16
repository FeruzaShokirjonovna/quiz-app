const rulesBtn = document.querySelector('.rules-btn');
const rulesInfo = document.querySelector('.rules-info');
const exitBtn = document.querySelector('.info-btn-exit');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.info-btn-continue');
const quizSection = document.querySelector('.quiz-section');
const startBtn = document.querySelector('.start-btn')
const quizBox = document.querySelector('.quiz-box')

const questionText = document.querySelector('.question-text');
const questionNumber = document.querySelector('.question-number')
const optionsList = document.querySelector('.options-list')

/***
 * Rules info activates when the rules button clicked
 */
rulesBtn.onclick = () => {
    rulesInfo.classList.add('active');
    main.classList.add('active');
}
/***
 * Exit button removes Rules info
 */
exitBtn.onclick = () => {
    rulesInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    rulesInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
}

startBtn.onclick = () => {
    quizSection.classList.add('active');
    rulesInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
}

let questionCount = 0;
let currentQuestion;
let availableQuestions = [];

const nextBtn = document.querySelector('.next-btn')

/***
 * Function to push questions into availableQuestions
 */
function setAvailableQuestions() {
    const totalQuestion = questions.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(questions[i]);
    }
}

/***
 * Function to get new question and options
 */
function getNewQuestion(){
    //set question number
    questionNumber.innerHTML = "Question" + " "+ (questionCount + 1) + " " + "of 10";
    //set question text
    //randomize questions
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;
    //get the position of "questionIndex" from the questions array
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the question index, that is why once given question will not repeated
    availableQuestions.splice(index1,1);
    console.log(questionIndex);
    console.log(availableQuestions);
    
    questionCount++
}

function next(){
    if(questionCount === 10){
        console.log("quiz over")
    }
    else{
        getNewQuestion();
    } 
}

window.onload = function(){
    //Set all questions in availableQuestions Array first
    setAvailableQuestions();
    //Second set new question among available questions array
    getNewQuestion();
}

/***
 * Function to get questions from the array
 */

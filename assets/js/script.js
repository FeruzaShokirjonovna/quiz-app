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
let availableOptions = [];

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
    
    //set options
    //get the length of options
    const optionLen = currentQuestion.options.length
    //push options to available options array
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }


    //create options in html
    for(let i=0; i<optionLen; i++){
        //random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of optionIndex from available options
        const index2 = availableOptions.indexOf(optionIndex);
        //remove the option from options array, then option will not repeat
        availableOptions.splice(index2,1);
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
function getResult(optionElement){
    const id = parseInt(optionElement.id);

    //get the answer by comparing the id of the clicked option
    if(id === currentQuestion.answer){
        //set green background color if it is true
        optionElement.classList.add('correct');
    }
    else{
        //set red background color if it is wrong
        optionElement.classList.add('wrong');
    }

    unclickableOptions();
}

/***
 * Function to choose one option per question
 */
function unclickableOptions(){
    const optionLen = optionsList.children.length;
    for(let i=0; i<optionLen; i++){
        optionsList.children[i].classList.add('answered-once');
    }
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

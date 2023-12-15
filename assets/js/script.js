const rulesBtn = document.querySelector('.rules-btn');
const rulesInfo = document.querySelector('.rules-info');
const exitBtn = document.querySelector('.info-btn-exit');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.info-btn-continue');
const quizSection = document.querySelector('.quiz-section');
const startBtn = document.querySelector('.start-btn')

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
}

startBtn.onclick = () => {
    quizSection.classList.add('active');
    rulesInfo.classList.remove('active');
    main.classList.remove('active');
}


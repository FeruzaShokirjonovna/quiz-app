const rulesBtn = document.querySelector('.rules-btn');
const rulesInfo = document.querySelector('.rules-info');

rulesBtn.onclick = () => {
    rulesInfo.classList.add('active');
}

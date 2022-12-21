const bodyEl = document.getElementsByTagName('body');
const themeContainerEl = document.getElementById('theme-container');
const voteContainerEl = document.getElementById('vote-container');

const dayThemeBtn = document.getElementById('day--theme');
const nightThemeBtn = document.getElementById('night--theme');
const boyThemeEl = document.getElementById('boy--theme');
const girlThemeEl = document.getElementById('girl--theme');

const stars = document.querySelectorAll('.star');
const emojiEl = document.querySelector('.emoji');
const statusEl = document.querySelector('.status');
const statisticsEl = document.querySelector('.statistics');

const defaultRatingIndex = 0;
let currentRatingIndex = 0;
let ratedTimes = Math.floor(Math.random() * 565 - 1);

statisticsEl.innerHTML = `This page was rated <strong>${ratedTimes}</strong> times.`

const ratings = [
    {emoji: '✨', status: 'Please, rate this page.'},
    {emoji: '😢', status: 'Very Bad'},
    {emoji: '😟', status: 'Bad'},
    {emoji: '🙂', status: 'Good'},
    {emoji: '😍', status: 'Very Good'},
    {emoji: '😸', status: 'Excellent'},
];

const setRating = (index) => {
    stars.forEach(star => star.classList.remove('selected'));
    if (index > 0 && index <= stars.length) {
        document.querySelector(`[data-rate="${index}"]`).classList.add('selected');
        emojiEl.innerHTML = ratings[index].emoji;
        statusEl.innerHTML = ratings[index].status;
    };
};

const checkSelectedStar = (star) => {
    if (parseInt(star.getAttribute('data-rate')) === currentRatingIndex) {
        return true;
    } else {
        return false;
    };
};

const resetRating = () => {
    currentRatingIndex = defaultRatingIndex;
    setRating(defaultRatingIndex);
    emojiEl.innerHTML = ratings[index = 0].emoji;
    statusEl.innerHTML = ratings[index = 0].status;
};

stars.forEach((star) => {
    star.addEventListener('click', () => {
        if (checkSelectedStar(star)) {
            resetRating();
            return;
        }
        const index = parseInt(star.getAttribute('data-rate'));
        currentRatingIndex = index;
        setRating(index);
    });
    star.addEventListener('mouseover', () => {
        const index = parseInt(star.getAttribute('data-rate'));
        setRating(index);
    });
    star.addEventListener('mouseout', () => {
        setRating(currentRatingIndex);
    });
});
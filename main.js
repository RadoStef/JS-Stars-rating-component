// body and sections 
const bodyEl = document.querySelector('.body');
const themeContainerEl = document.getElementById('theme-container');
const voteContainerEl = document.getElementById('vote-container');

// theme btn-s
const dayThemeBtn = document.getElementById('day--theme');
const nightThemeBtn = document.getElementById('night--theme');

// rating app elements
const stars = document.querySelectorAll('.star');
const emojiEl = document.querySelector('.emoji');
const statusEl = document.querySelector('.status');
const statisticsEl = document.querySelector('.statistics');

// image elements
const sunImage = document.getElementById('sun');
const moonImage = document.getElementById('moon');

// indexes
const defaultRatingIndex = 0;
let currentRatingIndex = 0;
let ratedTimes = Math.floor(Math.random() * 565 - 1);

statisticsEl.innerHTML = `This page was rated <strong>${ratedTimes}</strong> times.`

// night-theme function
const switchToNightTheme = () => {
    bodyEl.classList.remove('body');
    bodyEl.classList.add('body-night');
    sunImage.classList.add('hidden');
    moonImage.classList.remove('hidden');
    nightThemeBtn.classList.add('active-theme-btn');
    dayThemeBtn.classList.remove('active-theme-btn');
    themeContainerEl.style.background = '#333';
    themeContainerEl.style.color = '#f1f1f1';
};

const switchToDayTheme = () => {
    bodyEl.classList.add('body');
    bodyEl.classList.remove('body-night');
    sunImage.classList.remove('hidden');
    moonImage.classList.add('hidden');
    dayThemeBtn.classList.add('active-theme-btn');
    nightThemeBtn.classList.remove('active-theme-btn'); 
    themeContainerEl.style.background = '#f4f4f4';
    themeContainerEl.style.color = '#000';
};

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

nightThemeBtn.addEventListener('click', switchToNightTheme);
dayThemeBtn.addEventListener('click', switchToDayTheme);


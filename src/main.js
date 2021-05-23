// query selector variables go here 👇

// Poster properties:
var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');

// button variables:
var buttonFormShowMain = document.querySelector('.show-main');
var buttonMakeRandomPoster = document.querySelector('.show-random');
var buttonMakeYourOwnPoster = document.querySelector('.show-form');
var buttonSavedBackToMain = document.querySelector('.back-to-main');
var buttonSavePoster = document.querySelector('.save-poster');
var buttonShowMyPoster = document.querySelector('.make-poster');
var buttonShowSavedPosters = document.querySelector('.show-saved');

// page variables:
var mainPage = document.querySelector('.main-poster');
var posterFormPage = document.querySelector('.poster-form');
var showSavedPage = document.querySelector('.saved-posters');

// user Poster properties:
var userInputImage = document.querySelector('#poster-image-url');
var userInputTitle = document.querySelector('#poster-title');
var userInputQuote = document.querySelector('#poster-quote');

// mini-poster class selectors
var savedGrid = document.querySelector('.saved-posters-grid');
var miniPoster = document.querySelector('.mini-poster');

// project given variables
var savedPosters = [];
var currentPoster = {};

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

// event listeners go here 👇
window.addEventListener('load', makeRandomPoster);
buttonFormShowMain.addEventListener('click', takeMeBack);
buttonMakeRandomPoster.addEventListener('click', makeRandomPoster);
buttonMakeYourOwnPoster.addEventListener('click', makeYourOwnPoster);
buttonSavedBackToMain.addEventListener('click', savedBackToMain);
buttonSavePoster.addEventListener('click', savePoster);
buttonShowMyPoster.addEventListener('click', showYourOwnPoster);
buttonShowSavedPosters.addEventListener('click', showSavedPosters);
showSavedPage.addEventListener('dblclick', removeElement);

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function makeRandomPoster() {
  posterImage.src = images[getRandomIndex(images)];
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
  currentPoster = new Poster(posterImage.src, posterTitle.innerText, posterQuote.innerText);
};

function hideMainPage() {
  mainPage.classList.add('hidden');
};

function showMainPage() {
  mainPage.classList.remove('hidden');
};

function hidePosterFormPage() {
  posterFormPage.classList.add('hidden');
};

function showPosterFormPage() {
  posterFormPage.classList.remove('hidden');
};

function hideSavedPosterPage() {
  showSavedPage.classList.add('hidden');
};

function showSavedPosterPage() {
  showSavedPage.classList.remove('hidden');
};

function makeYourOwnPoster() {
  showPosterFormPage()
  hideMainPage();
  document.querySelector('form').reset();
};

function showSavedPosters() {
    showSavedPosterPage();
    hideMainPage();
    displaySavedPoster();
};

function savedBackToMain() {
    showMainPage();
    hideSavedPosterPage();
};

function takeMeBack() {
    showMainPage();
    hidePosterFormPage()
};

function showYourOwnPoster () {
  event.preventDefault();
  posterImage.src = userInputImage.value;
  posterTitle.innerText = userInputTitle.value;
  posterQuote.innerText = userInputQuote.value;
  images.push(userInputImage.value);
  titles.push(userInputTitle.value);
  quotes.push(userInputQuote.value);
  currentPoster = new Poster(userInputImage.value, userInputTitle.value, userInputQuote.value);

  takeMeBack();
};

function savePoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  };
};

function displaySavedPoster() {
  savedGrid.innerHTML = "";
  for (var i = 0; i < savedPosters.length; i++) {
    savedGrid.innerHTML +=
    `<section class="mini-poster" id=${savedPosters[i].id}>
    <img src = ${savedPosters[i].imageURL}>
    <h2>${savedPosters[i].title}</h2>
    <h4>${savedPosters[i].quote}</h4>
    </section>`
  };
};

function removeElement() {
  var clickedMiniPoster = event.target.closest('.mini-poster');
   for (var i = 0; i < savedPosters.length; i++) {
     if (savedPosters[i].id === Number(clickedMiniPoster.id)) {
       savedPosters.splice(i, 1);
       displaySavedPoster();
    };
  };
};

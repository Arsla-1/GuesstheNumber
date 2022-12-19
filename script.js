'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  //Checking if the userinput field is empty
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    //When the player wins
  } else if (guess == secretNum) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    //setting the background as green by selecting the whole body
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNum;
    //Registering the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Changing the width
    document.querySelector('.number').style.width = '30rem';
  } //When the guess is too high
  else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }

    //When the guess is too low
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

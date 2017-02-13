'use strict';

var score = 0;
var possible = 0;

// Questions.
var q1 = 'Does Michael really like movies?'; // Get to know me questions.
var q2 = 'Does Michael enjoy playing video games?';
var q3 = 'Does Michael own dogs?';
var q4 = 'Does Michael love music?';
var q5 = 'Does Michael drive to class?';
var q6 = 'Can you guess the number of years Michael has worked in technology?'; // Numeric input question.
var q7 = 'Can you guess which companies Michael has worked for?'; // Multiple correct questions.

// Correct answer reponse.
var c1 = 'He really likes movies.'; // Get to know me answers.
var c2 = 'He enjoys playing video games.';
var c3 = 'He doesn\'t own dogs, but does have two cats.';
var c4 = 'He loves music.';
var c5 = 'He doesn\'t drive to class, he takes the bus.';
var c6 = 'He has worked in technology for over 10 years.'; // Numeric input answer.
var c7 = 'He worked at Apple.'; // Multiple correct answers.
var c8 = 'He worked for Hecker.';

// Incorrect answer response.
var i1 = 'He really likes movies.'; // Get to know me feedback.
var i2 = 'He does enjoy playing video games.';
var i3 = 'He doesn\'t own dogs. He has two cats.';
var i4 = 'He does love music.';
var i5 = 'He doesn\'t drive to class, he takes the bus.';
var i6 = 'Your guess was too high.'; // Numeric input feedback.
var i7 = 'Your guess was too low.';
var i8 = 'That\'s not a company he has worked for.'; // Multiple correct answers feedback.

// Arrays with q1-q7, c1-c8, i1-i8.
var questions = [q1, q2, q3, q4, q5, q6, q7]; // These are strings.
var correct = [c1, c2, c3, c4, c5, q6, q7]; // When boolean true.
var incorrect = [i1, i2, i3, i4, i5, i6, i7]; // When boolean false.

// This kind of works; I'm not sure how to fix it.
// function getToKnowMe() {
//   for (var i = 0; i < questions.length; i++) {
//     var askQuestion = prompt(questions[i]);
//
//     if (askQuestion.toUpperCase() === 'Y' || askQuestion.toLowerCase() === 'yes') {
//       for (var j = 0; j < correct.length; j++){
//         var showCorrect = alert(correct[j]);
//         break;
//       }
//
//     } else {
//       for (var k = 0; k < incorrect.length; k++){
//         var showIncorrect = alert(incorrect[k]);
//         break;
//       }
//     }
//   }
//   alert('That is the end of the get to know me section.');
// }
// getToKnowMe();

var firstName = prompt('What is your first name?');
alert('Hi ' + firstName);

function learnMore(){
  var takeQuiz = confirm('Would you like to take a quiz?');
  if (takeQuiz) {
    alert('Excellent! Please enter Y or N to each question.');
    movies();
  } else {
    alert('Let\'s do the quiz anyway.');
    alert('Please enter Y or N to each question.');
  }
}
learnMore();

// Question 1.
function movies(){
  var moviesQuestion = prompt(questions[0]);
  if (moviesQuestion.toUpperCase() === 'Y' || moviesQuestion.toLowerCase() === 'yes') {
    console.log('Movies true.');
    alert(correct[0]);
    score ++;
  } else if (moviesQuestion === '') {
    console.log('Movies empty.');
    alert('Uh oh, it looks like you didn\'t enter anything. Please try again.');
    movies();
  } else {
    console.log('Movies false.');
    alert(incorrect[0]);
  }
  possible ++;
  //alert('Here\'s the next question.');
}
movies();

// Question 2.
function games(){
  var gamesQuestion = prompt(questions[1]);
  if (gamesQuestion.toUpperCase() === 'Y' || gamesQuestion.toLowerCase() === 'yes') {
    console.log('Games true.');
    alert(correct[1]);
    score ++;
  } else if (gamesQuestion === '') {
    console.log('Games empty.');
    alert('Uh oh, it looks like you didn\'t enter anything. Please try again.');
    games();
  } else {
    console.log('Games false.');
    alert(incorrect[1]);
  }
  possible ++;
  // alert('Here\'s the next question.');
}
games();

// Question 3.
function dogs(){
  var dogsQuestion = prompt(questions[2]);
  if (dogsQuestion.toUpperCase() === 'Y' || dogsQuestion.toLowerCase() === 'yes') {
    console.log('Dogs true.');
    alert(incorrect[2]);
  } else if (dogsQuestion === '') {
    console.log('Dogs empty.');
    alert('Uh oh, it looks like you didn\'t enter anything. Please try again.');
    dogs();
  } else {
    console.log('Dogs false.');
    alert(correct[2]);
    score ++;
  }
  possible ++;
  // alert('Here\'s the next question.');
}
dogs();

// Question 4.
function music(){
  var musicQuestion = prompt(questions[3]);
  if (musicQuestion.toUpperCase() === 'Y' || musicQuestion.toLowerCase() === 'yes') {
    console.log('Music true.');
    alert(correct[3]);
    score ++;
  } else if (musicQuestion === '') {
    console.log('Music empty.');
    alert('Uh oh, it looks like you didn\'t enter anything. Please try again.');
    music();
  } else {
    console.log('Music false.');
    alert(incorrect[3]);
  }
  possible ++;
  // alert('Here\'s the next question.');
}
music();

// Question 5.
function drive(){
  var driveQuestion = prompt(questions[4]);
  if (driveQuestion.toUpperCase() === 'Y' || driveQuestion.toLowerCase() === 'yes') {
    console.log('Drive true.');
    alert(incorrect[4]);
  } else if (driveQuestion === '') {
    console.log('Drive empty.');
    alert('Uh oh, it looks like you didn\'t enter anything. Please try again.');
    drive();
  } else {
    console.log('Drive false.');
    alert(correct[4]);
    score ++;
  }
  possible ++;
  alert('That is the end of the get to know me section.');
  alert('Let\'s move on. Here\'s the next question.');
}
drive();

// Question 6.
function years() {
  var yearsAnswer = '10';
  possible ++;
  console.log('Score possible +1');
  for (var i = 0; i < 4; i++) {
    var yearsGuess = prompt(questions[5]);
    if (yearsGuess === yearsAnswer) {
      console.log('Years true.');
      alert('You got it right.');
      alert('Here\'s the next question.');
      score ++;
      break;
    } else if (yearsGuess === '') {
      console.log('Years empty.');
      alert('Uh oh, it looks like you didn\'t enter anything. Please try again.');
      years();
    } else if (yearsGuess < 10) {
      console.log('Guess is too low.');
      alert('Guess is too low. You have ' + (3 - i) + ' guesses left.');
    } else {
      console.log('Guess is too high.');
      alert('Guess is too high. You have ' + (3 - i) + ' guesses left.');
    }
  }
}
years();

// Question 7.
function companies(){
  var companiesCorrect = ['apple', 'hecker'];
  possible ++;
  for (var i = 0; i < 6; i++) {
    var companiesQuestion = prompt('Guess which companies I have worked for.');
    if (companiesQuestion.toLowerCase() === 'apple' || companiesQuestion.toLowerCase() === 'hecker') {
      console.log('Companies true.');
      alert('Nice going! That\'s the correct answer.');
      alert('Yay! That was the final question.');
      score ++;
      break;
    } else {
      console.log('Companies false.');
      alert('Incorrect. You have ' + (5 - i) + ' guesses left.');
    }
  }
}
companies();

function alertAnswers() {
  var one = correct[0];
  var two = correct[1];
  var three = correct[2];
  var four = correct[3];
  var five = correct[4];
  var six = 'He has worked in technology for over 10 years.';
  var seven = 'He worked at Apple and Hecker.';
  var sentence = alert('The correct answers are: ' + one + ' ' + two + ' ' + three + ' ' + four + ' ' + five + ' ' + six + ' ' + seven);
}
alertAnswers();

function scoreTotal() {
  alert('You answered ' + score + ' out of ' + possible + ' questions correct ' + firstName + '.');
}
scoreTotal();

var el = document.getElementById('answers-correct');
el.innerHTML = '<p>You got ' + score + ' out of ' + possible + ' questions correct ' + firstName + '.</p>';

// Display all correct answers.
function guessAnswers() {
  var el = document.getElementById('answers-list-1');
  el.innerHTML = correct[0];
  var el = document.getElementById('answers-list-2');
  el.innerHTML = correct[1];
  var el = document.getElementById('answers-list-3');
  el.innerHTML = correct[2];
  var el = document.getElementById('answers-list-4');
  el.innerHTML = correct[3];
  var el = document.getElementById('answers-list-5');
  el.innerHTML = correct[4];
  var el = document.getElementById('answers-list-6');
  el.innerHTML = correct[5];
  var el = document.getElementById('answers-list-7');
  el.innerHTML = correct[6];
}
guessAnswers();

// End.

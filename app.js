'use strict';
//Prompt the user 5 different times about you.
var userName = prompt('Welcome. What is your first name?');

// Play a game message
var confirmQuiz = prompt('Hi ' + userName + '. To learn more about Michael, would you like to take a quiz? Indicate Y or N');

var correct = 0;

function takeQuiz() {
  if(confirmQuiz.toUpperCase() === 'Y'){
    console.log('Awesome! Lets get started!');
    alert('Awesome! Lets get started!');
  } else {
    console.log('Too Bad, starting anyway.');
    alert('Too Bad, starting anyway.');
  }
}

takeQuiz();

// Question 1
var quizResponseOne = prompt('Please Answer with Y or N. Does Michael really like movies?');

// edge cases.
// could also do below: quizResponseOne.charAt(0).toUpperCase()
function firstQuestion(){
  if(quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toLowerCase() === 'yes'){
    console.log('Yes, Michael really likes movies.');
  } else {
    console.log('No, Michael really likes movies.');
  }
}
firstQuestion();

// Question 2
var quizResponseTwo = prompt('Please Answer with Y or N. Does Michael enjoy playing video games?');

function secondQuestion() {
  if(quizResponseTwo.toUpperCase() === 'Y'){
    console.log('Yes, Michael enjoys playing video games.');
  } else {
    console.log('Surprise, you\'re wrong! Michael enjoys playing video games.');
  }
}
secondQuestion();

// Question 3
var quizResponseThree = prompt('Please Answer with Y or N. Does Michael own dogs?');

function thirdQuestion() {
  if(quizResponseThree.toUpperCase() === 'Y'){
    console.log('Sorry, that\'s not right. Michael, doesn\'t own dogs.');
  } else {
    console.log('Correct. Michael doesn\'t own dogs. Bonus: he does own two cats.');
  }
}
thirdQuestion();

// Question 4
var quizResponseFour = prompt('Please Answer with Y or N. Does Michael love music?');

function fourthQuestion() {
  if(quizResponseFour.toUpperCase() === 'Y'){
    console.log('Yes, Michael loves music.');
  } else {
    console.log('Oops, that\'s incorrect. Who doesn\'t love music?');
  }
}
fourthQuestion();
// Question 5
var quizResponseFive = prompt('Please Answer with Y or N. Does Michael drive to class?');

function fifthQuestion() {
  if(quizResponseFive.toUpperCase() === 'Y'){
    console.log('Narp, Michael doesn\'t drive to class; he rides the bus.');
  } else {
    console.log('That\'s the right answer. Michael braves the bus commute every day.');
  }
}
fifthQuestion();
// The End.
// var firstName; // Prompt, string to boolean Y/N.
// var takeQuiz; // Boolean Y/N, if no too bad.
//
// // Questions 1-5.
// var q1 = 'Does Michael really like movies?'; // Prompt, string to boolean Y/N.
// var q2 = 'Does Michael enjoy playing video games?';
// var q3 = 'Does Michael own dogs?';
// var q4 = 'Does Michael love music?';
// var q5 = 'Does Michael drive to class?';
//
// // Answer correct reponse 1-5. Yes, true.
// var a1 = 'Correct, Michael really likes movies.'; // Prompt, string to boolean Y/N.
// var a2 = 'Correct, Michael enjoys playing video games.';
// var a3 = 'Correct, Michael doesn\'t own dogs.';
// var a4 = 'Correct, Michael loves music';
// var a5 = 'Correct, Michael doesn\'t drive to class.';
//
// // Wrong answer response 1-5. No, false.
// var w1 = 'Incorrect, Michael really likes movies.'; // Prompt, string to boolean Y/N.
// var w2 = 'Incorrect, Michael does enjoy playing video games.';
// var w3 = 'Incorrect, Michael doesn\'t own dogs.';
// var w4 = 'Incorrect, Michael does love music.';
// var w5 = 'Incorrect, Michael doesn\'t drive to class';
//
// // ### Start of Working Numberic Input ###
// // Guess the number of years I have worked in Retail Technology.
// var yearsGuess; // Prompt, string to integer.
var yearsAnswer = '10';
// var answerGuesses = 4;
// var wrongGuesses; // Variable to hold how many wrong answers.

// Test condition. Indicates to the user whether the guess is 'too high' or 'too low.
function sixthQuestion() {
  for (var i = 0; i < 4; i++) {
    var yearsGuess = prompt('How many years I\'ve worked in retail technology?');
    if (yearsGuess === yearsAnswer) {
      console.log('Correct');
      console.log(alert('You got it right.'));
      break;
    } else if (yearsGuess < 10) {
      console.log('Guess is too low.');
      alert('Guess is too low.');
    } else {
      console.log('Guess is too high. You have ' + (4 - i) + ' guesses left.');
      alert('Guess is too high.');
    }
      // If incorrect, or false, run this code. Keep asking again until out of questions.
  }
}
sixthQuestion();
// ### End of Working Numberic Input ###

// ### Start of Multiple Correct Answers ###
var companiesQuestion = prompt('Guess which companies I have worked for. You have six guesses.');

var companiesCorrect = ['Apple', 'Hecker'];

function seventhQuestion() {
  // if (companiesQuestion === 'Apple' || companiesQuestion === 'Hecker') {
  //   console.log('correct');
  // } else {
  //   console.log('wrong');
  // } // Always true? ... Should work now.
  //
  // // if ('companiesCorrect') {
  // //   console.log('correct');
  // // } else {
  // //   console.log('wrong');
  // // }  // Always true?

  for (var i = 0; i < 5; i++) {
    if (companiesQuestion === 'Apple' || companiesQuestion === 'Hecker') {
      console.log('correct');
      break;
    } else {
      console.log('Incorrect. You have ' + (5 - i) + ' guesses left.');
      alert('Incorrect. You have ' + (5 - i) + ' guesses left.');
      // If incorrect, or false, run this code. Keep asking again until out of questions.
    }
  }
}
seventhQuestion();

  //google array method. array.includes
  //trying to compare.
  // companiesCorrect.includes('Put a variable here for user input, companiesQuestion'); // array to search through. compare to companiesCorrect

// ### End of Multiple Correct Answers ###

// var totalQuestions; // Integer. Tally of total number of all questions.
// var totalCorrectAnswers; // Integer. Total number of correct answers given thus far.
// var totalWrongAnswers; // Integer. Tracks how many wrong answers. Wrong guesses less than 6.
//
// //var allQuestions = [1, 2, 3, 4, 5, 6, 7];
// var answersYes = [];
// var answersNo = [];

// Upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

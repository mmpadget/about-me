'use strict';

var firstName;
var takeQuiz;

// Questions.
var q1 = 'Does Michael really like movies?'; // Get to know me questions.
var q2 = 'Does Michael enjoy playing video games?';
var q3 = 'Does Michael own dogs?';
var q4 = 'Does Michael love music?';
var q5 = 'Does Michael drive to class?';
var q6 = 'Can you guess the number of years I\'ve worked in technology?'; // Numeric input question.
var q7 = 'Can you guess which companies I have worked for?'; // Multiple correct questions.

// Correct answer reponse.
var c1 = 'Correct, Michael really likes movies.'; // Get to know me answers.
var c2 = 'Correct, Michael enjoys playing video games.';
var c3 = 'Correct, Michael doesn\'t own dogs.';
var c4 = 'Correct, Michael loves music';
var c5 = 'Correct, Michael doesn\'t drive to class.';
var c6 = 'Correct, I\'ve worked in technology for over 10 years.'; // Numeric input answer.
var c7 = 'Correct, I worked at Apple.'; // Multiple correct answers.
var c8 = 'Correct, I worked for Hecker.';

// Incorrect answer response.
var i1 = 'Incorrect, Michael really likes movies.'; // Get to know me feedback.
var i2 = 'Incorrect, Michael does enjoy playing video games.';
var i3 = 'Incorrect, Michael doesn\'t own dogs.';
var i4 = 'Incorrect, Michael does love music.';
var i5 = 'Incorrect, Michael doesn\'t drive to class';
var i6 = 'Incorrect, your guess was too high.'; // Numeric input feedback.
var i7 = 'Incorrect, your guess was too low.';
var i8 = 'Incorrect, that\'s not a company I\'ve worked for.'; // Multiple correct answers feedback.

// Arrays with q1-q7, c1-c8, i1-i8.
var questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']; // These are strings.
var correct = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']; // When boolean true.
var incorrect = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8']; // When boolean false.

var question1 = [true, false];
var question2 = [true, false];
var question3 = [true, false];
var question4 = [true, false];
var question5 = [true, false];
var question6 = [true, false];
var question7 = [true, false];

// Question 1.
function movies(){
  // Guess Y/N, get a point.
  console.log('movies');
}
movies();

// Question 2.
function games(){
  // Guess Y/N, get a point.
  console.log('games');
}
games();

// Question 3.
function dogs(){
  // Guess Y/N, get a point.
  console.log('dogs');
}
dogs();

// Question 4.
function music(){
  // Guess Y/N, get a point.
  console.log('music');
}
music();

// Question 5.
function drive(){
  // Guess Y/N, get a point.
  console.log('drive');
}
drive();

// Question 6.
function years(){
  // Guess Y/N, get a point.
  console.log('years');
}
years();

// Question 7.
function companies(){
  // Guess Y/N, get a point.
  console.log('companies');
}
companies();

// Start Previous Code!
// // ### Start of quiz prompt with no feedback ###
//
// //Prompt the user 5 different times about you.
// var userName = prompt('Welcome. What is your first name?');
//
// // Play a game message
// var confirmQuiz = prompt('Hi ' + userName + '. To learn more about Michael, would you like to take a quiz? Indicate Y or N');
//
// var correct = 0;
//
// function takeQuiz() {
//   if(confirmQuiz.toUpperCase() === 'Y'){
//     console.log('Awesome! Lets get started!');
//     alert('Awesome! Lets get started!');
//   } else {
//     console.log('Too Bad, starting anyway.');
//     alert('Too Bad, starting anyway.');
//   }
// }
//
// takeQuiz();
//
// // ### End of quiz prompt with no feedback ###

// ### Start of Working 5 questions quiz with no feedback ###

// // Question 1
// var quizResponseOne = prompt('Please Answer with Y or N. Does Michael really like movies?');
//
// // edge cases.
// // could also do below: quizResponseOne.charAt(0).toUpperCase()
// function firstQuestion(){
//   if(quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toLowerCase() === 'yes'){
//     console.log('Yes, Michael really likes movies.');
//   } else {
//     console.log('No, Michael really likes movies.');
//   }
// }
// firstQuestion();
//
// // Question 2
// var quizResponseTwo = prompt('Please Answer with Y or N. Does Michael enjoy playing video games?');
//
// function secondQuestion() {
//   if(quizResponseTwo.toUpperCase() === 'Y'){
//     console.log('Yes, Michael enjoys playing video games.');
//   } else {
//     console.log('Surprise, you\'re wrong! Michael enjoys playing video games.');
//   }
// }
// secondQuestion();
//
// // Question 3
// var quizResponseThree = prompt('Please Answer with Y or N. Does Michael own dogs?');
//
// function thirdQuestion() {
//   if(quizResponseThree.toUpperCase() === 'Y'){
//     console.log('Sorry, that\'s not right. Michael, doesn\'t own dogs.');
//   } else {
//     console.log('Correct. Michael doesn\'t own dogs. Bonus: he does own two cats.');
//   }
// }
// thirdQuestion();
//
// // Question 4
// var quizResponseFour = prompt('Please Answer with Y or N. Does Michael love music?');
//
// function fourthQuestion() {
//   if(quizResponseFour.toUpperCase() === 'Y'){
//     console.log('Yes, Michael loves music.');
//   } else {
//     console.log('Oops, that\'s incorrect. Who doesn\'t love music?');
//   }
// }
// fourthQuestion();
//
// // Question 5
// var quizResponseFive = prompt('Please Answer with Y or N. Does Michael drive to class?');
//
// function fifthQuestion() {
//   if(quizResponseFive.toUpperCase() === 'Y'){
//     console.log('Narp, Michael doesn\'t drive to class; he rides the bus.');
//   } else {
//     console.log('That\'s the right answer. Michael braves the bus commute every day.');
//   }
// }
// fifthQuestion();

// ### End of Working 5 questions quiz with no feedback ###

// // ### Slightly working numeric input, many issues ###
//
// // Guess the number of years I have worked in Retail Technology.
// var yearsGuess;
// var answerGuesses = 4;
// var yearsAnswer = '10';
//
// // Test condition. Indicates to the user whether the guess is 'too high' or 'too low.
// function sixthQuestion() {
//   for (var i = 0; i < 4; i++) {
//     var yearsGuess = prompt('How many years I\'ve worked in retail technology?');
//     if (yearsGuess === yearsAnswer) {
//       console.log('Correct');
//       console.log(alert('You got it right.'));
//       break;
//     } else if (yearsGuess < 10) {
//       console.log('Guess is too low.');
//       alert('Guess is too low.');
//     } else {
//       console.log('Guess is too high. You have ' + (4 - i) + ' guesses left.');
//       alert('Guess is too high.');
//       // If incorrect, or false, run this code. Keep asking again until out of questions.
//     }
//   }
// }
// sixthQuestion();
//
// // ### End slightly working numeric input, many issues ###

// // ### Start of multiple correct answers, many issues ###
//
// function seventhQuestion() {
//   var companiesCorrect = ['Apple', 'Hecker'];
//   for (var i = 0; i < 5; i++) {
//     var companiesQuestion = prompt('Guess which companies I have worked for.');
//
//     if (companiesQuestion === 'Apple' || companiesQuestion === 'Hecker') {
//       console.log('correct');
//       break;
//     } else {
//       console.log('Incorrect. You have ' + (5 - i) + ' guesses left.');
//       alert('Incorrect. You have ' + (5 - i) + ' guesses left.');
//       // If incorrect, or false, run this code. Keep asking again until out of questions.
//     }
//   }
// }
// seventhQuestion();
//
// // ### End of multiple correct answers, many issues ###
// End Previous Code!

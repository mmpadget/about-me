/*'use strict';
//Prompt the user 5 different times about you.
var userName = prompt('Welcome. What is your first name?');

// Play a game message
var confirmQuiz = confirm('Hi ' + userName + '. To learn more about Michael, would you like to take a quiz?');

if(confirmQuiz){
  console.log('Awesome! Lets get started!');
} else {
  console.log('Too Bad, starting anyway.');
}

// Question 1
var quizResponseOne = prompt('Please Answer with Y or N. Does Michael really like movies?');

// edge cases.
// could also do below: quizResponseOne.charAt(0).toUpperCase()

if(quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toLowerCase() === 'yes'){
  console.log('Yes, Michael really likes movies.');
} else {
  console.log('No, Michael really likes movies.');
}

// Question 2
var quizResponseTwo = prompt('Please Answer with Y or N. Does Michael enjoy playing video games?');

if(quizResponseTwo.toUpperCase() === 'Y'){
  console.log('Yes, Michael enjoys playing video games.');
} else {
  console.log('Surprise, you\'re wrong! Michael enjoys playing video games.');
}

// Question 3
var quizResponseThree = prompt('Please Answer with Y or N. Does Michael own dogs?');

if(quizResponseThree.toUpperCase() === 'Y'){
  console.log('Sorry, that\'s not right. Michael, doesn\'t own dogs.');
} else {
  console.log('Correct. Michael doesn\'t own dogs. Bonus: he does own two cats.');
}

// Question 4
var quizResponseFour = prompt('Please Answer with Y or N. Does Michael love music?');

if(quizResponseFour.toUpperCase() === 'Y'){
  console.log('Yes, Michael loves music.');
} else {
  console.log('Oops, that\'s incorrect. Who doesn\'t love music?');
}

// Question 5
var quizResponseFive = prompt('Please Answer with Y or N. Does Michael drive to class?');

if(quizResponseFive.toUpperCase() === 'Y'){
  console.log('Narp, Michael doesn\'t drive to class; he rides the bus.');
} else {
  console.log('That\'s the right answer. Michael braves the bus commute every day.');
}

// The End.
*/

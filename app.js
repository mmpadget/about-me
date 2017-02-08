'use strict';

//Prompt the user 5 different times about you.

var confirmQuiz = confirm('Hello, would you like to take a quiz?');

//Handed boolean value, so no need to validate.
if(confirmQuiz){
  console.log('Awesome! Lets get started!');
} else {
  console.log('Too Bad, starting anyway.');
}

/*
Questions
1. Does Michael really like movies?
2. Does Michael enjoy playing video games?
3. Does Michael own dogs?
4. Does Michael love music?
5. Does Michael drive to class?
*/

/*
Answers
1. Yes, Michael really likes movies.
2. Yes, Michael enjoys playing video games.
3. Heck no! Michael doesn't own dogs, he has two cats.
4. Yes, Michael loves music.
5. Narp, Michael doesn't drive to class; he rides the bus.
*/

// Question 1
var quizResponseOne = prompt('Please Answer with Y or N. Does Michael really like movies?');

if(quizResponseOne.toUpperCase() === 'Y'){
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

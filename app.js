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

var quizResponseOne = prompt('Please Answer with Y or N. Does Michael really like movies?');

//With prompt, will store info as a string.
if(quizResponseOne.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too Bad, you were wrong. Adam has a dog');
}

var quizResponseTwo = prompt('Please Answer with Y or N. Does Michael enjoy playing video games?');

if(quizResponseTwo.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too Bad, you were wrong. Adam has a dog');
}

var quizResponseThree = prompt('Please Answer with Y or N. Does Michael own dogs?');

if(quizResponseThree.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too Bad, you were wrong. Adam has a dog');
}

var quizResponseFour = prompt('Please Answer with Y or N. Does Michael love music?');

if(quizResponseFour.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too Bad, you were wrong. Adam has a dog');
}

var quizResponseFive = prompt('Please Answer with Y or N. Does Michael drive to class?');

if(quizResponseFive.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too Bad, you were wrong. Adam has a dog');
}

'use strict';

//Prompt the user 5 different times about you.

var confirmQuiz = confirm('Hello, would you like to take a quiz?');

//Handed boolean value, so no need to validate.
if(confirmQuiz){
  console.log('Awesome! Lets get started!');
} else {
  console.log('Too Bad, starting anyway.');
}

var quizResponseOne = prompt('Please Answer with Y or N. Does Adam have a dog?');

//With prompt, will store info as a string.
if(quizResponseOne.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too Bad, you were wrong. Adam has a dog');
}

const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) { // Number divides by 3 and 5 with a remainder of zero
    return 'FizzBuzz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else {
    return number;
  }
}

module.exports = fizzBuzz;


// To run, run node and type
// const fizzBuzz = require('./fizzBuzz');
// fizzBuzz(15);
// returns FizzBuzz
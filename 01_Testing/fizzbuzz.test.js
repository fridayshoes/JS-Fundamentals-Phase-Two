const fizzBuzz = require("./fizzBuzz");

describe('fizzBuzz', () => {
  it('takes an integer 3, divides by 3 and returns Fizz', () => {
    result = fizzBuzz(3);
    expect(result).toBe('Fizz');
  });
  
  it('takes an integer 5, divides by 5 and returns Buzz', () => {
    result = fizzBuzz(5);
    expect(result).toBe('Buzz');
  });

  it('takes an integer 8, and returns 8', () => {
    result = fizzBuzz(8);
    expect(result).toBe(8);
  });

  it('takes an integer 15, and divides by 3 and 5, returns FizzBuzz', () => {
    result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('takes an integer 18, divides by 3 and returns Fizz', () => {
    result = fizzBuzz(18);
    expect(result).toBe('Fizz');
  });

  it('takes an integer 20, divides by 5 and returns Buzz', () => {
    result = fizzBuzz(20);
    expect(result).toBe('Buzz');
  });
  
});
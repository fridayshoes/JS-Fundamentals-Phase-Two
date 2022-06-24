const { add, multiply } = require("./add");

describe('add', () => {
  it('adds 2 and 2', () => {
    result = add(2, 2);
    expect(result).toBe(4);
  });
  
  it('adds 0 and 5', () => {
    result = add(2, 5);
    expect(result).toBe(7);
  }); 
});

describe('multiply', () => {
  it('multiply 2 and 2', () => {
    result = multiply(2, 3);
    expect(result).toBe(6);
  });
  
  it('multiply 3 and 9', () => {
    result = multiply(3, 9);
    expect(result).toBe(27);
  }); 
});
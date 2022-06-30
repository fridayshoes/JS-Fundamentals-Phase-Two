const { searchCandies, priceFilter, nameFilter } = require("./searchCandies");

describe('priceFilter', () => {
  it('take a max price integer and returns the candy names of below that price', () => {
    result = priceFilter(10);
    console.log(result);
    expect(result).toContain[('Skittles')];
  });
});

describe('nameFilter', () => {
  it('takes a string and returns the names of products matching the string', () => {
    result = nameFilter('Ma');
    console.log(result);
    expect(result).toContain[('Mars', 'Maltesers')];
  });

  it('takes a lowercase string and returns the names of products matching the string', () => {
    result = nameFilter('ma');
    console.log(result);
    expect(result).toContain[('Mars', 'Maltesers')];
  });
});

describe('searchCandies', () => {
  it('takes a string and a high value max price integer', () => {
    result = searchCandies('Ma', 10);
    console.log(result);
    expect(result).toEqual[ 'Mars', 'Maltesers' ];
  });

  it('takes a string and a low value max price integer', () => {
    result = searchCandies('Ma', 2);
    console.log(result);
    expect(result).toEqual[ 'Mars' ];
  });

  it('takes a string and a high value max price integer', () => {
    result = searchCandies('S', 10);
    console.log(result);
    expect(result).toEqual[ 'Skitties', 'Skittles', 'Starburst' ];
  });

  it('takes a string and a low value max price integer', () => {
    result = searchCandies('S', 4);
    console.log(result);
    expect(result).toEqual[ 'Skitties', 'Skittles' ];
  });

  it('takes a lowercase string and a high value max price integer', () => {
    result = searchCandies('ma', 10);
    console.log(result);
    expect(result).toEqual[ 'Mars', 'Maltesers' ];
  });

});
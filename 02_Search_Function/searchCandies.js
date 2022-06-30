// An array of objects
const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

// Function to filter max price and name
const searchCandies = (string, integer) => {
  result = priceFilter(integer).filter((name) => nameFilter(string).includes(name)); // filters results of priceFilter against name matches of nameFilter
  let names = result.map( (item) => item.name); // removes price from result
  let namesUC = names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase()); // upcases the first letter and lowercase rest of result 
    return namesUC;  
};

// Function to filter max price v1
const priceFilter = (price) => {
  maxprice = candies.filter(candy => candy.price < price);
  return maxprice;
};

// Function to filter name v1
// const nameFilter = (searchString) => {
//   return candies.filter(candy => candy.name.includes(searchString));
// };

// Function to filter name v2 - with lowercase search functionality
const nameFilter = (searchString) => {
  candies.forEach(function(obj){obj.name = obj.name.toLowerCase()}); // converts objects names in array to lowercase
  return candies.filter(candy => candy.name.startsWith(searchString.toLowerCase())); // filters the names of candies that start with the searchstring
};

// Function to filter name and return result as string
// const nameFilter2 = (searchString) => {
//   result = candies.filter(candy => candy.name.includes(searchString));
//   let names = result.map( (item) => item.name);
//   return names.toString();
// };


module.exports = { searchCandies, priceFilter, nameFilter };

// console.log(priceFilter(10));
// console.log(nameFilter('Ma'));
// console.log(nameFilter('ma'));

// console.log(searchCandies('Ma', 10)); // [ 'Mars', 'Maltesers' ]
// console.log(searchCandies('Ma', 2));  // [ 'Mars' ]
// console.log(searchCandies('S', 10));  // [ 'Skitties', 'Skittles', 'Starburst' ]
// console.log(searchCandies('S', 4));   // [ 'Skitties', 'Skittles' ]
// console.log(searchCandies('ma', 10)); // [ 'Mars', 'Maltesers' ]




// console.log(nameFilter2('Ma'));
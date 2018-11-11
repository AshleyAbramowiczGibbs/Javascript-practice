// # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// def print_numbers_divisible_by_three
//   index = 1
//   while index <= 1000
//     if index % 3 == 0
//       puts index
//     end
//     index += 1
//   end
// end
// print_numbers_divisible_by_three
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
printNumbersDivisibleByThree();

// # Write a method that accepts an array of strings and prints out every other string.
// def print_every_other_item(strings)
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       puts string
//     end
//     index += 1
//   end
// end
// print_every_other_item(["a", "b", "c", "d", "e"])
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
printEveryOtherItem(["a", "b", "c", "d", "e"]);

// # Write a method that accepts an array of numbers and returns the sum.
// def compute_sum(numbers)
//   sum = 0
//   numbers.each do |number|
//     sum += number
//   end
//   return sum
// end
// puts compute_sum([2, 4, 5])
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
console.log(computeSum([2, 4, 5]));

// # Start with the hash: city_populations = {chi: 2700000}
// # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// city_populations = {chi: 2700000}
// city_populations[:nyc] = 8400000
// city_populations[:sf] = 800000
// p city_populations
var cityPopulations = { chi: 2700000 };
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000; // same as cityPopulations["sf"]
console.log(cityPopulations);

// # Write a method that prints out every number from 1 to 100.

function everyOther() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

everyOther();

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function everyOdd() {
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

everyOdd();

function everyOddWhile() {
  let i = 0;
  while (i < 100) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i += 1;
  }
}

everyOddWhile();

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function fiftyfives(arrayStuff) {
  let count = 0;

  for (let i = 0; i < arrayStuff.length - 1; i++);
  {
    if (arrayStuff[i] === 55) {
      count++;
    }
    i += 1;
  }
  console.log(count);
}

fiftyfives([1, 2, 55, 6, 4, 55, 3]);

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.

function awesomesauce(stringOfWords) {
  let newArray = [];
  let newElement = ["awesomesauce"];
  let i = 0;

  for (let i = 0; i < stringOfWords.length - 1; i++);
  {
    newArray += stringOfWords[i] + newElement;
  }
  i += 1;
  console.log(newArray);
}

awesomesauce(["hi", "bye", "what", "no"]);
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}

function purchases() {
  let itemAmounts = { chair: 5, table: 2 };

  let newChair = Object.keys(itemAmounts)[0] - 2;
  Object.keys(itemAmounts)[0] = newChair;

  console.log(itemAmounts);
}

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}

// # Write a method that accepts a number and returns its factorial.

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--);
  {
    total *= i;
  }
  return total;
}

factorial(5);

// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.

function twoArrays(arrayOne, arrayTwo) {
  let sum = 0;
  let sumOne = 0;
  let sumTwo = 0;

  for (let i = 0; i < arrayOne.length; i++) {
    sumOne += arrayOne[i];
    i += 1;
  }

  for (let j = 0; j < arrayTwo.length; j++) {
    sumTwo += arrayTwo[j];
    j += 1;
  }

  console.log(sumOne + sumTwo);
}

twoArrays([1, 5, 10], [100, 500, 1000]);

// ---------------

let x = 10;

if (x === "10") {
  console.log("equal");
} else {
  console.log("not equal");
}

// -------------------

let y = 3;

if (y === undefined) {
  y = y + 1;
}

if (y === false) {
  y = y + 1;
}

if (y === 0) {
  y = y + 1;
}

if (y === null) {
  y = y + 1;
}

console.log(y);

// -----------------

function printLyrics() {
  console.log("Now this is a story all about how");
  console.log("My life got flipped turned upside down");
  console.log("And I'd like to take a minute, just sit right there");
  console.log("I'll tell you how I became the prince of a town called Bel-Air");
}

printLyrics();

// --------------------------

let z = 100;

function addOne(num) {
  z = 1;
  return num + z;
}

console.log(z);
console.log(addOne());
console.log(z);

// ----------------------------

let boat = {
  name: "S. S. Minnow",
  color: "white",
  price: 2000
};

console.log(boat);
console.log(boat.name);

function changeColor() {
  boat.color === "red";
}
console.log(boat.color);
console.log(boat.color);

// ----------------

function selectEvenItems(strings) {
  var result = [];
  var index = 0;

  strings.forEach(function(string) {
    if (index % 2 === 0) {
      result.push["string"];
    }
    index += 1;
  });
  return result;
}

console.log(selectEventItems(["a", "b", "c", "d", "e", "f"])

// Problem 1.1 · Ternary
//Even or Odd
//Write a function isEven(n) that returns true if n is even and false otherwise. Use the ternary operator.
//1-1-even-or-odd.js
// Examples
//isEven(4); // true
//isEven(7); // false
//isEven(0); // true
//isEven(-3); // false

const isEven = (n) => {
    return n % 2 === 0 ? true : false;
};
console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true
console.log(isEven(-3)); // false

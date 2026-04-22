// Problem 2.7 · Classic
// FizzBuzz
// Write fizzBuzz(n) that prints numbers from 1 to n, with two rules:
// • Multiples of 3 → print "Fizz".
// • Multiples of 5 → print "Buzz".
// • Multiples of both → print "FizzBuzz".
// 2-7-fizzbuzz.js
// fizzBuzz(15) prints:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8,
// Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
      console.log("Fizz");
    }

    else if (i % 5 === 0) {
      console.log("Buzz");
    }

    else {
      console.log(i);
    }

  }
}

fizzBuzz(15);

//OR

// const fizzBuzz = (n) => {
//     let result = "";    
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result += "FizzBuzz, ";
//         } else if (i % 3 === 0) {
//             result += "Fizz, ";
//         } else if (i % 5 === 0) {
//             result += "Buzz, ";
//         } else {
//             result += i + ", ";
//         }   
//     }
//     return result.slice(0, -2);  
// }   
// console.log(fizzBuzz(15));


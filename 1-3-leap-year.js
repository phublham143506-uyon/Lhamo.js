// Problem 1.3 · Logical operators
// Leap year
// Write isLeapYear(year) that returns true for leap years (years with an extra day).

// Check these rules in order:
// 1. If divisible by 400 → leap year
// 2. Else if divisible by 100 → not a leap year
// 3. Else if divisible by 4 → leap year
// 4. Else → not a leap year
// 1-3-leap-year.js
// // Examples
// isLeapYear(2024); // true (÷4, not ÷100)
// isLeapYear(2023); // false
// isLeapYear(1900); // false (÷100 but not ÷400)
// isLeapYear(2000); // true (÷400)

const isLeapYear = (year) => {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isLeapYear(2024)); // true (÷4, not ÷100)
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(1900)); // false (÷100 but not ÷400)
console.log(isLeapYear(2000)); // true (÷400)

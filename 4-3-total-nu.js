// Problem 4.3 · .reduce()
// Total Ngultrum
// Given an array of amounts (in Nu), use .reduce() to compute the total. Write it as sum(amounts).
// 4-3-total-nu.js
// // Examples
// sum([100, 200, 350, 75]); // 725
// sum([]); // 0

const sum = (amounts) => {
    return amounts.reduce((total, amount) => total + amount, 0);
}
console.log(sum([100, 200, 350, 75])); // 725
console.log(sum([])); // 0

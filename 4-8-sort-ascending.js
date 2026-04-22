// Problem 4.8 · .sort() with comparator
// Sort numbers ascending
// Write sortAscending(nums) that returns an array of numbers sorted from smallest to largest.
// Heads-up: the plain .sort() with no arguments sorts numbers as text — so [10, 2, 30] becomes [10, 2, 30], not [2, 10, 30]. You'll need a comparator.
// 4-8-sort-ascending.js
// // Examples
// sortAscending([10, 2, 5, 1, 30]); // [1, 2, 5, 10, 30]
// sortAscending([-3, -10, -1]); // [-10, -3, -1]
// sortAscending([7]); // [7]

const sortAscending = (nums) => {
    return nums.sort((a, b) => a - b);
}
console.log(sortAscending([10, 2, 5, 1, 30])); // [1, 2, 5, 10, 30]
console.log(sortAscending([-3, -10, -1])); // [-10, -3, -1]
console.log(sortAscending([7])); // [7] 

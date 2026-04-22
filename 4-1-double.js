// Problem 4.1 · .map()
// Double every number
// Given an array of numbers, return a new array where every value is doubled. Use .map().
// 4-1-double.js
// const nums = [1, 2, 3, 4, 5];

// // Expected: [2, 4, 6, 8, 10]

const nums = [1, 2, 3, 4, 5];
const double = (nums) => {
    return nums.map(num => num * 2);
}
console.log(double(nums)); // Expected: [2, 4, 6, 8, 10]

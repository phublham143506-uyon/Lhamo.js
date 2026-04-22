// Problem 2.2 · for loop on arrays
// Largest in array
// Write findLargest(nums) that returns the largest number in the array. Use a loop — do not use Math.max(). Assume the array has at least one number.
// 2-2-largest.js
// // Examples
// findLargest([3, 7, 2, 9, 1]); // 9
// findLargest([-5, -2, -10]); // -2
// findLargest([42]); // 42
// findLargest([100, 100, 100]); // 100

const findLargest = (nums) => {
    let largest = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}   

console.log(findLargest([3, 7, 2, 9, 1])); // 9 
console.log(findLargest([-5, -2, -10])); // -2
console.log(findLargest([42])); // 42
console.log(findLargest([100, 100, 100])); // 100
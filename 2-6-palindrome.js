// Problem 2.6 · Comparison with loops
// Palindrome checker
// Write isPalindrome(str) that returns true if the string reads the same forwards and backwards. Make it case-insensitive.
// 2-6-palindrome.js
// // Examples
// isPalindrome("madam"); // true
// isPalindrome("Racecar"); // true
// isPalindrome("hello"); // false
// isPalindrome("a"); // true  

const isPalindrome = (str) => {
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length / 2; i++) {
    if (lowerStr[i] !== lowerStr[lowerStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("a"));       // true
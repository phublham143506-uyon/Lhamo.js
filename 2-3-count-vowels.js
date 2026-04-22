// Problem 2.3 · for...of on strings
// Count vowels
// Write countVowels(str) that returns the number of vowels (a, e, i, o, u) in the string. Case-insensitive.
// 2-3-count-vowels.js
// // Examples
// countVowels("Gelephu"); // 3 (e, e, u)
// countVowels("BHUTAN"); // 2 (U, A)
// countVowels("xyz"); // 0
// countVowels(""); // 0

const countVowels = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};  

console.log(countVowels("Gelephu")); // 3 (e, e, u)
console.log(countVowels("BHUTAN")); // 2 (U, A)         
console.log(countVowels("xyz")); // 0
console.log(countVowels("")); // 0
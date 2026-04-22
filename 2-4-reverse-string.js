// Problem 2.4 · String building
// Reverse a string
// Write reverseString(str). Use a loop — do not use .reverse() or .split().reverse().join().
// 2-4-reverse-string.js
// // Examples
// reverseString("hello"); // "olleh"
// reverseString("Bhutan"); // "natuhB"
// reverseString("a"); // "a"
// reverseString(""); // ""

const reversestring = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }  
    return reversed;
}   
console.log(reversestring("hello")); // "olleh"
console.log(reversestring("Bhutan")); // "natuhB"
console.log(reversestring("a")); // "a"
console.log(reversestring("")); // ""   
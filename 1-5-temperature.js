// Problem 1.5 · Arrow functions
// Celsius ↔ Fahrenheit
// Write two arrow functions: cToF(c) and fToC(f).
// 1-5-temperature.js
// // Formulas
// // F = C × 9/5 + 32
// // C = (F − 32) × 5/9

// // Examples
// cToF(0); // 32
// cToF(100); // 212
// fToC(32); // 0
// fToC(212); // 100

const cToF = (c) => {
    return c * 9/5 + 32;
} 

const fToC = (f) => {
    return (f - 32) * 5/9;
}    
console.log(cToF(0)); // 32     
console.log(cToF(100)); // 212
console.log(fToC(32)); // 0
console.log(fToC(212)); // 100

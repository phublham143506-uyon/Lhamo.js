// Problem 1.4 · Template literals
// Greeting by time of day
// Write greet(name, hour) that returns a greeting based on the hour (0–23).
// Before 12 → morning. 12–17 → afternoon. 18 and later → evening.
// 1-4-greeting.js
// // Examples
// greet("Karma", 9); // "Good morning, Karma!"
// greet("Dorji", 14); // "Good afternoon, Dorji!"
// greet("Sonam", 20); // "Good evening, Sonam!"

const greet = (name,hour) =>{
    if (hour <= 12) {
        return `Good morning, ${name}!`;
    } else if (hour >= 12 && hour <= 17) {
        return `Good afternoon, ${name}!`;
    } else {
        return `Good evening, ${name}!`;
    }       
}
console.log(greet("Karma", 9)); // "Good morning, Karma!"
console.log(greet("Dorji", 14)); // "Good afternoon, Dorji!"
console.log(greet("Sonam", 20)); // "Good evening, Sonam!"


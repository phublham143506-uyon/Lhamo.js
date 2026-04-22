// Problem 3.5 · Destructuring + templates
// Describe a trainee
// Write describe(trainee) that uses object destructuring in the parameter to pull out name, age, city, and vertical, then returns a sentence.
// 3-5-describe.js
// // Example
// describe({
//   name: "Karma",
//   age: 25,
//   city: "Gelephu",
//   vertical: "Dev"
// });

// // → "Karma, 25, from Gelephu, assigned to Dev."

const describe = ({ name, age, city, vertical }) => {
    return `${name}, ${age}, from ${city}, assigned to ${vertical}.`;
}
console.log(describe({
    name: "Karma",
    age: 25,
    city: "Gelephu",
    vertical: "Dev"
})); // → "Karma, 25, from Gelephu, assigned to Dev."

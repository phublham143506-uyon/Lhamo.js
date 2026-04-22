// Problem 3.4 · .find()
// Find trainee by name
// Given an array of trainee objects, write findByName(trainees, name) that returns the matching object or undefined. Use .find().
// 3-4-find-by-name.js
// const trainees = [
//   { name: "Karma", vertical: "Dev" },
//   { name: "Dorji", vertical: "QA" },
//   { name: "Sonam", vertical: "BA" }
// ];

// // Examples
// findByName(trainees, "Dorji"); // { name: "Dorji", vertical: "QA" }
// findByName(trainees, "Pema"); // undefined

const trainees = [
    { name: "Karma", vertical: "Dev" },
    { name: "Dorji", vertical: "QA" },
    { name: "Sonam", vertical: "BA" }
];  

const findByName = (trainees, name) => {
    return trainees.find(trainee => trainee.name === name);
}

console.log(findByName(trainees, "Dorji")); // { name: "Dorji", vertical: "QA" }
console.log(findByName(trainees, "Pema")); // undefined 

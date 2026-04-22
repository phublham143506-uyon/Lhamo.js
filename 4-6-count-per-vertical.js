// Problem 4.6 · .filter() + .length
// Count trainees per vertical
// Given an array of trainees, count how many are in each vertical (Dev, QA, BA) and print a single line like "Dev: 2, QA: 2, BA: 1".
// 4-6-count-per-vertical.js
// const trainees = [
//   { name: "Karma", vertical: "Dev" },
//   { name: "Dorji", vertical: "QA" },
//   { name: "Sonam", vertical: "BA" },
//   { name: "Pema", vertical: "Dev" },
//   { name: "Tshering",vertical: "QA" }
// ];

// // Expected output:
// // "Dev: 2, QA: 2, BA: 1"

const trainees = [
    { name : "Karma", vertical: "Dev" },
    { name: "Dorji", vertical: "QA" },
    { name: "Sonam", vertical: "BA" },
    { name: "Pema", vertical: "Dev" },
    { name: "Tshering",vertical: "QA" }
];
const countPerVertical = (trainees) => {
    const devCount = trainees.filter(trainee => trainee.vertical === "Dev").length;
    const qaCount = trainees.filter(trainee => trainee.vertical === "QA").length;
    const baCount = trainees.filter(trainee => trainee.vertical === "BA").length;
    return `Dev: ${devCount}, QA: ${qaCount}, BA: ${baCount}`;      
}
console.log(countPerVertical(trainees)); // "Dev: 2, QA: 2, BA: 1"  

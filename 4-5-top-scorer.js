// Problem 4.5 · .sort()
// Top scorer
// Given an array of { name, score } objects, return the trainee with the highest score.
// 4-5-top-scorer.js
// const trainees = [
//   { name: "Karma", score: 82 },
//   { name: "Dorji", score: 91 },
//   { name: "Sonam", score: 74 },
//   { name: "Pema", score: 88 }
// ];

// // Expected: { name: "Dorji", score: 91 }

const trainees = [
    { name: "Karma", score: 82 },
    { name: "Dorji", score: 91 },
    { name: "Sonam", score: 74 },
    { name: "Pema", score: 88 } 
];
const topScorer = (trainees) => {
    return trainees.reduce((top, trainee) => {
        return trainee.score > top.score ? trainee : top;
    }); 
}
console.log(topScorer(trainees)); // Expected: { name: "Dorji", score: 91 } 
    
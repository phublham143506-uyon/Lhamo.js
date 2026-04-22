// Challenge · Combine everything
// Rank the top 3 trainees
// You have an array of 10 trainees, each with name, vertical, and a single score.

// 1. Sort the trainees by score descending.
// 2. Print the top 3 using template literals, formatted like:
// 🥇 Yangchen (Dev) — 92
// mini-challenge.js
// const trainees = [
//   { name: "Karma", vertical: "Dev", score: 83 },
//   { name: "Dorji", vertical: "Dev", score: 88 },
//   { name: "Sonam", vertical: "QA", score: 77 },
//   { name: "Pema", vertical: "BA", score: 90 },
//   { name: "Tshering", vertical: "QA", score: 75 },
//   { name: "Ugyen", vertical: "Dev", score: 86 },
//   { name: "Tandin", vertical: "BA", score: 82 },
//   { name: "Yangchen", vertical: "Dev", score: 92 },
//   { name: "Kinley", vertical: "QA", score: 72 },
//   { name: "Choden", vertical: "BA", score: 84 }
// ];

// Expected output:
// 🥇 Yangchen (Dev) — 92
// 🥈 Pema (BA) — 90
// 🥉 Dorji (Dev) — 88

const trainees = [
    { name: "Karma", vertical: "Dev", score: 83 },
    { name: "Dorji", vertical: "Dev", score: 88 },
    { name: "Sonam", vertical: "QA", score: 77 },
    { name: "Pema", vertical: "BA", score: 90 },
    { name: "Tshering", vertical: "QA", score: 75 },
    { name: "Ugyen", vertical: "Dev", score: 86 },
    { name: "Tandin", vertical: "BA", score: 82 },
    { name: "Yangchen", vertical: "Dev", score: 92 },
    { name: "Kinley", vertical: "QA", score: 72 },
    { name: "Choden", vertical: "BA", score: 84 }
];
// Step 1: Sort the trainees by score descending
trainees.sort((a, b) => b.score - a.score)
// Step 2: Print the top 3 using template literals
for (let i = 0; i < 3; i++) {
    const trainee = trainees[i];
    let medal;
    switch (i) {
        case 0:
            medal = "🥇";
            break;
        case 1:
            medal = "🥈";
            break;
        case 2:
            medal = "🥉";
            break;
    }
    console.log(`${medal} ${trainee.name} (${trainee.vertical}) — ${trainee.score}`);
}




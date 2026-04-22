// Problem 4.2 · .filter()
// Filter adults (age ≥ 25)
// From an array of trainee objects, return only those aged 25 or older.
// 4-2-filter-adults.js
// const trainees = [
//   { name: "Karma", age: 24 },
//   { name: "Dorji", age: 28 },
//   { name: "Sonam", age: 22 },
//   { name: "Pema", age: 31 }
// ];

// // Expected: [{Dorji, 28}, {Pema, 31}]

const trainees = [
    { name: "Karma", age: 24 },
    { name: "Dorji", age: 28 },
    { name: "Sonam", age: 22 },
    { name: "Pema", age: 31 }
];
const filterAdults = (trainees) => {
    return trainees.filter(trainee => trainee.age >= 25);
}   
console.log(filterAdults(trainees)); // Expected: [{ name: "Dorji", age: 28 }, { name: "Pema", age: 31 }]
    
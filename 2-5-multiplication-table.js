// Problem 2.5 · for loop + console
// Multiplication table
// Write printTable(n) that prints the n× table from 1 to 10 using console.log.
// 2-5-multiplication-table.js
// // printTable(7) should print:
// // 1 × 7 = 7
// // 2 × 7 = 14
// // 3 × 7 = 21
// // ...
// // 10 × 7 = 70

const printTable = (n) => {
    let table = "";
    for (let i = 1; i <=10; i++) {
        table += `${i} * ${n} = ${i * n} \n`;
    }

    console.log(table);
}
printTable(7); // should print the multiplication table for 7}
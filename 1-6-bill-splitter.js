// Problem 1.6 · Functions + math
// Bill splitter
// You're out for dinner with friends. Write splitBill(total, people, tipPercent) that returns the amount each person should pay, including the tip. The tip is a percentage of the bill.
// 1-6-bill-splitter.js
// // Examples
// splitBill(1000, 4, 10); // 275 (1000 + 10% = 1100, ÷4)
// splitBill(500, 2, 10); // 275
// splitBill(1200, 3, 15); // 460
// splitBill(600, 5, 0); // 120 (no tip)

const splitBill = (total, people, tipPercent) => {
    const tipAmount = total * (tipPercent / 100);
    const totalWithTip = total + tipAmount;
    return totalWithTip / people;
}  
console.log(splitBill(1000, 4, 10)); // 275 (1000 + 10% = 1100, ÷4)
console.log(splitBill(500, 2, 10)); // 275
console.log(splitBill(1200, 3, 15)); // 460
console.log(splitBill(600, 5, 0)); // 120 (no tip)

// Problem 2.1 · for loop
// Sum from 1 to N
// Write sumTo(n) that returns 1 + 2 + 3 + ... + n using a for loop. Assume n ≥ 1.
// 2-1-sum-to-n.js
// // Examples
// sumTo(5); // 15 (1+2+3+4+5)
// sumTo(10); // 55
// sumTo(100); // 5050

const sumTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        //sum += i;
        sum = sum + i;
    }
    return sum;
};

console.log(sumTo(5)); // 15 (1+2+3+4+5)
console.log(sumTo(10)); // 55
console.log(sumTo(100)); // 5050

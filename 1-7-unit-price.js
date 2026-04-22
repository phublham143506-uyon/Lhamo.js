// Problem 1.7 · Functions + comparison
// Unit-price comparator
// You're at the shop comparing two pack sizes. Write cheaperPerUnit(priceA, qtyA, priceB, qtyB) that returns "A", "B", or "same".
// 1-7-unit-price.js
// // Examples
// cheaperPerUnit(100, 2, 120, 3); // "B" (50 vs 40)
// cheaperPerUnit(60, 3, 100, 4); // "A" (20 vs 25)
// cheaperPerUnit(50, 1, 100, 2); // "same"

const cheaperPerUnit = (priceA, qtyA, priceB, qtyB) => {
    const unitPriceA = priceA / qtyA;
    const unitPriceB = priceB / qtyB;

    if (unitPriceA < unitPriceB) {
        return "A";
    } else if (unitPriceB < unitPriceA) {
        return "B";
    } else {
        return "same";
    }   
};
console.log(cheaperPerUnit(100, 2, 120, 3)); // "B" (50 vs 40)
console.log(cheaperPerUnit(60, 3, 100, 4)); // "A" (20 vs 25)
console.log(cheaperPerUnit(50, 1, 100, 2)); // "same" 

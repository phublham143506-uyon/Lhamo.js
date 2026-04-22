// Problem 1.8 · Control flow + math
// BMI classifier
// Write classifyBMI(weightKg, heightM) that computes Body Mass Index (weight / height²) and returns a category.
// 1-8-bmi.js
// // Categories
// // below 18.5 → "Underweight"
// // 18.5 – 24.9 → "Normal"
// // 25.0 – 29.9 → "Overweight"
// // 30.0 and up → "Obese"

// // Examples
// classifyBMI(55, 1.70); // "Normal"
// classifyBMI(95, 1.75); // "Obese"

const classifyBMI = (weightKg, heightM) => {
  const heightM2 = heightM * heightM;
  const BMI= (weightKg / heightM2 );
  
  if (BMI <= 18.5){
    return "Underweight";
  }
  else if (BMI >= 18.5 && BMI <= 24.9){
    return "Normal";
  }
  else if (BMI <= 29.9 && BMI >= 25.0){
    return "Overweight";
  }
  else {
    return "Obese";
  }
}
console.log(classifyBMI(55, 1.70)); // "Normal"
console.log(classifyBMI(95, 1.75)); // "Obese"


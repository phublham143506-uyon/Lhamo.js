//Problem 1.2 · if / else if
//Grade classifier
//Write getGrade(score) that returns a letter grade based on the score. Valid scores are 0–100.
//1-2-grade.js
// Rules
// 90 and above → "A"
// 75–89 → "B"
// 60–74 → "C"
// below 60 → "F"

// Examples
//getGrade(95); // "A"
//getGrade(78); // "B"
//getGrade(45); // "F"

const getGrade = (score) => {
  if (score >= 90) {
    return "A";
  } 
  else if (score >= 75) {
    return "B";
  }
  else if (score >= 74) {
    return "C";
  }
  else {
    return "F";
  }
}
console.log(getGrade(95)); // "A"
console.log(getGrade(78)); // "B"
console.log(getGrade(45)); // "F"

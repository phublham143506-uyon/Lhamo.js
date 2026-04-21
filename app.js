//Exercise 1
const name="Phub Lham";
let age=22;
age=23;// Reassign the age variable
console.log(name);
console.log(age);

//arrow function
const greet = (name) => `Hello, ${name}!`;
greet("Phub Lham");
console.log(greet("Phub Lham"));

//OR
//const greet = (name) => {
 //return `Hello, ${name}!`;
 //};
//console.log(greet("Phub Lham"));

//isAdult
const isAdult = (age) => {
if (age >= 20){
 return true;
 }
else {
return false 
 }
}
console.log(isAdult(24)); //true

//||
//function isAdult(age){
//return age>= 18;
 //}
//console.log(isAdult(24)); //true

//Exercise 2
// for loop 1
for (let i=1; i<=10; i++){
 console.log(i);
}

//2
for (let i=1; i<=20; i++){
if (i % 2 === 0){
 console.log(`${i} is even`);
};
}

//getGrade(score)
function getScore(score){
    if (score >= 90){
     return "Excellent";     
    } else if (score >= 80){
        return "Good";
     } else if (score >= 70){ 
        return "Keep going";      
    }
}
console.log(getScore(95));
console.log(getScore(85));
console.log(getScore(55));

// OR

//const getGrade = (score) => {
 // if (score >= 90) return "Excellent";
  //if (score >= 70) return "Good";
  //return "Keep going";
//};
//console.log(getGrade(95));
//console.log(getGrade(85));
//console.log(getGrade(55));

//5
let number = 1;
while (number <= 1000) {
  console.log(number);
  number = number * 2;
}




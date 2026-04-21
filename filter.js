const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Sonam", vertical: "QA" },
  { name: "Tshering", vertical: "Dev" },
  { name: "Pema", vertical: "BA" }
];
const devTrainees = trainees.filter(trainee => trainee.vertical !== "QA" && trainee.vertical !== "BA"); 
console.log(devTrainees);
const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Sonam", vertical: "QA" },
  { name: "Tshering", vertical: "Dev" },
  { name: "Pema", vertical: "BA" }
];
const result = trainees
  .filter(t => t.vertical === "Dev")
  .map(t => t.name)
  .sort();

console.log(result);

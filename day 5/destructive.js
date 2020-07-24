const student = {
    name: "Helsinki",
    age: 24,
    projects: {
           diceGame: "Two player dice game using Javascript"
    }
}
  const {name, age, projects:{diceGame}} = student;
  console.log(`Student name is ${name} and age is ${age} and the project is ${diceGame}`);

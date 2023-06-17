const user = { username: "Victor", age: 29, country: "VE"};
const { age, ...pruebas } = user;
console.log(age);
console.log(pruebas);
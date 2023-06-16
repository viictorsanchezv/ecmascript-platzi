//array destructurado
let fruits = ['apple','banana'];
let [a,b] = fruits;
console.log(a);


//object destructurado

let user = {username: "Oscar", age: 28};
let {username,age} = user;
console.log(username);

//spread operator
let person = {name:"Victor", age: 29};
let country = "VE";
let data = {id: 1, ...person, country};
console.log(data);


//prueba
function solution(json1, json2) {
    json1 = json1 || {name: "Victor", food: "Pasta"};
    json2 = json2 || {age: 29, color: "Verde"};

    let output  = { ...json1, ...json2 };
    console.log(output);
}
  
solution({
    name: "Bigotes",
    food: "Pollito"
})

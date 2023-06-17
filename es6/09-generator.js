//con el asterisco hacemos referencia a que es una funcion generator
function* itereate(array){
    for(let value of array){
        yield value;
    }
}

const it = itereate(["Juan", "Oscar", "Angela", "Ana", "Victor"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
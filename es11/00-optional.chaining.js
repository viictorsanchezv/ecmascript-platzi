//OJO NO ES SOPORTADO POR NODEJS 13 SOLO DE LA 14 HACIA ARRIBA
const users = {
    victor: {
        country: "VE",
    },
    alfonso: {
        country: "CO"
    }
}

console.log(users.sanchez?.country);

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // Expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  // Expected output: undefined
  
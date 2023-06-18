const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa3 = Promise.resolve("Promesa 3")
const promesa2 = Promise.reject("Ups promesa 2 falló")



Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promise 3
    .catch(error => console.log(error))
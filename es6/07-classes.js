//declarando
class User {
    //metodos
    constructor(name){
        this.name = name;
    }
    saludo(){
        return "hola";
    }
    speak(){
        return `Hola soy ${this.name}`;
    }

}
//instacia
const victor = new User("Victor");
console.log(victor.speak());
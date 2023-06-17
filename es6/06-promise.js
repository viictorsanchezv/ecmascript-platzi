const datos = [
    {
        id: 1,
        title: "Iron Man",
        year: 2009
    },
    {
        id: 2,
        title: "Spiderman: Homecoming",
        year: 2017
    }
];
const getDatos = () =>{
    return new Promise((resolve,reject) =>{
        if(datos.length === 0){
            reject( new Error("no hay datos"));
        }
        setTimeout( () =>{
            resolve(datos);
        }, 1500)
    });
}

//manera con await pero debe estar adentro de una funcion async para usar el await 
async function fetchingData (){
    try {
        const respuesta = await getDatos();
        console.log(respuesta);
    } catch (error) {
        console.log(error.message);
    }
    
}

fetchingData();


//manera con asincronia 
getDatos().then((datos) => console.log(datos));
// PROMESAS
/*
    Sintaxis

    1. Declaracion
    const miPromesa = new Promisse((resolve, reject) => {.....});

*/


const miPromesa = new Promise((resolve, reject) => {
    const exito = true;

    if (exito){
        console.log("Esperando....");
        setTimeout(() => resolve("Promesa Cumplida"), 2000);
    } else{
        reject("Promesa Rechazada")
    }
});

miPromesa
    .then(respuesta => {
        console.log("No hubo errores en la promesa");
        console.log(respuesta);
    }).catch(error=>{
        console.log("Error en la promesa");
        console.log(error);
    });

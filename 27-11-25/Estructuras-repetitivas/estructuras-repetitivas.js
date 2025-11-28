// FOR

/*
    Sintaxis
    for(inicializacion; parada; incremento){
        expresiones;
    }
*/

let num = 7;

for(let i=1; i<10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}


// FOR... OF
/*
    Sintaxis
    Se usa para recorrer Array, vectores o string
    for (let elemento of array){
        expresiones;
    }
*/

let frase = "yo solo se que nada se";

let frase_min = frase.toLowerCase();

let frase_result = ""
for(let letra of frase_min){
    switch(letra){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            break;
        default:
            frase_result += letra;
    }
}

console.log(frase_result);

// FOR .... IN

/*
    Sintaxis
    Se usa para recorrer las propiedades de un objeto

    for (let clase in onjeto){
        expresiones;
    }
*/

// WHILE

/*
    Sintaxis
    while(condicion){
        expresiones;
    }
*/

let contrasena = "shirley123";
let secreto = "sintaxis";
let i = -1;
while (contrasena !== "sintaxis"){
    console.log("Error. Contraseña Invalida. Vuelva a intentarlo");
    contrasena += secreto[++i];
    console.log(contrasena)
}

console.log("Bienvenido a la sala de los famosos")


//DO WHILE
/*
    do{
        expresiones
    }while(condicion)
*/

i = -1;
pal = "";
do{
    console.log("Error. Contraseña invalida, Vuelva a intentarlo");
    pal += secreto.charAt(++i);
    contrasena = pal;

} while(contrasena !== "sintaxis");


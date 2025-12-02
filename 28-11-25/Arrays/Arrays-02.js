// Arrays

const paises = new Array(5);

paises[0] = "Colombia";
paises[1] = "Venezuela";
paises[2] = "Ecuador";

// Recorrido por Indice

for(let i=0; i < paises.length; i++){
    console.log(paises[i]);
}

// Declaracion Iterada 
const frutas = []; // array vacio
const mixtos = ["papas", "patacones", "chicharrones", "arepas"];

// Declaracion con Array y elementos especificos.
const frutasExoticas = new Array("Kiwi", "Chontaduro", "Granada");

//Declaracion con Array.from()
const letras = Array.from("Hola");// ["H", "o", "l", "a"]

//Declaracion con Array.of
const numeros = Array.of(7) // [7]
const numeros2 = Array.of(5,10,20) // [5, 10, 20]

// Recorrido de los Arrays por los elementos
for(let fe of frutasExoticas){
    console.log(fe);
}

// Metodo Push : Agrega al final
numeros.push(13);
console.log(numeros);

// Metodo Unshift : metodo agrega al inicio
numeros.unshift(80);
console.log(numeros);

// Metodo Pop: metodo elimina el ultimo elemento
numeros.pop();
console.log(numeros);

// Metodo Shift : elimina el primer elemento
numeros.shift();
console.log(numeros);

// Metodos Funcionales

// Metodo map: Recorre el Array y crea uno nuevo aplicandole una funcion a cada elemento
console.log(frutasExoticas.map((frutas) => frutas.toUpperCase()));

// Metodo filter : Crea un nuevo array con todos los elementosque cumplen la condicion de una funcion
console.log(
    frutasExoticas.filter(f=> f.endsWith("a"))
);

console.log(
    frutasExoticas.filter(f=> {
        let cantVocales = 0;
        for(let letra of f){
            switch(letra){
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    ++cantVocales;
                    break;
            }
        }
        return cantVocales > 3;
    })
);

// Foreach : Metodo que me permite recorrer el vector
frutasExoticas.forEach(f=> console.log(f.toUpperCase()));

// Some : Verifica si al menos un elemento cumple con la condicion
console.log(
    frutasExoticas.some(f=> f.length > 5)
);

// Every : Verifica si todos cumplen con una la condicion
console.log(
    frutasExoticas.every(f=> f.length > 5)
);

// Find :  busca y devuelve el primer elemento que cumpla con la condicion
console.log(
    frutasExoticas.find(f=> f.length > 5)
);
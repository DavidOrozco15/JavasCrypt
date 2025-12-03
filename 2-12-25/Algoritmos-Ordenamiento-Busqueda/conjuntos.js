// Conjuntos son estructuras de datos
// Sin elementos repetidos y en teoria no ordenados

const frutas = new Set(["mango", "banano", "lulo", "guayaba", "mora", "banano"]);

frutas.add("anon").add("aguacate").add("tomate");

console.log(typeof frutas);
console.log(frutas);

console.log(frutas.has("aguacate"));

// borrar elemento

console.log(frutas.delete("aguacate"));

// cuantos elementos tengo

console.log(frutas.size);

for(let fruta of frutas.values()) console.log(fruta);


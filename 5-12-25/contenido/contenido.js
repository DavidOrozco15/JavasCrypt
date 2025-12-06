// 1. Textcontent 
const miDiv = document.getElementById("miElemento");
miDiv.textContent = "<b>Contenido Modificado</b>";

// 2. innerHTML
miDiv.innerHTML = "<i>Contenido Modificado</i>";

// 3. nodeName
// El nombre del nodo es el nombre de la etiqueta html
const eleMensaje = document.querySelector(".message");
console.log("Nombre del nodo",eleMensaje.nodeName);

// 4. outerText
// Contenido de la etiqueta
console.log("Contenido del nodo", eleMensaje.outerText);
console.log(
    "Contenido del Container",
    document.querySelector(".container").outerText
);

// 5. outerHTML
console.log("Contenido del nodo", eleMensaje.outerHTML);
console.log(
    "Contenido del Container",
    document.querySelector(".container").outerHTML
);

// 6. setHTML
const htmlcode ="<b>Mi nombre es Campus Lands</b>"
elemMensaje.setHTML(htmlcode);
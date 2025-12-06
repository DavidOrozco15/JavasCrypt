// 1. appendChild()
// Inserta un elemento hijo

const miDiv = document.querySelector(".parent");
const parrafo = document.createElement("p");
parrafo.textContent = "hoy es viernes :D";
miDiv.appendChild(parrafo);

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Pidan Tutorias =)";
miDiv.insertBefore(parrafo2, miDiv.firstChild);

// 2. removeChild()

const parrHola = document.querySelector(".parent > p");

// 3. replaceChild(new, old)
const parrMensaje = document.querySelector(".message");
const parrNuevo = document.createElement("p");
parrNuevo.innerHTML = "<p><b><em>Mi nombre es Maximus tercero</em></b></p>"
miDiv.replaceChild(parrNuevo, parrMensaje);

// 4. insertBefore(mew, node);
// Inserta un elemento nuevo antes de otro elemento.
// el nuevo elemento se agrega a la lista de hijos del elemento anterior
const miBoton = document.createElement("button");
miBoton.textContent = "Conquistar Javascript";
miDiv.insertBefore(miBoton, null);

// 5. before() after() prepend() append()

const container = document.querySelector(".container");
const lineaNueva = document.createElement("hr");
const lineaNueva2 = document.createElement("hr");
container.before(lineaNueva);
container.after(lineaNueva2);

// 6. replaceChildren()
// Remplaza todos los hijos de un elemento por otro
function reemplazarHijos(){
    container.replaceChildren(parrNuevo);
}

// 7. replaceWith()
// reemplaza todo un elemento por otro.
function reemplazarCon(){
    const pVelitas = document.createElement("p");
    pVelitas.textContent = "Feliz Noche de Velitas"
    container.replaceWith(pVelitas);
}
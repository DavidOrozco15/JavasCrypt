const botonAumentar = document.querySelector(".btn-info");
const botonDisminuir = document.querySelector(".btn-danger");

const cont = document.getElementById("contador");
let contador = 0;

function actualizarContador(){
    cont.textContent = contador;
}

function aumentar(){
    contador += 1;
    actualizarContador();
}

function disminuir(){
    contador -= 1;
    actualizarContador();
}

botonAumentar.addEventListener("click", aumentar);
botonDisminuir.addEventListener("click", disminuir);
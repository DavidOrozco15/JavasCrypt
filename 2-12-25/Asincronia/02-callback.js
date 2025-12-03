// Callback es una funcion que recibe como parametro o devuelve otra funcion
// Ejemplo
// Calculadora dinamica


function calcular(precio, cantidad, funCallback){
    console.log(`calculando ${cantidad} productos de $${precio.toLocaleString(`es-CO`)}`);
    funCallback(precio, cantidad);
}

const conIVA = (precio, cant) =>{
    const total = precio * cant * 1.19;
    console.log(`Total con IVA: $${total.toLocaleString(`es-CO`)}`);
}

const conDescuento = (precio, cant) =>{
    const total =  precio * cant * 0.85;
    console.log(`Total con 15% de descuento: $${total.toLocaleString(`es-CO`)}`);
}

calcular(45000, 3, conIVA);
calcular(45000, 3, conDescuento)
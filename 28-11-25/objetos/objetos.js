/*
const persona = {
    nombre : "Andres",
    edad : 23,
    altura : 1.68,
    peso : 60,
    hobbie : () => console.log("la ,la, la"),
    direccion : [{
        calle : 56,
        numero: "25-32",
        barrio: "Zona franca"
    },
    {
        calle : 46,
        numero: "33A-25",
        barrio: "Cuadra Picha"
    }]
};

console.log(typeof(persona));
console.log(persona.altura);
console.log(persona.direccion[1].barrio);
*/

const figura = {
    ancho: 10,
    alto: 20,
    tipo: "circulo",
    area : (tipoFigura)=>{
        switch(tipoFigura.toLowerCase()){
            case "triangulo":
                return this.ancho * this.alto / 2;
            case "cuadrado":
                return this.ancho * this.alto;
            default:
                return NaN;
        }
    }
}

console.log("Area de la Figura", figura.area("cuadrado"))
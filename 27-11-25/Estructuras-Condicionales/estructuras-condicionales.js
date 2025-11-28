// ESTRUCTURAS CONDICIONALES

// IF
// Sintaxis
/*
    if(condicion){
        instrucicones;
    }
    
    Ejemplo:
    Hacer un programa que imprima si una persona es mayor o menor de edad
*/

let edad = 17;
if(edad >= 18){
    console.log("Es Mayor de Edad");
}

// IF - ELSE

/*
    Sintaxis
    if(condicion){
        expresion-verdadero;
    } else{
        expresion-falsa;
    }
*/

edad = 22;
if(edad >= 18){
    console.log("Es Mayor de Edad");
}else{
    console.log("Es menor de edad")
}

// IF - ELSE IF - ELSE IF....... - ELSE

/*
    sintaxis
    Sintaxis
    if(condicio1){
        expresion1;
    } else if(condicion2){
        expresion2;
    }
    .......
    else{
        expresion-else;
    }

    Ejemplo: Imprimir el mensaje correspondiente (niño, adolescente, adulto, adulto mayor) de acuerdo con la edad ingresada.
*/

edad = 38;
if(edad > 59){
    console.log("Es un adulto mayor");
} else if (edad >17){
    console.log("Es un Adulto");
} else if(edad > 14){
    console.log("Es un Adolescente");
} else{
    console.log("Es un niño");
}

// OPERADOR TERNARIO ?
/*
    Sintaxis
    (condicion) ? expresion-verdadera : expresion-falsa;
*/

(edad>59) ? console.log("Es un adulto mayor"):
    (edad>17) ? console.log("Es un adulto"):
        (edad>14) ? console.log("Es un Adolescente"):
            console.log("Es un niño");


// SWITCH - EL MATCH DE PYTHON
// Sintaxis
/*
    switch(variable){
        case valor1:
            expresion1;
            break;
        case valor2:
            expresion2;
            break;
        case valorN:
            expresion1;
            break;
        default:
            expresion-deafult:
    }
*/

let valDia = 2;
switch (valDia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miercoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    default :
        console.log("Sabado");
        break;
}
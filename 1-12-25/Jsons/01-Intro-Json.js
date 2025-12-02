const camper = {
    nombre: "Diomedez",
    apellido: "Diaz",
    edad: 60,
    ocupacion: "Cantante"
};

const mijson = JSON.stringify(camper);

console.log(typeof mijson);
console.log(mijson);

const strJson  = '{"nombre": "Luis", "apellido": "Gonzales", "edad": 34, "ocupacion": "Auxiliar"}';

const camper2 = JSON.parse(strJson);
console.log(typeof camper2);
console.log(camper2);

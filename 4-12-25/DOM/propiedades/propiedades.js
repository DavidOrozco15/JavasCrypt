// 1.Classlist.lenght

const miDiv = document.getElementById("miElemento")
console.log("Cantidad de Clases del div: ", miDiv.classList.length);

// 2. classlist y classlist.value
console.log("Clases del div: ", miDiv.classList.value);

//3. classlist.item(n)
console.log("Segunda clase del div: ", miDiv.classList.item(1));

// 4. classlist.contains - verifica si una clase esta en una lista de clases
console.log("Esta la clase 'clase 3' en el Div?: ", miDiv.classList.contains("clase 3"));

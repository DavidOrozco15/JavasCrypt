// 1. getElementById
const miElemento = document.getElementById('miElemento');
miElemento.innerHTML = 'Nuevo contenido para el elemento';

// 2. getElementsClassName()
const miClases = document.getElementsByClassName("miClase");

for(let i=0; i < miClases.length; i++){
    miClases[i].textContent = `Nuevo Contenido para el div ${i+1}`
}

// 3. getElementByTagName()

let midsDivs = document.getElementsByTagName("div")
for(let div of midsDivs){
    if(div.textContent.includes("Nuevo")){
        let texto = div.innerHTML;
        texto = texto.replace("div", "<b>div</b>");
        div.innerHTML = texto;
    }   
}

// 4. querySelector() - Recupera el primer elemento con la clase que se esta buscando

const primerDiv = document.querySelector(".miClase");
primerDiv.innerHTML = `<em> ${primerDiv.innerHTML}</em>`;

// 5. querySelectorAll() - recupera todos los elementos HTML que coincidan con un selector CSS especificado

midsDivs = document.querySelectorAll(".miClase")
midsDivs.forEach(element => {
    element.style.color = "tomato";
    element.style.fontSize = "1,2em";
});



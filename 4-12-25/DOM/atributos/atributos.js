// 1. getAtribute()

const enlace = document.getElementById("miEnlace");

const url = enlace.getAttribute("href");
console.log(url);

// 2. setAtribute()

enlace.setAttribute("href", "https://camper.campuslands.com/login") // Cambia el atributo

// 3. getAtributeNames() - Recupera una lista de todos los nombres de atributos de un elemento

console.log("Nombres de Atributos", enlace.getAttributeNames());

// 4. toggleAtribute() - Agrega o elimina un atributo
// sintaxis: elemento.toggleAtribute("atributo", force); force:true agrega | force:false elimina | force:none alterna

function alternarEnlace(){
    enlace.toggleAttribute("hidden");
    if(enlace.hasAttribute("hidden")){
        document.getElementsByTagName("button")[0].textContent = "Mostrar";
    } else{
        document.getElementsByTagName("button")[0].textContent = "Ocultar";
    }
}

// 5. removeAtribute()
enlace.removeAttribute("target")
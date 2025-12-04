const inputDepartamento = document.getElementById('departamento');
const estado = document.getElementById('estado');
const poblacionTotalEl = document.getElementById('poblacionTotal');
const infoDepartamentoEl = document.getElementById('infoDepartamento');
const seccionMunicipios = document.getElementById('listaMunicipios');
const contenedorMunicipios = document.getElementById('municipios');

async function consultarDepartamento(){
    // Limpiar
    estado.textContent = '';
    poblacionTotalEl.style.display = 'none';
    infoDepartamentoEl.style.display = 'none';
    seccionMunicipios.style.display = 'none';
    contenedorMunicipios.innerHTML = '';

    const nombre = inputDepartamento.value.toLowerCase().trim();
    if(!nombre){
        estado.textContent = 'Escribe el nombre del departamento.';
        estado.className = 'error';
        return;
    }

    estado.textContent = 'Buscando departamento...';

    try{
        const urlDept = `https://api-colombia.com/api/v1/Department/name/${encodeURIComponent(nombre)}`;
        const respuesta = await fetch(urlDept);
        if(!respuesta.ok) throw new Error('Departamento no encontrado');
        const datos = await respuesta.json();

        // La API suele devolver un array con el departamento en la posición 0
        const departamento = Array.isArray(datos) ? datos[0] : (datos.data ? (Array.isArray(datos.data) ? datos.data[0] : datos.data) : datos);

        const nombreDept = departamento.name || departamento.nombre || nombre;
        const poblacionDept = departamento.population || departamento.poblacion || departamento.population_total || 'N/D';
        const superficie = departamento.surface || departamento.superficie || departamento.area || 'N/D';
        const idDept = departamento.id || departamento._id || departamento.code;

        // Mostrar información básica
        infoDepartamentoEl.style.display = 'block';
        infoDepartamentoEl.innerHTML = `
            <div class="negrita">${capitalizar(nombreDept)}</div>
            <div>Superficie: ${superficie}</div>
            <div>Población (API): ${poblacionDept}</div>
        `;

        // Mostrar población total (usar dato del departamento si existe)
        poblacionTotalEl.style.display = 'block';
        poblacionTotalEl.innerHTML = `<div class="negrita">Población total: ${poblacionDept}</div>`;

        // Obtener municipios filtrando por el id del departamento
        if(idDept){
            const urlMunicipios = `https://api-colombia.com/api/v1/City?departmentId=${idDept}`;
            
            const r2 = await fetch(urlMunicipios);
            
            if(r2.ok){
                const municipios = await r2.json();
                
                // Filtrar solo municipios del departamento consultado
                const municipiosFiltrados = Array.isArray(municipios) ? municipios.filter(m => Number(m.departmentId) === Number(idDept)) : [];
                
                if(municipiosFiltrados.length){
                    seccionMunicipios.style.display = 'block';
                    contenedorMunicipios.innerHTML = '';
                    municipiosFiltrados.forEach(m =>{
                        const nombreM = m.name || m.nombre || 'Sin nombre';
                        const poblM = m.population || m.poblacion || m.population_total || 'N/D';
                        const div = document.createElement('div');
                        div.className = 'municipio';
                        div.innerHTML = `<div>${nombreM}</div><div>${poblM}</div>`;
                        contenedorMunicipios.appendChild(div);
                    });
                    estado.textContent = 'Resultado obtenido.';
                    estado.className = '';
                } else {
                    estado.textContent = 'No se encontraron municipios.';
                    estado.className = 'error';
                }
            } else {
                estado.textContent = 'Error al obtener municipios.';
                estado.className = 'error';
            }
        } else {
            estado.textContent = 'El departamento no contiene id.';
            estado.className = 'error';
        }

    } catch(err){
        estado.textContent = err.message + ' — verifica el nombre o la conexión.';
        estado.className = 'error';
    }
}

function capitalizar(text){
    if(!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
}

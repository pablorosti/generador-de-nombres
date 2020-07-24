document.getElementById('generar-nombre').addEventListener('submit', cargarNombres);

//llamado a ajax e imprimir resultados
function cargarNombres(e){
    e.preventDefault();
    
    //leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    console.log(origen.value);
    
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;
    
    let url = '';
    url += 'https://uinames.com/api/?';

    //si hay origen agregar a la url
    if(origenSeleccionado != ''){
        url += `region=${origenSeleccionado}&`;
    }
    //si hay genero agregar a la url
    if(generoSeleccionado != ''){
        url += `gender=${generoSeleccionado}&`;
    }
    //si hay una cantidad agregarlo a la url
    if(cantidad != ''){
        url += `amount=${cantidad}&`;
    }

    //CONECTANDO CON FETCH API
    fetch(url).then(function(res){
        return res.json();
    }).then(function(data){
        let html = '<h2>Nombres generados</h2>';
        html += `<ul class="lista">`;
        data.forEach(function(datos){
            html += `<li>${datos.name}</li>`;
        });
        html += `</ul>`;
        document.getElementById('resultado').innerHTML = html;
    })
}
mostrarDatos();
llenarProgramas();

function mostrarDatos(){
	var listaMisiones = getMisiones();
	var nTamanno = listaMisiones.length;
	var tbody = document.querySelector('#tblMisiones tbody');
	tbody.innerHTML = '';
	for(var i = 0; i < nTamanno; i++){
		var fila = document.createElement('tr');
		var celdaCodigo = document.createElement('td');
		var celdaNombre = document.createElement('td');
		var celdaPrograma = document.createElement('td');
		var celdaFecha = document.createElement('td');
		var celdaDuracion = document.createElement('td');
		var celdaDatos = document.createElement('td');
		var celdaEstado = document.createElement('td');
		var celdaNave = document.createElement('td');
		var celdaCuerpo = document.createElement('td');
		var celdaTripulate1 = document.createElement('td');
		var celdaTripulate2 = document.createElement('td');
		var celdaTripulate3 = document.createElement('td');
		var celdaTripulate4 = document.createElement('td');


		celdaCodigo.innerHTML = listaMisiones[i][0];
		celdaNombre.innerHTML = listaMisiones[i][1];
		celdaPrograma.innerHTML = listaMisiones[i][2];
		celdaFecha.innerHTML = listaMisiones[i][3];
		celdaDuracion.innerHTML = listaMisiones[i][4];
		celdaDatos.innerHTML = listaMisiones[i][5];
		celdaEstado.innerHTML = listaMisiones[i][6];
		celdaNave.innerHTML = listaMisiones[i][7];
		celdaCuerpo.innerHTML = listaMisiones[i][8];
		celdaTripulate1.innerHTML = listaMisiones[i][9];
		celdaTripulate2.innerHTML = listaMisiones[i][10];
		celdaTripulate3.innerHTML = listaMisiones[i][11];
		celdaTripulate4.innerHTML = listaMisiones[i][12];

		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaNombre);
		fila.appendChild(celdaPrograma);
		fila.appendChild(celdaFecha);
		fila.appendChild(celdaDuracion);
		fila.appendChild(celdaDatos);
		fila.appendChild(celdaEstado);
		fila.appendChild(celdaNave);
		fila.appendChild(celdaCuerpo);
		fila.appendChild(celdaTripulate1);
		fila.appendChild(celdaTripulate2);
		fila.appendChild(celdaTripulate3);
		fila.appendChild(celdaTripulate4);
		tbody.appendChild(fila);
	}
}

function filtrarDatos(){
	var listaMisiones = getMisiones();
	var nTamanno = listaMisiones.length;
	var tbody = document.querySelector('#tblMisiones tbody');
 	var sProgramaFiltro = document.querySelector('#sltFiltroProgramas').value;

 tbody.innerHTML = '';

 if(sProgramaFiltro == ''){

 mostrarDatos();

  }else{
  	for(var i = 0; i<nTamanno; i++){
  		if (sProgramaFiltro == listaMisiones[i][2]) {
  			mostrarfiltro();
  		}
  	}


  }

}

function llenarProgramas(){
  var listaProgramas = getProgramas();
  var nTamanno =  listaProgramas.length;
  var select = document.querySelector('#sltFiltroProgramas');

  for(var i = 0; i < nTamanno; i++){
    var opcion = document.createElement('option');

    opcion.text = listaProgramas[i][1];
    opcion.value = listaProgramas[i][1];

    select.appendChild(opcion);
  }
}

function mostrarfiltro(){
	 var listaMisiones = getMisiones();
	 var nTamanno = listaMisiones.length;
	 var tbody = document.querySelector('#tblMisiones tbody');
	 var sProgramaFiltro = document.querySelector('#sltFiltroProgramas').value;

	 tbody.innerHTML = '';

	 for(var i = 0; i < nTamanno; i++){
	 	if (sProgramaFiltro == listaMisiones[i][2]) {

var fila = document.createElement('tr');
		var celdaCodigo = document.createElement('td');
		var celdaNombre = document.createElement('td');
		var celdaPrograma = document.createElement('td');
		var celdaFecha = document.createElement('td');
		var celdaDuracion = document.createElement('td');
		var celdaDatos = document.createElement('td');
		var celdaEstado = document.createElement('td');
		var celdaNave = document.createElement('td');
		var celdaCuerpo = document.createElement('td');
		var celdaTripulate1 = document.createElement('td');
		var celdaTripulate2 = document.createElement('td');
		var celdaTripulate3 = document.createElement('td');
		var celdaTripulate4 = document.createElement('td');


		celdaCodigo.innerHTML = listaMisiones[i][0];
		celdaNombre.innerHTML = listaMisiones[i][1];
		celdaPrograma.innerHTML = listaMisiones[i][2];
		celdaFecha.innerHTML = listaMisiones[i][3];
		celdaDuracion.innerHTML = listaMisiones[i][4];
		celdaDatos.innerHTML = listaMisiones[i][5];
		celdaEstado.innerHTML = listaMisiones[i][6];
		celdaNave.innerHTML = listaMisiones[i][7];
		celdaCuerpo.innerHTML = listaMisiones[i][8];
		celdaTripulate1.innerHTML = listaMisiones[i][9];
		celdaTripulate2.innerHTML = listaMisiones[i][10];
		celdaTripulate3.innerHTML = listaMisiones[i][11];
		celdaTripulate4.innerHTML = listaMisiones[i][12];

		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaNombre);
		fila.appendChild(celdaPrograma);
		fila.appendChild(celdaFecha);
		fila.appendChild(celdaDuracion);
		fila.appendChild(celdaDatos);
		fila.appendChild(celdaEstado);
		fila.appendChild(celdaNave);
		fila.appendChild(celdaCuerpo);
		fila.appendChild(celdaTripulate1);
		fila.appendChild(celdaTripulate2);
		fila.appendChild(celdaTripulate3);
		fila.appendChild(celdaTripulate4);
		tbody.appendChild(fila);

	 	}
	 }

}

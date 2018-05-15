mostrarDatos();

function mostrarDatos(){
	var listaProgramas = getProgramas();
	var nTamanno = listaProgramas.length;
	var tbody = document.querySelector('#tblPrograma tbody');
	tbody.innerHTML = '';
	for(var i = 0; i < nTamanno; i++){
		var fila = document.createElement('tr');
		var celdaCodigo = document.createElement('td');
		var celdaNombre = document.createElement('td');
		var celdaPrograma = document.createElement('td');
		var celdaFechaI = document.createElement('td');
		var celdaFechaF = document.createElement('td');


		celdaCodigo.innerHTML = listaProgramas[i][0];
		celdaNombre.innerHTML = listaProgramas[i][1];
		celdaPrograma.innerHTML = listaProgramas[i][2];
		celdaFechaI.innerHTML = listaProgramas[i][3];
		celdaFechaF.innerHTML = listaProgramas[i][4];


		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaNombre);
		fila.appendChild(celdaPrograma);
		fila.appendChild(celdaFechaI);
		fila.appendChild(celdaFechaF);

		tbody.appendChild(fila);
	}
}
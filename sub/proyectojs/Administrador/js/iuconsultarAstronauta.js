mostrarDatos();

function mostrarDatos(){
	var listaAstronautas = getAstronautas();
	var nTamanno = listaAstronautas.length;
	var tbody = document.querySelector('#tblAstronautas tbody');
	tbody.innerHTML = '';
	for(var i = 0; i < nTamanno; i++){
		var fila = document.createElement('tr');
		var celdaCorreo = document.createElement('td');
		var celdaCodigo = document.createElement('td');
		var celdaIndetificacion = document.createElement('td');
		var celdaNombre = document.createElement('td');
		var celdaApellido = document.createElement('td');
		var celdaEdad = document.createElement('td');
		var celdaGenero = document.createElement('td');
		var celdaNacionalidad = document.createElement('td');


		celdaCorreo.innerHTML = listaAstronautas[i][0];
		celdaCodigo.innerHTML = listaAstronautas[i][1];
		celdaIndetificacion.innerHTML = listaAstronautas[i][2];
		celdaNombre.innerHTML = listaAstronautas[i][3];
		celdaApellido.innerHTML = listaAstronautas[i][5];
		celdaEdad.innerHTML = listaAstronautas[i][7];
		celdaGenero.innerHTML = listaAstronautas[i][8];
		celdaNacionalidad.innerHTML = listaAstronautas[i][9];


		fila.appendChild(celdaCorreo);
		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaIndetificacion);
		fila.appendChild(celdaNombre);
		fila.appendChild(celdaApellido);
		fila.appendChild(celdaEdad);
		fila.appendChild(celdaGenero);
		fila.appendChild(celdaNacionalidad);

		tbody.appendChild(fila);
	}
}
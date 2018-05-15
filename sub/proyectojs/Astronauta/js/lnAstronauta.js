document.querySelector('#txtUsuarioLogueado').value = localStorage.getItem('lsUsuario');
var listaMisiones = getMisiones();
var Logueado = localStorage.getItem('lsUsuarioLogueado');
console.log(Logueado);
console.log(listaMisiones);
mostrarDatos();

function mostrarDatos(){

	var nTamanno = listaMisiones.length;
	var tbody = document.querySelector('#tblMisiones tbody');
	tbody.innerHTML = '';
	for(var i = 0; i < nTamanno; i++){
		if (Logueado == listaMisiones[i][9] || Logueado == listaMisiones[i][10] || Logueado == listaMisiones[i][11] || Logueado == listaMisiones[i][12] ) {

			var fila = document.createElement('tr');

		   var celda2 = document.createElement('td');
		   var celda3 = document.createElement('td');
		   var celda4 = document.createElement('td');
		   var celda5 = document.createElement('td');
		   var celda6 = document.createElement('td');
		   var celda7 = document.createElement('td');





				celda2.innerHTML = listaMisiones[i][1];
				celda3.innerHTML = listaMisiones[i][2];
				celda4.innerHTML = listaMisiones[i][3];
				celda5.innerHTML = listaMisiones[i][4];
				celda6.innerHTML = listaMisiones[i][5];
				celda7.innerHTML = listaMisiones[i][6];


				fila.appendChild(celda2);
				fila.appendChild(celda3);
				fila.appendChild(celda4);
				fila.appendChild(celda5);
				fila.appendChild(celda6);
				fila.appendChild(celda7);


				tbody.appendChild(fila);

		}

	}
}

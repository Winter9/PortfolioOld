mostrarDatos();

function mostrarDatos(){
	var listaCuerpos = getCuerpoCeleste();
	var nTamanno = listaCuerpos.length;
	var tbody = document.querySelector('#tblCuerpo tbody');
	tbody.innerHTML = '';
	for(var i = 0; i < nTamanno; i++){
		var fila = document.createElement('tr');
		var celdaCodigo = document.createElement('td');
		var celdaTipo = document.createElement('td');
		var celdaCantidad = document.createElement('td');
		var celdalumi = document.createElement('td');
		var celdaTamanno = document.createElement('td');
		var celdaNombre = document.createElement('td');
		var celdaMasa = document.createElement('td');
		var celdaTemperatura = document.createElement('td');
		var celdaDuracion = document.createElement('td');
		var celdaComposicion = document.createElement('td');
		var celdaDistacia = document.createElement('td');
		var celdaDuracionA = document.createElement('td');



		celdaCodigo.innerHTML = listaCuerpos[i][0];
		celdaTipo.innerHTML = listaCuerpos[i][1];
		celdaCantidad.innerHTML = listaCuerpos[i][2];
		celdalumi.innerHTML = listaCuerpos[i][3];
		celdaTamanno.innerHTML = listaCuerpos[i][4];
		celdaNombre.innerHTML = listaCuerpos[i][5];
		celdaMasa.innerHTML = listaCuerpos[i][6];
		celdaTemperatura.innerHTML = listaCuerpos[i][7];
		celdaDuracion.innerHTML = listaCuerpos[i][8];
		celdaComposicion.innerHTML = listaCuerpos[i][9];
		celdaDistacia.innerHTML = listaCuerpos[i][10];
		celdaDuracionA.innerHTML = listaCuerpos[i][11];


		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaTipo);
		fila.appendChild(celdaCantidad);
		fila.appendChild(celdalumi);
		fila.appendChild(celdaTamanno);
		fila.appendChild(celdaNombre);
		fila.appendChild(celdaMasa);
		fila.appendChild(celdaTemperatura);
		fila.appendChild(celdaDuracion);
		fila.appendChild(celdaComposicion);
		fila.appendChild(celdaDistacia);
		fila.appendChild(celdaDuracionA);


		tbody.appendChild(fila);
	}
}

function filtrarDatos(){
 var listaCuerpos = getCuerpoCeleste();
 var nTamanno = listaCuerpos.length;
 var tbody = document.querySelector('#tblCuerpo tbody');
 var sCuerpoFiltro = document.querySelector('#sltFiltroCuerpo').value;

 tbody.innerHTML = '';

 if(sCuerpoFiltro == ''){

 mostrarDatos();

  }else{

   switch (sCuerpoFiltro) {
    case 'planeta':
    mostrarfiltro();

     break;
    case 'estrella':
    mostrarfiltro();

     break;
    case 'satelite':
    mostrarfiltro();


     break;
    default:

   }


  }

}


function mostrarfiltro(){
	 var listaCuerpos = getCuerpoCeleste();
	 var nTamanno = listaCuerpos.length;
	 var tbody = document.querySelector('#tblCuerpo tbody');
	 var sCuerpoFiltro = document.querySelector('#sltFiltroCuerpo').value;

	 tbody.innerHTML = '';

	 for(var i = 0; i < nTamanno; i++){
	 	if (sCuerpoFiltro == listaCuerpos[i][1]) {

	 				var fila = document.createElement('tr');
					var celdaCodigo = document.createElement('td');
					var celdaTipo = document.createElement('td');
					var celdaCantidad = document.createElement('td');
					var celdalumi = document.createElement('td');
					var celdaTamanno = document.createElement('td');
					var celdaNombre = document.createElement('td');
					var celdaMasa = document.createElement('td');
					var celdaTemperatura = document.createElement('td');
					var celdaDuracion = document.createElement('td');
					var celdaComposicion = document.createElement('td');
					var celdaDistacia = document.createElement('td');
					var celdaDuracionA = document.createElement('td');



					celdaCodigo.innerHTML = listaCuerpos[i][0];
					celdaTipo.innerHTML = listaCuerpos[i][1];
					celdaCantidad.innerHTML = listaCuerpos[i][2];
					celdalumi.innerHTML = listaCuerpos[i][3];
					celdaTamanno.innerHTML = listaCuerpos[i][4];
					celdaNombre.innerHTML = listaCuerpos[i][5];
					celdaMasa.innerHTML = listaCuerpos[i][6];
					celdaTemperatura.innerHTML = listaCuerpos[i][7];
					celdaDuracion.innerHTML = listaCuerpos[i][8];
					celdaComposicion.innerHTML = listaCuerpos[i][9];
					celdaDistacia.innerHTML = listaCuerpos[i][10];
					celdaDuracionA.innerHTML = listaCuerpos[i][11];


					fila.appendChild(celdaCodigo);
					fila.appendChild(celdaTipo);
					fila.appendChild(celdaCantidad);
					fila.appendChild(celdalumi);
					fila.appendChild(celdaTamanno);
					fila.appendChild(celdaNombre);
					fila.appendChild(celdaMasa);
					fila.appendChild(celdaTemperatura);
					fila.appendChild(celdaDuracion);
					fila.appendChild(celdaComposicion);
					fila.appendChild(celdaDistacia);
					fila.appendChild(celdaDuracionA);


					tbody.appendChild(fila);

	 	}
	 }

}

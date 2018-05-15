mostrarDatos();
var botonRegistrar = document.querySelector('#btnRegistrar');
var botonActualizar = document.querySelector('#btnActualizar');
botonActualizar.classList.add('ocultar');
botonRegistrar.addEventListener('click', obtenerDatosRegistroP);
botonActualizar.addEventListener('click', actualizar);





function obtenerDatosRegistroP(){

	var validacion = validar();

	if (validacion === true) {

		  var sCodigo = document.querySelector('#txtCodigo').value;
		  var sNombreC = document.querySelector('#txtNombre').value;
		  var sFechaInicio = document.querySelector('#txtInicio').value;
		  var sFechaFinalizacion = document.querySelector('#txtFinal').value;
		  var sAlcanze = document.querySelector('#txtAlcance').value;
		  var infoProgramas = [];

		  infoProgramas.push(sCodigo,sNombreC,sFechaInicio,sFechaFinalizacion,sAlcanze);



	}
	var verificar = validarCodigo(infoProgramas[0]);
	if (verificar === false) {
		registrarPrograma(infoProgramas);
}
}


function validar(){
	var aInputs = document.querySelectorAll('input:required');

	var nTamanno = aInputs.length;
	var nfalse = 0;
	var ntrue = 0;

	for(var i = 0; i < nTamanno; i++){
		var sValor = aInputs[i].value;

		if (sValor == '') {
			 aInputs[i].classList.add('error');
			 nfalse+= 1;
			}else{
				aInputs[i].classList.remove('error');
				ntrue+= 1;
			}
	}

	if (ntrue === 5) {

		return true;
	}else{
		return false;
	}


}


function validarCodigo(pCodigo){
  var listaProgramas = getProgramas();
  var nTamanno = listaProgramas.length;
  var validacion = false;

  for(var i = 0; i < nTamanno; i++){
    if (pCodigo == listaProgramas[i][0]) {
      console.log('codigo en uso')
      validacion = true;
    }
  }
  return validacion;

}

function mostrarDatos(){
	var listaProgramas = getProgramas();
	var nTamanno = listaProgramas.length;
	var tbody = document.querySelector('#tblTable tbody');
	tbody.innerHTML = '';
	for(var i = 0; i < nTamanno; i++){
		var fila = document.createElement('tr');
		var celdaCodigo = document.createElement('td');
		var celdaBotones = document.createElement('td');
		var celdaBotones2 = document.createElement('td');
    var botonEditar = document.createElement('input');
	    botonEditar.type = 'button';
	    botonEditar.value = 'Editar';
	    botonEditar.classList.add('btn');
	    botonEditar.classList.add('btn-warning');
	    botonEditar.id = listaProgramas[i][0];

	    var botonEliminar = document.createElement('input');
	    botonEliminar.type = 'button';
	    botonEliminar.value = 'Eliminar';
	    botonEliminar.classList.add('btn');
	    botonEliminar.classList.add('btn-danger')
	    botonEliminar.id = listaProgramas[i][0];


		celdaCodigo.innerHTML = listaProgramas[i][1];
		celdaBotones.appendChild(botonEditar);
		celdaBotones2.appendChild(botonEliminar);


		botonEditar.addEventListener('click', mostrarDatosParaActualizar);
		botonEliminar.addEventListener('click', eliminarFilas);



		fila.appendChild(celdaCodigo);
		fila.appendChild(celdaBotones);
		fila.appendChild(celdaBotones2);

		tbody.appendChild(fila);
	}
}

function mostrarDatosParaActualizar(){
botonActualizar.classList.add('ocultar');
botonRegistrar.classList.remove('ocultar');


  var codigoSeleccionado = this.id;


  var aPrograma = buscarPrograma(codigoSeleccionado);
  var Codigo = aPrograma[0];
  var Nombre = aPrograma[1];
  var inicio = aPrograma[2];
  var finalizacion = aPrograma[3];
  var Alcanze = aPrograma[4];

   document.querySelector('#txtCodigo').value = Codigo;
   document.querySelector('#txtCodigo').disabled = true;
   document.querySelector('#txtNombre').value = Nombre;
   document.querySelector('#txtInicio').value = inicio;
   document.querySelector('#txtFinal').value = finalizacion;
   document.querySelector('#txtAlcance').value = Alcanze;



}

function actualizar(){
  botonActualizar.classList.add('ocultar');
  botonRegistrar.classList.remove('ocultar');
  document.querySelector('#txtCodigo').disabled = false;

		  var sCodigo = document.querySelector('#txtCodigo').value;
		  var sNombreC = document.querySelector('#txtNombre').value;
		  var sFechaInicio = document.querySelector('#txtInicio').value;
		  var sFechaFinalizacion = document.querySelector('#txtFinal').value;
		  var sAlcanze = document.querySelector('#txtAlcance').value;
		  var infoProgramasModificado = [];
  infoProgramasModificado.push(sCodigo,sNombreC,sFechaInicio,sFechaFinalizacion,sAlcanze);
  actualizarLocal(infoProgramasModificado);
  mostrarDatos();
  limpiarDatos();

}

function limpiarDatos(){
   document.querySelector('#txtCodigo').value = '';
   document.querySelector('#txtNombre').value = '';
   document.querySelector('#txtInicio').value = '';
   document.querySelector('#txtFinal').value = '';
   document.querySelector('#txtAlcance').value = '';
}
 function eliminarFilas() {

      var elemento=this.parentNode.parentNode;
          elemento.parentNode.removeChild(elemento);
}

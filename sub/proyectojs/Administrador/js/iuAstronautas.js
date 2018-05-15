mostrarDatos();

var botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.addEventListener('click', actualizar);
document.querySelector('#btnRegistrarAstronauta').addEventListener('click',obtenerDatosRegistro);




function obtenerDatosRegistro(){
  var validacion = validarRegistroAstronauta();

  if (validacion === true) {

    var sCorreo = document.querySelector('#txtCorreo').value;
    var sCodigo = document.querySelector('#txtCodigo').value;
    var nIdentificacion = Number(document.querySelector('#txtIdentificacion').value);
    var sNombre1 = document.querySelector('#txtNombre1').value;
    var sNombre2 = document.querySelector('#txtNombre2').value;
    var sApellido1 = document.querySelector('#txtApellido1').value;
    var sApellido2 = document.querySelector('#txtApellido2').value;
    var nEdad = Number(document.querySelector('#txtEdad').value);
    var sGenero = document.querySelector('#sltGenero').value;
    var sNacionalidad = document.querySelector('#txtNacionalidad').value;
    var sContrasenna = document.querySelector('#txtContrasenna').value;
    var sConfirmacion = document.querySelector('#txtConfirmacion').value
    var sAstronauta = 'astronauta';

    var infoAstronauta = [];

    infoAstronauta.push(sCorreo,sCodigo,nIdentificacion,sNombre1,sNombre2,sApellido1,sApellido2,nEdad,sGenero,sNacionalidad,sContrasenna,sConfirmacion,sAstronauta);



  }
  var verificar = validarCodigo(infoAstronauta[1]);
  if (verificar === false) {
    registrarAstronauta(infoAstronauta);
  }
}


function validarRegistroAstronauta(){

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

  if (ntrue === 9) {

    return true;
  }else{
    return false;
  }


}

function validarCodigo(pCodigo){
  var listaMisiones = getAstronautas();
  var nTamanno = listaMisiones.length;
  var validacion = false;

  for(var i = 0; i < nTamanno; i++){
    if (pCodigo == listaMisiones[i][1]) {
      console.log('codigo en uso')
      validacion = true;
    }
  }
  return validacion;

}

function mostrarDatos(){
  var listaProgramas = getAstronautas();
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


    celdaCodigo.innerHTML = listaProgramas[i][3];
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

  var codigoSeleccionado = this.id;


  var aPrograma = buscarPrograma(codigoSeleccionado);
  var sCorreo = aPrograma[0];
  var sCodigo = aPrograma[1];
  var nIdentificacion = aPrograma[2];
  var sNombre1 = aPrograma[3];
  var sNombre2 = aPrograma[4];
  var sApellido1 = aPrograma[5];
  var sApellido2 = aPrograma[6];
  var nEdad = aPrograma[7];
  var sGenero = aPrograma[8];
  var sNacionalidad = aPrograma[9];
  var sContrasenna = aPrograma[10];
  var sConfirmacion = aPrograma[11];




 document.querySelector('#txtCorreo').value = sCorreo;
 document.querySelector('#txtCorreo').disabled = true;
 document.querySelector('#txtCodigo').value = sCodigo;
 document.querySelector('#txtIdentificacion').value = nIdentificacion;
document.querySelector('#txtNombre1').value = sNombre1;
 document.querySelector('#txtNombre2').value = sNombre2;
 document.querySelector('#txtApellido1').value = sApellido1;
 document.querySelector('#txtApellido2').value = sApellido2;
 document.querySelector('#txtEdad').value = nEdad;
 document.querySelector('#sltGenero').value = sGenero;
 document.querySelector('#txtNacionalidad').value = sNacionalidad;
 document.querySelector('#txtContrasenna').value = sContrasenna;
 document.querySelector('#txtConfirmacion').value = sConfirmacion;



}

function actualizar(){

  document.querySelector('#txtCorreo').disabled = false;

    var sCorreo = document.querySelector('#txtCorreo').value;
    var sCodigo = document.querySelector('#txtCodigo').value;
    var nIdentificacion = Number(document.querySelector('#txtIdentificacion').value);
    var sNombre1 = document.querySelector('#txtNombre1').value;
    var sNombre2 = document.querySelector('#txtNombre2').value;
    var sApellido1 = document.querySelector('#txtApellido1').value;
    var sApellido2 = document.querySelector('#txtApellido2').value;
    var nEdad = Number(document.querySelector('#txtEdad').value);
    var sGenero = document.querySelector('#sltGenero').value;
    var sNacionalidad = document.querySelector('#txtNacionalidad').value;
    var sContrasenna = document.querySelector('#txtContrasenna').value;
    var sConfirmacion = document.querySelector('#txtConfirmacion').value
    var sAstronauta = 'astronauta';

    var infoAstronautaModificado = [];
  infoAstronautaModificado.push(sCorreo,sCodigo,nIdentificacion,sNombre1,sNombre2,sApellido1,sApellido2,nEdad,sGenero,sNacionalidad,sContrasenna,sConfirmacion,sAstronauta);
  actualizarLocal(infoAstronautaModificado);
  mostrarDatos();
  limpiarDatos();

}
function limpiarDatos(){
 document.querySelector('#txtCorreo').value = '';
 document.querySelector('#txtCodigo').value = '';
 document.querySelector('#txtIdentificacion').value = '';
document.querySelector('#txtNombre1').value = '';
 document.querySelector('#txtNombre2').value = '';
 document.querySelector('#txtApellido1').value = '';
 document.querySelector('#txtApellido2').value = '';
 document.querySelector('#txtEdad').value = '';
 document.querySelector('#sltGenero').value = '';
 document.querySelector('#txtNacionalidad').value = '';
 document.querySelector('#txtContrasenna').value = '';
 document.querySelector('#txtConfirmacion').value = '';
}
 function eliminarFilas() {

      var elemento=this.parentNode.parentNode;
          elemento.parentNode.removeChild(elemento);
}

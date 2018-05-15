mostrarDatos();

llenarProgramas();
llenarCuerposCelestes();
llenarAstronautas();

var botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.addEventListener('click', actualizar);
document.querySelector('#btnRegistrarMision').addEventListener('click',obtenerDatosRegistro);

function llenarProgramas(){
  var listaProgramas = getProgramas();
  var nTamanno =  listaProgramas.length;
  var select = document.querySelector('#sltProgramas');

  for(var i = 0; i < nTamanno; i++){
    var opcion = document.createElement('option');

    opcion.text = listaProgramas[i][1];
    opcion.value = listaProgramas[i][1];

    select.appendChild(opcion);
  }
}

function llenarCuerposCelestes(){
  var listaCuerposCelestes = getCuerpoCeleste();
  var nTamanno =  listaCuerposCelestes.length;
  var select = document.querySelector('#sltCuerposCelestes');

  for(var i = 0; i < nTamanno; i++){
    var opcion = document.createElement('option');

    opcion.text = listaCuerposCelestes[i][0];
    opcion.value = listaCuerposCelestes[i][5];

    select.appendChild(opcion);
  }
}

function llenarAstronautas(){
  var listaAstronautas = getAstronautas();
  var nTamanno =  listaAstronautas.length;
  var select = document.querySelector('#sltAstronautas');

  for(var i = 0; i < nTamanno; i++){
    var opcion = document.createElement('option');

    opcion.text = listaAstronautas[i][3];
    opcion.value = listaAstronautas[i][0];

    select.appendChild(opcion);
  }
}

function obtenerDatosRegistro(){
  var validacion = validarMision();

    if (validacion === true) {

        var sCodigo = document.querySelector('#txtCodigoM').value;
        var sNombre = document.querySelector('#txtNombreM').value;
        var sProgramas = document.getElementById('sltProgramas').value;
        var sFecha = document.querySelector('#txtFecha').value;
        var sDuracion = document.querySelector('#txtDuracion').value;
        var sDatos = document.querySelector('#txtDatos').value;
        var sEstado = document.querySelector('#sltEstado').value;
        var sNave = document.querySelector('#txtNave').value;
        var sCuerpoCeleste = document.querySelector('#txtCeleste').value;
        var sAstronauta1 = document.querySelector('#txtAstronauta1').value;
        var sAstronauta2 = document.querySelector('#txtAstronauta2').value;
        var sAstronauta3 = document.querySelector('#txtAstronauta3').value;
        var sAstronauta4 = document.querySelector('#txtAstronauta4').value;

        var infoMision = [];
        console.log(sCuerpoCeleste)

        infoMision.push(sCodigo,sNombre,sProgramas,sFecha,sDuracion,sDatos,sEstado,sNave,sCuerpoCeleste,sAstronauta1,sAstronauta2,sAstronauta3,sAstronauta4);



    }

    var verificar = validarCodigo(infoMision[0]);
    if (verificar === false) {
      registrarMision(infoMision);
    }





}

function validarMision(){
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

  if (ntrue === 6) {

    return true;
  }else{
    return false;
  }


}
function validarCodigo(pCodigo){
  var listaMisiones = getMisiones();
  var nTamanno = listaMisiones.length;
  var validacion = false;

  for(var i = 0; i < nTamanno; i++){
    if (pCodigo == listaMisiones[i][0]) {
      console.log('codigo en uso')
      validacion = true;
    }
  }
  return validacion;

}


function mostrarDatos(){
  var listaProgramas = getMisiones();
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



  var codigoSeleccionado = this.id;


  var aPrograma = buscarMision(codigoSeleccionado);
  var sCodigo = aPrograma[0];
  var sNombre = aPrograma[1];
  var sProgramas = aPrograma[2];
  var sFecha = aPrograma[3];
  var sDuracion = aPrograma[4];
  var sDatos = aPrograma[5];
  var sEstado = aPrograma[6];
  var sNave = aPrograma[7];
  var sCuerpoCeleste = aPrograma[8]
  var sAstronauta1 = aPrograma[9];
  var sAstronauta2 = aPrograma[10];
  var sAstronauta3 = aPrograma[11];
  var sAstronauta4 = aPrograma[12];


document.querySelector('#txtCodigoM').value = sCodigo;
document.querySelector('#txtCodigoM').disabled = true;
 document.querySelector('#txtNombreM').value = sNombre;
 document.getElementById('sltProgramas').value = sProgramas;
document.querySelector('#txtFecha').value = sFecha;
document.querySelector('#txtDuracion').value = sDuracion;
 document.querySelector('#txtDatos').value = sDatos;
document.querySelector('#sltEstado').value = sEstado;
document.querySelector('#txtNave').value = sNave;
 document.querySelector('#txtCeleste').value = sCuerpoCeleste;
document.querySelector('#txtAstronauta1').value = sAstronauta1;
document.querySelector('#txtAstronauta2').value = sAstronauta2;
document.querySelector('#txtAstronauta3').value = sAstronauta3;
 document.querySelector('#txtAstronauta4').value = sAstronauta4;


}

function actualizar(){

  document.querySelector('#txtCodigoM').disabled = false;

      var sCodigo = document.querySelector('#txtCodigoM').value;
        var sNombre = document.querySelector('#txtNombreM').value;
        var sProgramas = document.getElementById('sltProgramas').value;
        var sFecha = document.querySelector('#txtFecha').value;
        var sDuracion = document.querySelector('#txtDuracion').value;
        var sDatos = document.querySelector('#txtDatos').value;
        var sEstado = document.querySelector('#sltEstado').value;
        var sNave = document.querySelector('#txtNave').value;
        var sCuerpoCeleste = document.querySelector('#txtCeleste').value;
        var sAstronauta1 = document.querySelector('#txtAstronauta1').value;
        var sAstronauta2 = document.querySelector('#txtAstronauta2').value;
        var sAstronauta3 = document.querySelector('#txtAstronauta3').value;
        var sAstronauta4 = document.querySelector('#txtAstronauta4').value;

        var infoMisionModificado = [];

  infoMisionModificado.push(sCodigo,sNombre,sProgramas,sFecha,sDuracion,sDatos,sEstado,sNave,sCuerpoCeleste,sAstronauta1,sAstronauta2,sAstronauta3,sAstronauta4);
  actualizarLocalMision(infoMisionModificado);
  mostrarDatos();
  limpiarDatos();

}
function limpiarDatos(){
        var sCodigo = document.querySelector('#txtCodigoM').value = '';
        var sNombre = document.querySelector('#txtNombreM').value = '';
        var sFecha = document.querySelector('#txtFecha').value = '';
        var sDuracion = document.querySelector('#txtDuracion').value = '';
        var sDatos = document.querySelector('#txtDatos').value = '';
        var sEstado = document.querySelector('#sltEstado').value = '';
        var sNave = document.querySelector('#txtNave').value = '';


}
 function eliminarFilas() {

      var elemento=this.parentNode.parentNode;
          elemento.parentNode.removeChild(elemento);
}

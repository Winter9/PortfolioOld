mostrarDatos();
document.querySelector('#txtInputPlaneta').classList.add('ocultar');
document.querySelector('#txtIntensidad').classList.add('ocultar');
document.querySelector('#txtTamannoEstrella').classList.add('ocultar');




var botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.addEventListener('click', actualizar);



document.querySelector('#btnRegistrarCuerpoCeleste').addEventListener('click',obtenerDatosRegistroCuerpoCeleste);









function obtenerDatosRegistroCuerpoCeleste(){
  var validacion = validarCuerpoCeleste();

  if (validacion === true) {

  var sCodigo = document.querySelector('#txtCodigo').value;
  var sTipoCuerpo = document.querySelector('#sltTipoCuerpo').value;
  var nCantSatelites = document.querySelector("#txtInputPlaneta").value;
  var sIntensidadLuminica = document.querySelector("#txtIntensidad").value;
  var sTamannoEstrella = document.querySelector("#txtTamannoEstrella").value;
  var sNombre = document.querySelector('#txtNombre').value;
  var sMasa = document.querySelector('#txtMasa').value;
  var sTemp = document.querySelector('#txtTemp').value;
  var nDuracionDia = document.querySelector('#txtDuracionDia').value;
  var sComposicion = document.querySelector('#txtComposicion').value;
  var sDistanciaMediaSol = document.querySelector('#txtDistanciaSol').value;
  var nDuracionAnno = Number(document.querySelector('#txtDuracionAnno').value);



  var infoCuerpoCeleste = [];

  infoCuerpoCeleste.push(sCodigo,sTipoCuerpo,nCantSatelites,sIntensidadLuminica,sTamannoEstrella,sNombre,sMasa,sTemp,nDuracionDia,sComposicion,sDistanciaMediaSol,nDuracionAnno); //falta hacer push a las var




  }

  var verificar = validarCodigo(infoCuerpoCeleste[0]);
  if (verificar === false) {
    registrarCuerpoCeleste(infoCuerpoCeleste);
  }

}

function validarCuerpoCeleste(){

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

  if (ntrue === 7) {

    return true;
  }else{
    return false;
  }


}


document.querySelector('#sltTipoCuerpo').addEventListener('change',mostrarInput);

function mostrarInput() {
  var cuerpoCeleste = document.querySelector('#sltTipoCuerpo').value;

  switch(cuerpoCeleste){
      case 'planeta':
        document.querySelector('#txtInputPlaneta').classList.remove('ocultar');
        document.querySelector('#txtIntensidad').classList.add('ocultar');
        document.querySelector('#txtTamannoEstrella').classList.add('ocultar');
      break;
      case 'estrella':
        document.querySelector('#txtInputPlaneta').classList.add('ocultar');
        document.querySelector('#txtIntensidad').classList.remove('ocultar');
        document.querySelector('#txtTamannoEstrella').classList.remove('ocultar');
      break;
      case 'satelite':
        document.querySelector('#txtInputPlaneta').classList.add('ocultar');
        document.querySelector('#txtIntensidad').classList.add('ocultar');
        document.querySelector('#txtTamannoEstrella').classList.add('ocultar');
      break;
    }
  }


  function validarCodigo(pCodigo){
    var listaCuerposCelestes = getCuerpoCeleste();
    var nTamanno = listaCuerposCelestes.length;
    var validacion = false;

    for(var i = 0; i < nTamanno; i++){
      if (pCodigo == listaCuerposCelestes[i][0]) {
        console.log('codigo en uso')
        validacion = true;
      }
    }
    return validacion;

  }

  function mostrarDatos(){
  var listaProgramas = getCuerpoCeleste();
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



    celdaCodigo.innerHTML = listaProgramas[i][5];
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
  var sCodigo = aPrograma[0];
  var sTipoCuerpo = aPrograma[1];
  var nCantSatelites = aPrograma[2];
  var sIntensidadLuminica = aPrograma[3];
  var sTamannoEstrella = aPrograma[4];
  var sNombre = aPrograma[5];
  var sMasa = aPrograma[6];
  var sTemp = aPrograma[7];
  var nDuracionDia = aPrograma[8];
  var sComposicion = aPrograma[9];
  var sDistanciaMediaSol = aPrograma[10];
  var nDuracionAnno = aPrograma[11];



 document.querySelector('#txtCodigo').value = sCodigo;
 document.querySelector('#txtCodigo').disabled = true;
 document.querySelector('#sltTipoCuerpo').value = sTipoCuerpo;
 document.querySelector("#txtInputPlaneta").value = nCantSatelites;
 document.querySelector("#txtIntensidad").value = sIntensidadLuminica;
 document.querySelector("#txtTamannoEstrella").value = sTamannoEstrella;
 document.querySelector('#txtNombre').value = sNombre;
 document.querySelector('#txtMasa').value = sMasa;
 document.querySelector('#txtTemp').value = sTemp;
 document.querySelector('#txtDuracionDia').value = nDuracionDia;
 document.querySelector('#txtComposicion').value = sComposicion;
 Number(document.querySelector('#txtDistanciaSol').value = sDistanciaMediaSol);
document.querySelector('#txtDuracionAnno').value = nDuracionAnno;



}


function actualizar(){

  document.querySelector('#txtCodigo').disabled = false;


  var sCodigo = document.querySelector('#txtCodigo').value;
  var sTipoCuerpo = document.querySelector('#sltTipoCuerpo').value;
  var nCantSatelites = document.querySelector("#txtInputPlaneta").value;
  var sIntensidadLuminica = document.querySelector("#txtIntensidad").value;
  var sTamannoEstrella = document.querySelector("#txtTamannoEstrella").value;
  var sNombre = document.querySelector('#txtNombre').value;
  var sMasa = document.querySelector('#txtMasa').value;
  var sTemp = document.querySelector('#txtTemp').value;
  var nDuracionDia = document.querySelector('#txtDuracionDia').value;
  var sComposicion = document.querySelector('#txtComposicion').value;
  var sDistanciaMediaSol = document.querySelector('#txtDistanciaSol').value;
  var nDuracionAnno = Number(document.querySelector('#txtDuracionAnno').value);



  var infoCuerpoCelesteModificado = [];
  infoCuerpoCelesteModificado.push(sCodigo,sTipoCuerpo,nCantSatelites,sIntensidadLuminica,sTamannoEstrella,sNombre,sMasa,sTemp,nDuracionDia,sComposicion,sDistanciaMediaSol,nDuracionAnno); //falta hacer push a las var

  actualizarLocal(infoCuerpoCelesteModificado);
  mostrarDatos();
  limpiarDatos();

}

function limpiarDatos(){
 document.querySelector('#txtCodigo').value = '';
 document.querySelector("#txtInputPlaneta").value = '';
 document.querySelector("#txtIntensidad").value = '';
 document.querySelector("#txtTamannoEstrella").value = '';
 document.querySelector('#txtNombre').value = '';
 document.querySelector('#txtMasa').value = '';
 document.querySelector('#txtTemp').value = '';
 document.querySelector('#txtDuracionDia').value = '';
 document.querySelector('#txtComposicion').value = '';
 document.querySelector('#txtDistanciaSol').value = '';
document.querySelector('#txtDuracionAnno').value = '';
}
 function eliminarFilas() {

      var elemento=this.parentNode.parentNode;
          elemento.parentNode.removeChild(elemento);
}

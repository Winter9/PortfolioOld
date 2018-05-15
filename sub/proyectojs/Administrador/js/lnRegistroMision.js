var mMisiones =[
  ['M01','Gemini1','Gemini','8/04/1964','2 días','Mision de prueba','realizada','Titan II','Tierra','andresvegagutierrez@gmail.com','captainsnow97@hotmail.com','',''],
  ['M02','Gemini2','Gemini','19/01/1965','7 días','Vuelo suborbital ','realizada','Titan II','Tierra','Mision no tripulada','','',''],
  ['M03','Gemini3','Gemini','23/03/1965','4 días','Primer vuelo tripulado','realizada','Titan II','Tierra','andresvegagutierrez@gmail.com','captainsnow97@hotmail.com','arnaltama@hotmail.com','alanbarlett@gmail.com'],
  ['M04','Gemini4','Gemini','3/07/1965','4 días','Primer paseo espacial','realizada','Titan II','Tierra','buzzal@hotmail.com','andresvegagutierrez@gmail.com','zamka@hotmail.com','alanbarlett@gmail.com'],
  ['M05','Redstone1','Mercury','21/11/1960','2 días','Primer intento del Programa','fracasada','Mercury-Redstone','Luna','anousheh@gmail.com','andresvegagutierrez@gmail.com','yangli@hotmail.com','alanbarlett@gmail.com'],
  ['M06','Redstone1A','Mercury','19/12/1960','3 días','Primer vuelo suborbital','realizada','Mercury-Redstone','Luna','anousheh@gmail.com','andresvegagutierrez@gmail.com','yangli@hotmail.com','captainsnow97@hotmail.com'],
  ['M07','Redstone2','Mercury','31/01/1961','5 días','Vuelo suborbital','realizada','Mercury-Redstone','Luna','Marcgar@hotmail.com','andresvegagutierrez@gmail.com','valentinatereshk@gmail.P01','captainsnow97@hotmail.com'],
  ['M08','RedstoneBD','Mercury','24/03/1961','5 días','Vuelo de Prueba','pendiente','Mercury-Redstone','Luna','pepeelgrillo@hotmail.com','andresvegagutierrez@gmail.com','valentinatereshk@gmail.P01','speedygonza@gmail.com'],
  ['M09','Apollo9','Apollo','3/03/1969','9 días','Vuelo de Prueba','pendiente','Mercury-Redstone','Luna','pepeelgrillo@hotmail.com','andresvegagutierrez@gmail.com','valentinatereshk@gmail.P01','speedygonza@gmail.com'],
  ['M10','Apollo10','Apollo','18/05/1969','10 días','Primera prueba del vehículo','realizada','L.M Spider','Saturno','pepeelgrillo@hotmail.com','andresvegagutierrez@gmail.com','valentinatereshk@gmail.P01','speedygonza@gmail.com'],
  ['M11','Apollo11','Apollo','20/06/1969','8 días','Primer descenso lunar','realizada','L.M Eagle','Luna','arnaltama@hotmail.com','andresvegagutierrez@gmail.com','neilarm@hotmail.com','captainsnow97@hotmail.com'],
  ['M12','Apollo12','Apollo','14/11/1969','10 días','Primera prueba del vehículo','realizada','L.M Eagle','Saturno','arnaltama@hotmail.com','andresvegagutierrez@gmail.com','neilarm@hotmail.com','franklinchang@hotmail.com'],
  ['M13','Sputnik4','Vostok','15/05/1960','10 días','Primera prueba','realizada','Korabl-Spútnik 1','Urano','arnaltama@hotmail.com','yangli@hotmail.com','neilarm@hotmail.com','franklinchang@hotmail.com'],
  ['M14','Sputnik5','Vostok','28/07/1960','6 días','Lleva a bordo los perros','fracasada','Korabl-Spútnik 2','Urano','arnaltama@hotmail.com','yangli@hotmail.com','neilarm@hotmail.com','franklinchang@hotmail.com'],
  ['M15','Vostok6','Vostok','16/06/1993','7 días','Primera mujer en el espacio.','realizada','3KA-2','Urano','valentinatereshk@gmail.com','yangli@hotmail.com','neilarm@hotmail.com','franklinchang@hotmail.com'],
  ['M16','Luna1','Proton','02/01/1959','4 días','Pasó a 6.000 km de la Luna','realizada','3KA-2','Urano','valentinatereshk@gmail.com','yangli@hotmail.com','neilarm@hotmail.com','franklinchang@hotmail.com'],
  ['M16','Luna2','Proton','12/09/1959','3 días','Primera sonda en llegar a la Luna','fracasada','3KA-2','Urano','valentinatereshk@gmail.com','yangli@hotmail.com','neilarm@hotmail.com','franklinchang@hotmail.com'],










];

function getMisiones(){
  var listaMisiones = JSON.parse(localStorage.getItem('lsListaMisiones'));

  if(listaMisiones == null){
    listaMisiones = mMisiones;
  }

  return listaMisiones;
}

function registrarMision(parregloMision){
  var listaMisiones = getMisiones();

  listaMisiones.push(parregloMision);

  localStorage.setItem('lsListaMisiones',JSON.stringify(listaMisiones));

}

function buscarMision(pcodigo){
  var lista = getMisiones();
  var aPrograma = [];

  for(var i = 0; i < lista.length; i++){
    if(pcodigo == lista[i][0]){
      aPrograma = lista[i];
    }
  }
  return aPrograma;
}
function actualizarLocalMision(parreglo){
  var lista = getMisiones();

  for(var i = 0; i < lista.length; i++){
    if(parreglo[0] == lista[i][0]){
      lista[i][1] = parreglo[1];
      lista[i][2] = parreglo[2];
      lista[i][3] = parreglo[3];
      lista[i][4] = parreglo[4];
      lista[i][5] = parreglo[5];
      lista[i][6] = parreglo[6];
      lista[i][7] = parreglo[7];
      lista[i][8] = parreglo[8];
      lista[i][9] = parreglo[9];
      lista[i][10] = parreglo[10];
      lista[i][11] = parreglo[11];

      
    }
  }
  localStorage.setItem('lsListaMisiones', JSON.stringify(lista));
}

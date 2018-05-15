var mPrograma =[
  ['P01','Gemini','6/2013','9/2016','Alcance'],
  ['P02','Mercury','2/2016','7/2017','Alcance'],
  ['P03','Apollo','7/2003','7/2007','Alcance'],
  ['P04','Proton','3/2000','9/2005','Alcance'],
  ['P05','Vostok','3/2014','9/2017','Alcance'],



];
function getProgramas(){
  var listaProgramas =JSON.parse( localStorage.getItem('lsListaProgramas'));

  if(listaProgramas == null){
    listaProgramas = mPrograma;
  }

  return listaProgramas;
}
function registrarPrograma(parregloProgramas){
  var listaProgramas = getProgramas();

  listaProgramas.push(parregloProgramas);

  localStorage.setItem('lsListaProgramas',JSON.stringify(listaProgramas));

}

function buscarPrograma(pcodigo){
  var lista = getProgramas();
  var aPrograma = [];

  for(var i = 0; i < lista.length; i++){
    if(pcodigo == lista[i][0]){
      aPrograma = lista[i];
    }
  }
  return aPrograma;
}

function actualizarLocal(parreglo){
  var lista = getProgramas();

  for(var i = 0; i < lista.length; i++){
    if(parreglo[0] == lista[i][0]){
      lista[i][1] = parreglo[1];
      lista[i][2] = parreglo[2];
      lista[i][3] = parreglo[4];
      
    }
  }
  localStorage.setItem('lsListaProgramas', JSON.stringify(lista));
}




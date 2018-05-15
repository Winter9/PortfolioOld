var mCuerpoCeleste =[
  ['CC-01','planeta','1','','','Tierra','6×1024 kg','15','24h','hierro,oxígeno,silicio,magnesio,azufre,níquel,calcio, aluminio','1,5 × 1011 m',365],
  ['CC-02','planeta','62','','','Saturno','5,683 × 10^26 kg ','-130C','10h 42m','hidrógeno y helio, pero también hay amoníaco, hielo de metano y agua helada.','888,2',10759],
  ['CC-03','planeta','27','','','Urano','8,681 × 10^25 kg',-'205','17h 14m','Urano es metano en forma de hielo.','1,784',30660],
  ['CC-04','estrella','','0,0017','100.900 km','Centauri','2,446 × 10^29 kg','3.042','4015','---','1,784', 142942.9487],
  ['CC-05','satelite','','','','Luna','7,349 × 1022 kg','387C','1680','Helio, 25%. Neón, 25%. Hidrógeno, 23%. Argón, 20%. Metano','384.400',27],
  ['CC-06','planeta','','','','Júpiter','1,898 × 10^27 kg','-121C','4333','además de contener metano, vapor de agua, amoníaco y sulfuro de hidrógeno','750',4333],
  ['CC-07','estrella','','60.000','975.000.000 km','Antares','15.5M','3600K','---','---','550 Años Luz',],
  ['CC-08','satelite','','','','Deimos','2,244×1015 kg','233K','30,5 horas','---','1.5UA',1.262],
  ['CC-09','planeta','14','','','Neptuno','1,024 × 10^26 kg','-220C','16,6 horas','Hidogeno84%,Helio12%,Metano2%,Amoniaco0.001%,Etano0.00025%','30.06UA',59860],
  ['CC-10','satelite','','','','Fobos','1,072×1016 kg','233K','24Horas','---','1.5UA',],
  ['CC-11','estrella','','3,827 × 1026V',' 6,0877 × 1012 km²','Sol','1,989 × 10^30 kg','5505C','---','Hidrogeno74.9%,Helio24.7%,Otros1.5%','0',],
  ['CC-12','satelite','','','','Aegir','2,6×1013 kg','91K','---','---','---',],
  ['CC-13','estrella','','3.4L','540.100KM','Upsilon Andromedae','1.28 M','6,095 K','---','','44 Años Luz',],
  ['CC-14','satelite','','','','Fenrir','7,7×1013 kg','91k','---','---','108.200.000 km',],
  ['CC-15','estrella','','25,45(A)/0,026N.B.2(B)L','1,191 millones km','Sirio','4,018 × 10^30 kg','9.940 K','---','---','50 Años Luz',]


];

function getCuerpoCeleste(){
  var listaCuerpoCeleste = JSON.parse(localStorage.getItem('lsListaCuerpoCeleste'));

  if(listaCuerpoCeleste == null){
    listaCuerpoCeleste = mCuerpoCeleste;
  }

  return listaCuerpoCeleste;
}



function registrarCuerpoCeleste(parregloCuerpoCeleste){
  var listaCuerpoCeleste = getCuerpoCeleste();

  listaCuerpoCeleste.push(parregloCuerpoCeleste);

  localStorage.setItem('lsListaCuerpoCeleste',JSON.stringify(listaCuerpoCeleste));

}

function buscarPrograma(pcodigo){
  var lista = getCuerpoCeleste();
  var aPrograma = [];

  for(var i = 0; i < lista.length; i++){
    if(pcodigo == lista[i][0]){
      aPrograma = lista[i];
    }
  }
  return aPrograma;
}

function actualizarLocal(parreglo){
  var lista = getCuerpoCeleste();

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
  localStorage.setItem('lsListaCuerpoCeleste', JSON.stringify(lista));
}

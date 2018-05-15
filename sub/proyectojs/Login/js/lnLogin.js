/*
  inválido = 0
  admin = 1
  astronauta = 2
*/

var mUsuarios = [
  ['pmonestel@ucenfotec.ac.cr','M00','113310332','Pablo','','Monestel','',28,'Masculino','Costarricense','Abc123','Abc123','administrador'],
  ['pepeelgrillo@hotmail.com','M03','503123213','Pepe','','el Grillo','',33,'Masculino','Mexicano','3333','3333','astronauta'],
  ['captainsnow97@hotmail.com','A01','305030807','Luis','','Calderon','',20,'Masculino','Costarricense','9797','9797','administrador'],
  ['andresvegagutierrez@gmail.com','A02','305100526','Andres','','Vega','',18,'Masculino','Costarricense','9898','9898','astronauta'],
  ['pepeelgrillo@hotmail.com','A03','503123213','Pepe','','el Grillo','',33,'Masculino','Mexicano','3333','3333','astronauta'],
  ['speedygonza@gmail.com','A04','302254365','Speedy','','Gonzalez','',23,'Masculino','Mexicano','2323','2323','astronauta'],
  ['franklinchang@hotmail.com','A05','305267854','Franklin','Chang','Diaz','',67,'Masculino','Costarricense','7676','7676','astronauta'],
  ['neilarm@hotmail.com','A06','100675438','Neil','','Armstrong','',82,'Masculino','Estadounidense','8282','8282','astronauta'],
  ['valentinatereshk@gmail.com','A07','099654789','Valentina','','Tereshkova','',80,'Femenino','Rusa','0808','0808','astronauta'],
  ['yiso@hotmail.com','A08','876564456','Yi','','so-yeon','',38,'Femenino','Coreana','8383','8383','astronauta'],
  ['alanbarlett@gmail.com','A09','756438234','Alan','','Barlett','',75,'Masculino','Estadounidense','5757','5757','astronauta'],
  ['arnaltama@hotmail.com','A10','202435432','Arnaldo','','Tamayo','',75,'Masculino','Cubano','7575','7575','astronauta'],
  ['buzzal@hotmail.com','A11','123424543','Buzz','','Aldrin','',87,'Masculino','Estadounidense','8787','8787','astronauta'],
  ['zamka@hotmail.com','A12','675438976','George','','Zamka','',54,'Masculino','Estadounidense','5454','5454','astronauta'],
  ['anousheh@gmail.com','A13','223556751','Anousheh','','Ansari','',50,'Femenino','Iraní','0505','0505','astronauta'],
  ['yangli@hotmail.com','A14','777986543','Yang','','Liwei','',51,'Masculino','Chino','5151','5151','astronauta'],
  ['Marcgar@hotmail.com','A15','999213456','Marc','','Garneau','',68,'Masculino','Canadiense','6868','6868','astronauta']


];

function usuario(parreglousuario){

    var listaUsuarios = getUsuarios();

    listaUsuarios.push(parreglousuario);

    localStorage.setItem('lsListaUsuarios',JSON.stringify(listaUsuarios));

}

function getUsuarios(){
  var listaUsuarios = JSON.parse(localStorage.getItem('lsListaUsuarios'));

  if(listaUsuarios == null){
    listaUsuarios = mUsuarios;
  }

  return listaUsuarios;

}

function verificarCredenciales(pNombreUsuario, pContrasenna){

  var listaUsuarios = getUsuarios();
  var nTamanno = listaUsuarios.length;
  var rol = 0;

  for(var i = 0; i <nTamanno; i++){
    if(listaUsuarios[i][0] === pNombreUsuario  && listaUsuarios[i][10] === pContrasenna){
      localStorage.setItem('lsUsuarioLogueado', (listaUsuarios[i][0]));
      localStorage.setItem('lsUsuario', (listaUsuarios[i][3] + ' ' + listaUsuarios[i][5]));
      switch(listaUsuarios[i][12]){
        case 'administrador':
          rol = 1;
        break;
        case 'astronauta':
          rol = 2;
        break;
        default:
          rol = 0;
        break;
      }
    }
  }
  return rol;
}

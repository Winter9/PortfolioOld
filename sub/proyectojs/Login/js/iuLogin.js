var divError = document.querySelector('#divError');

divError.classList.add('ocultar');

document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);

function iniciarSesion(){

  var sNombreUsuario = document.querySelector('#txtNombreUsuario').value;
  var sContrasenna = document.querySelector('#txtContrasenna').value;
  var rol = 0;

  rol = verificarCredenciales(sNombreUsuario,sContrasenna);

  switch(rol){
    case 1:
      window.location.href = '../Administrador/admin.html';
    break;
    case 2:
      window.location.href = '../Astronauta/astronauta.html';
    break;
    default:
      divError.innerHTML = 'Usuario o contraseña inválidos';
      divError.classList.remove('ocultar');
    break;
  }


}

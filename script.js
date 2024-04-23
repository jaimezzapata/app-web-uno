let usuarioNuevo = {};
let usuarios = [];
function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("contrasena").value;
  let correo = document.getElementById("correo").value;
  usuarioNuevo = {
    usuario,
    contrasena,
    correo,
  };
  usuarios.push(usuarioNuevo);
  console.log(usuarios);
}

let usuarioNuevo = {};
let usuarios = [];
function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("contrasena").value;
  usuarioNuevo = {
    usuario,
    contrasena,
  };
  usuarios.push(usuarioNuevo);
  console.log(usuarios);
}
let btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener("click", iniciarSesion);
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

function mostrarLogin() {
  console.log("Formulario Login");
  document.getElementById("form-title").textContent = "Iniciar Sesión";
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

function mostrarRegistro() {
  console.log("Formulario Registro");
  document.getElementById("form-title").textContent = "Registrar Usuario";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

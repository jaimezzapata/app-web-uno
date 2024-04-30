import { iniciarSesion } from "../controller/ControllerUsuario.js";

iniciarSesion()

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

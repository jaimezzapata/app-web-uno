import { iniciarSesion } from "../controller/ControllerUsuario.js";

iniciarSesion();

let inputs = document.querySelectorAll("input");
let user = /^[A-Z]{4,10}$/;
let password = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).{5,10}$/;

const validarCampos = (e) => {
  switch (e.target.name) {
    case "usuario":
      if (user.test(e.target.value)) {
        console.log("Pasó la validación del usuario");
        document.getElementById("usuario").style.borderColor = "green";
      } else {
        document.getElementById("usuario").style.borderColor = "red";
      }
      break;
    case "contrasena":
      if (password.test(e.target.value)) {
        console.log("Pasó la validación de contraseña");
      }
      break;
  }
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarCampos);
});
console.log(inputs);

/* querySelector(#id) */
/* querySelector(etiqueta) */
/* querySelector(.clase) */

/* getElementById() */
/* getElementsByTagName() */
/* getElementsByClassName() */

/* querySelectorAll() */

document
  .getElementById("boton-registro")
  .addEventListener("click", mostrarRegistro);
document.getElementById("boton-login").addEventListener("click", mostrarLogin);

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

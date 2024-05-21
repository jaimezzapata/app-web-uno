import usuarios from "../model/ModelUsuario.js";

export function iniciarSesion() {
  console.log("Inicio de sesión correcto...");
}

export function registrarUsuario() {
  let correo = document.getElementById("registro-correo").value;
  let contrasena = document.getElementById("registro-contrasena").value;
  let usuario = document.getElementById("registro-usuario").value;
  let nuevoUsuario = {
    usuario,
    contrasena,
    correo,
  };
  usuarios.push(nuevoUsuario);
  console.log(usuarios);
}

// export {
//     iniciarSesion, registrarUsuario
// }

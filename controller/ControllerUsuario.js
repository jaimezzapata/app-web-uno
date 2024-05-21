import usuarios from "../model/ModelUsuario.js";

export function iniciarSesion() {
  console.log("Inicio de sesión correcto...");
}

const crearUsuario = () => {
  let correo = document.getElementById("registro-correo").value;
  let contrasena = document.getElementById("registro-contrasena").value;
  let usuario = document.getElementById("registro-usuario").value.toUpperCase();
  let nuevoUsuario = {
    usuario,
    contrasena,
    correo,
  };
  return nuevoUsuario;
};
function buscarUsuario() {
  let usuario = document.getElementById("registro-usuario").value.toUpperCase();
  let estado = usuarios.some((element) => element.usuario === usuario);
  return estado;
}
export function registrarUsuario() {
  if (buscarUsuario()) {
    console.log("Usuario ya existe en la base de datos");
  } else {
    usuarios.push(crearUsuario());
    console.log(usuarios);
  }
}

// export {
//     iniciarSesion, registrarUsuario
// }

import usuarios from "../model/ModelUsuario.js";

export function iniciarSesion() {
  if (buscarUsuario("usuario")) {
    window.location.href = "../views/home.html";
  } else {
    console.log("Usuario y/o contraseña incorrecto");
  }
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
function buscarUsuario(id) {
  let usuario = document.getElementById(id).value.toUpperCase();
  console.log(usuario);
  let estado = usuarios.some((element) => element.usuario === usuario);
  return estado;
} /* Revisar Retorno UpperCase */
export function registrarUsuario() {
  if (buscarUsuario("registro-usuario")) {
    console.log("Usuario ya existe en la base de datos");
  } else {
    usuarios.push(crearUsuario());
    console.log(usuarios);
  }
}

// export {
//     iniciarSesion, registrarUsuario
// }

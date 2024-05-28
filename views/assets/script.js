import { listarProductos } from "../../controller/ControllerProductos.js";

function mostrarFormularioRegistro() {
  document.getElementById("create-form").style.display = "block";
  document.getElementById("list").style.display = "none";
}
function mostrarListadoRegistros() {
  document.getElementById("create-form").style.display = "none";
  document.getElementById("list").style.display = "block";
  listarProductos();
}

document
  .querySelector("#btnCrearRegistro")
  .addEventListener("click", mostrarFormularioRegistro);
document
  .querySelector("#btnListarRegistros")
  .addEventListener("click", mostrarListadoRegistros);

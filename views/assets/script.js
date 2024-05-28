function mostrarFormularioRegistro() {
  document.getElementById("create-form").style.display = 'block'
  document.getElementById("list").style.display = 'none'
}

document.querySelector('#btnCrearRegistro').addEventListener('click', mostrarFormularioRegistro)

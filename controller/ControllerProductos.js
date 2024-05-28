import productos from "../model/ModelProductos.js";

export function listarProductos() {
  document.getElementById("cards").innerHTML = "";
  productos.map((producto) => {
    let card = document.createElement("section");
    let nombreProducto = document.createElement("h4");
    let precioProducto = document.createElement("p");
    let marcaProducto = document.createElement("p");
    let descripcionProducto = document.createElement("p");
    nombreProducto.textContent = producto.nombre;
    precioProducto.textContent = producto.precio;
    marcaProducto.textContent = producto.marca;
    descripcionProducto.textContent = producto.descripcion;
    /* appendChild */
    /* append */
    card.append(
      nombreProducto,
      precioProducto,
      marcaProducto,
      descripcionProducto
    );
    document.getElementById("cards").appendChild(card);
    console.log(card);
    console.log(productos);
  });
}

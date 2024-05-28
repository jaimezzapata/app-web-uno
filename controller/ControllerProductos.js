import productos from "../model/ModelProductos.js";

export function listarProductos() {
  let card = document.createElement("section");
  let nombreProducto = document.createElement("h4");
  let precioProducto = document.createElement("p");
  let marcaProducto = document.createElement("p");
  let descripcionProducto = document.createElement("p");
  /* appendChild */
  /* append */
  card.append(
    precioProducto,
    marcaProducto,
    descripcionProducto,
    nombreProducto
  );

  console.log(card);
  console.log(productos);
}

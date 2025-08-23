// Aplicamos un OR para que, cuando no haya localStorage, y por lo tanto el getItem arroje "null", la variable
// se quede con un array vacío, y así evitamos errores
let productosDelCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

let contenedor = document.querySelector(".productos-carrito");

const renderizarProductos = () => {
  let htmlCompletoDeProductos = "";

  productosDelCarrito.forEach((producto) => {
    htmlCompletoDeProductos += `
        <div class="producto">
        <h3>${producto.nombre}</h3>
        <h5>${producto.precio}</h5>
        <button onclick="eliminarPorId(${producto.id})">Eliminar del carrito</button>
        </div>
        `;
  });

  contenedor.innerHTML = htmlCompletoDeProductos;
};

renderizarProductos();

let botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  //   productosDelCarrito = [];
  //   renderizarProductos();
  contenedor.innerHTML = "";
});

const eliminarPorId = (id) => {
  const arraySinElDelId = productosDelCarrito.filter(
    (producto) => producto.id !== id
  );
  productosDelCarrito = arraySinElDelId;
  localStorage.setItem("carrito", JSON.stringify(productosDelCarrito));
  renderizarProductos();
};

const obtenerNumero = document.getElementById("obtener");
obtenerNumero.addEventListener("click", () => {
  let inputNumero = document.getElementById("numero").value;
  console.log(Number(inputNumero));
});

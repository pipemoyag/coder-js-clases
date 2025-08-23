// EJEMPLO CLASE 7
const productos = [
  { id: 1, nombre: "Camiseta", precio: 12000, stock: 15, categoria: "Ropa" },
  { id: 2, nombre: "Pantalón", precio: 18000, stock: 10, categoria: "Ropa" },
  { id: 3, nombre: "Zapatos", precio: 35000, stock: 8, categoria: "Calzado" },
  { id: 4, nombre: "Chaqueta", precio: 45000, stock: 5, categoria: "Ropa" },
  { id: 5, nombre: "Gorro", precio: 5000, stock: 20, categoria: "Accesorios" },
  {
    id: 6,
    nombre: "Bufanda",
    precio: 7000,
    stock: 18,
    categoria: "Accesorios",
  },
  {
    id: 7,
    nombre: "Calcetines",
    precio: 2500,
    stock: 30,
    categoria: "Calzado",
  },
  {
    id: 8,
    nombre: "Mochila",
    precio: 28000,
    stock: 12,
    categoria: "Accesorios",
  },
  {
    id: 9,
    nombre: "Lentes de sol",
    precio: 15000,
    stock: 7,
    categoria: "Accesorios",
  },
  { id: 10, nombre: "Reloj", precio: 60000, stock: 4, categoria: "Accesorios" },
];

// queremos mostrar la informacion de todos los productos en el HTML

const renderizarProductos = () => {
  let contenedor = document.querySelector(".productos");

  // si bien lo sgte se podria hacer con un reduce o map, es mejor hacerlo con forEach
  let htmlCompletoDeProductos = "";

  productos.forEach((producto) => {
    htmlCompletoDeProductos += `
        <div class="producto">
        <h3>${producto.nombre}</h3>
        <h5>${producto.precio}</h5>
        <button onclick="agregarProducto(${producto.id})">Agregar al carrito</button>
        </div>
        `;
  });

  contenedor.innerHTML = htmlCompletoDeProductos;
};

renderizarProductos();

// CREACION DEL CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const agregarProducto = (id) => {
  // con este enfoque NO podíamos entregar el producto entero (objeto), pero sí el id
  let productoEncontrado = productos.find((producto) => producto.id === id);
  carrito.push(productoEncontrado);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

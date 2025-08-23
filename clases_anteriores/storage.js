// Complemento clase 5
// el '|| true' es para que, en caso que no haya nada en memoria (null), parta con "true"
let modoClaro = JSON.parse(localStorage.getItem("modoClaro") || "true");
console.log(modoClaro);

// con HTML y JS ---> podemos cambiar el valor de la variable

// con JS y CSS --> podemos hacer estilos dinamicos en base a esa variable

let interruptor = document.getElementById("btn-interruptor");
interruptor.addEventListener("click", () => {
  modoClaro = !modoClaro;
  localStorage.setItem("modoClaro", JSON.stringify(modoClaro));
  console.log(modoClaro);
});

const productos = [
  { id: 1, nombre: "Camiseta", precio: 12000, stock: 15 },
  { id: 2, nombre: "Pantalón", precio: 18000, stock: 10 },
  { id: 3, nombre: "Zapatos", precio: 35000, stock: 8 },
  { id: 4, nombre: "Chaqueta", precio: 45000, stock: 5 },
  { id: 5, nombre: "Gorro", precio: 5000, stock: 20 },
  { id: 6, nombre: "Bufanda", precio: 7000, stock: 18 },
  { id: 7, nombre: "Calcetines", precio: 2500, stock: 30 },
  { id: 8, nombre: "Mochila", precio: 28000, stock: 12 },
  { id: 9, nombre: "Lentes de sol", precio: 15000, stock: 7 },
  { id: 10, nombre: "Reloj", precio: 60000, stock: 4 },
];

// storage

// // guardar info
// localStorage.setItem("carrito", JSON.stringify(productos));
// localStorage.setItem("nombreDelUsuario", "pepe");

// // leer info

// let productosDelCarrito = JSON.parse(localStorage.getItem("carrito"));
// console.log(productosDelCarrito);

// // actualizar info --> volviendo a crear
// localStorage.setItem("nombreDelUsuario", "juan");

// // eliminar una info en particular
// localStorage.removeItem("carrito");

// // limpiar toda la info del storage
// localStorage.clear();

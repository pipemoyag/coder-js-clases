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

// #######################################
// ####### PROGRAMACION IMPERATIVA #######
// #######################################

// hasta ahora hemos visto "programacion imperativa", osea nosotros creando toda la logica

// find
const encontrarProducto = (nombre) => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre === nombre) {
      return productos[i];
    }
  }
  return "el producto no se encontró";
};

let productoCompleto = encontrarProducto("Gorro");
console.log(productoCompleto);

// filtrar
const filtrar = (categoria) => {
  let nuevoArray = []; // voy a ir guardando todo lo que cumpla la condicion
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === categoria) {
      nuevoArray.push(productos[i]);
    }
  }
  return nuevoArray;
};

let elNuevoCuadernito = filtrar("Ropa");
console.log(elNuevoCuadernito);

// map, un nuevo array con la misma cantidad de elementos
const nuevoArrayModificado = () => {
  let nuevoArray = [];
  for (let i = 0; i < productos.length; i++) {
    nuevoArray.push({
      nombre: productos[i].nombre,
      precio: productos[i].precio,
      cantidadVendida: 0,
    });
  }
  return nuevoArray;
};

let arrayMapeado = nuevoArrayModificado();
console.log(arrayMapeado);

// ####################################################
// ####### PROGRAMACION DECLARATIVA O FUNCIONAL #######
// ####################################################

// METODOS QUE, POR DETRAS, RECORREN EL ARRAY
// USAMOS COMO ARGUMENTO UNA FUNCION FLECHA -> "CALLBACK" (funcion que se usa como argumento a otra funcion)

// find -> si no encuentra el elemento, retornará undefined
// devuelve el elemento
let productoFind = productos.find((producto) => producto.nombre === "Gorro");
console.log(productoFind);

// filtrar || OJO, se puede usar return igual
// devuelve un array. Si no encuentra elementos que cumplan, retornará array vacío
let productosFiltrados = productos.filter((producto) => {
  return producto.categoria === "Ropa";
});
console.log(productosFiltrados);

// map
let arrayNuevoModificado = productos.map((producto) => ({
  nombre: producto.nombre,
  precio: producto.precio,
  cantidadVendida: 0,
}));
console.log(arrayNuevoModificado);

// Tipos de datos primitivos:
// string - numbers - booleanos - null - undefined - NaN

// Estructuras de datos:
// Objetos y Arrays

// ### OBJETOS LITERALES ###
// estan compuestos por propiedades (describir a mi objeto) y
// metodos (son cosas que puede ejecutar el objeto)
let producto = {
  // propiedades son pares clave : valor
  nombre: "telefono",
  precio: 200,
  esImportado: true,
  stock: 15,
  direccion: { calle: "italia", numero: "225" },
};

// OJO, si usaramos 'const' en vez de 'let' para definir el objeto, todavía podremos
// modificar propiedades, o agregar propiedades nuevas. Aquí el uso de 'const' tiene OTRAS implicancias

// DOT NOTATION -> objeto.propiedad
console.log(producto.esImportado);
console.log(producto.direccion.numero);

// manupular un objeto
producto.stock -= 1;
producto.direccion.numero = "144";
console.log(producto);

// agregar nuevas propiedades
producto.descuento = 50;

// hace mas sentido manipular las propiedades usando funciones
const descontarStock = () => {
  producto.stock -= 1;
};

// METODOS, son funciones asociadas al objeto
// Siempre siempre siempre con la palabra 'function'
// así que, si bien usaremos solo funciones flecha en el global, para metodos sí hay que hacerlo como funcion anonima
let usuario = {
  nombre: "Felipe",
  email: "felipe@gmail.com",
  password: "123456",
  edad: 30,
  saludar: function () {
    // console.log(`Hola, soy ${usuario.nombre}`); // ESTA NO ES LA FORMA OPTIMA
    console.log(`Hola, soy ${this.nombre}`); // this referencia al objeto
  },
};

usuario.saludar();
// la diferencia entre metodo y funcion, es que el metodo siempre está asociado a un objeto

// OJO, FORMA ALTERNATIVA DE HACER ESTO MISMO: (MANTENIENDO PALABRA FUNCTION!)
const funcionSaludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

let usuario2 = {
  nombre: "Pamela",
  email: "Pamela@gmail.com",
  password: "123456",
  edad: 30,
  saludar: funcionSaludar,
};

usuario2.saludar();

// ### Arrays ## --> coleccion

let numerosDeLaSuerte = [15, 16, 66];
console.log(numerosDeLaSuerte);
console.log(numerosDeLaSuerte[1]);

// Metodos de Arrays, son nativos del lenguaje
numerosDeLaSuerte.push(80, 90, 32);
console.log(numerosDeLaSuerte);

console.log(numerosDeLaSuerte.includes(32)); // true

console.log(numerosDeLaSuerte.indexOf(16)); // si no lo encuentra, el metodo devuelve -1

// util arreglos de objetos
let productos = [
  { nombre: "telefono", precio: 200 },
  { nombre: "computadora", precio: 200 },
  { nombre: "zapatilla", precio: 200 },
];
console.log(productos[1].nombre);
productos.push({ nombre: "pepe", precio: "pepeprecio" });
console.log(productos);

// USO DE CICLOS CON ARRAYS OBJETOS
const productos2 = [
  {
    nombre: "Laptop",
    precio: 1299.99,
    categoria: "Electronicos",
    stock: 15,
  },
  {
    nombre: "Cafetera",
    precio: 89.5,
    categoria: "Electrodomesticos",
    stock: 32,
  },
  {
    nombre: "Zapatillas",
    precio: 129,
    categoria: "Deportes",
    stock: 28,
  },
];

const sumarStock = (cantidad) => {
  for (let i = 0; i < productos2.length; i++) {
    productos2[i].stock += cantidad;
  }
};

sumarStock(10);

const construirIds = () => {
  for (let i = 0; i < productos2.length; i++) {
    productos2[i].id = i + 1;
  }
};

construirIds();
console.log(productos2);

// OTRO EJEMPLO
let palabras = ["pepe", "juan", "carmen", "maria"];

for (let i = 0; i < palabras.length; i++) {
  console.log(palabras[i]);
}

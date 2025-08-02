// ### CLASS ---> constructores ###
// NO se usa mucho en FRONTEND, ya que al frontend ya le llegan los datos

// Clases: una fabrica de algo, que cada vez que la uso, crea algo nuevo

// SIEMPRE empiezan en MAYUSCULA

class Usuario {
  // la construccion de las propiedades
  constructor(nombre, email, password, edad) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.edad = edad;
  }

  // en la creacion de los metodos
  // cuando sales del constructor, ya sabe que lo que sigue son funciones o metodos
  saludar(uno, dos, tres) {
    console.log(`hola soy ${this.nombre}, cómo está?`);
  }
}

// instanciar una clase
let usuario1 = new Usuario("pepe", "pepe@gmail", "222", 32);
let usuario2 = new Usuario("juan", "juan@gmail", "333", 44);
let usuario3 = new Usuario("maria", "maria@gmail", "444", 22);

let usuarios = [usuario1, usuario2, usuario3];

usuario2.saludar();

// ### JSON ---> formato ---> ""un tipo de dato mas"" para comunicar el Front con otras Apps ###
// Todo lo que viaje entre Front/Back, Front/DB, Front/Storage, etc, NO viaja como el tipo de dato que es,
// si no que como formato JSON
// tipos de datos: boolean, string, number, null, NaN, object, array, undefined

// formulario HTML, para que el administrador registre nuevos productos
// normalmente la info la sacaríamos de inputs de HTML, por ahora será todo en consola y codigo

let producto = {
  image: "https://laimagen.com",
  nombre: "telefono",
  precio: 100,
};

// enviar al BACK
const enviarProductoAlBack = (producto) => {
  console.log(producto);
  // transformar objeto a string
  let productoTransformado = JSON.stringify(producto);
  console.log(productoTransformado);
};

const botonEnviar = document.getElementById("btn");
botonEnviar.addEventListener("click", () => {
  enviarProductoAlBack(producto);
});

// simulamos el proceso inverso, recibir info del back y transformarla (parsearla)
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

// asi llegará en realidad:
let productosDesdeElBack = JSON.stringify(productos);

// la manipulamos para devolverla a su formato de origen
const parsearJSON = (informacionParaParsear) => {
  console.log(informacionParaParsear);
  let productosListosParaUsar = JSON.parse(informacionParaParsear);
  console.log(productosListosParaUsar);
};

parsearJSON(productosDesdeElBack);

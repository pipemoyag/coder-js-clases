// ##### REPASO #####

// undefined;
// NaN; --> Not a Number
// null;

let x; //undefined

console.log(x);

x = "pepe";

console.log(x);

let num = x / 3; //NaN

let esUnNaN = isNaN(num);
console.log(esUnNaN);

// NOSOTROS ENTRAMOS AL IF CUANDO EL DATO ES TRUTHY, Y NO CUANDO EL DATO ES FALSY
// truthy --> true | "hola" | [] | 12 | {}    ; [] es array   {} es objeto
// falsy --> false | null | undefined | NaN | "" | 0

let userName; // así es undefined, si se asigna un texto se convertirá en string

if (userName) {
  console.log("ingresó");
} else {
  console.log("no ingresó");
}

// #### FUNCIONES #####
// 1 --> reutilizar codigo
// 2 --> dejar codigo listo para ser ejecutado cuando yo quiera
// 3 --> hacer cosas dinamicas

// let elNombre = prompt("Ingresa tu nombre");

// funcion declarada
function saludar(nombre) {
  console.log(`Bienvenid@ ${nombre}`);
}

// invocar a la funcion
saludar(); // si se llama SIN argumento, indica undefined
// El valor por defecto de los parámetros de una funcion es undefined

// PARAMETROS son n1 y n2
function sumar(n1, n2) {
  let resultado = n1 + n2;
  console.log(resultado);
}

// ARGUMENTOS son 5 y 7; 12 y 7; 2 y 2
sumar(5, 7);
sumar(12, 7);
sumar(2, 2);

// TIPO DE DATO siempre va entre comillas
function multiplicar(parametro) {
  if (parametro || parametro === 0) {
    if (typeof parametro === "number") {
      console.log(parametro * 5);
    } else {
      console.log("por favor ingrese un dato numérico");
    }
  } else {
    console.log("no te olvides del numero");
  }
}

multiplicar(7); // antes de incorporar el IF, si no le pasaba nada como input, es operar undefined * 5 -> NaN
multiplicar("7");
multiplicar();

// Es importante también la SALIDA de la función (return)
// proceso interno que puede tener una entrada y una salida

function restar(n1, n2) {
  return n1 - n2;
  // return corta la ejecucion de la funcion, todo lo que venga después no se va a considerar
  // return puede ser explicito o implicito ; implicito será un return undefined
}

let res = restar(5, 3); // La ejecución de una funcion se transforma en lo que la funcion retorna

// ejemplo de incorporar el resultado en el DOM
let resultadoHtml = document.getElementById("resultado");
resultadoHtml.textContent = res;

// parametros por defecto
function dividir(a = 1, b = 5) {
  return a / b;
}

let resutladoDivision = dividir(undefined, 4); // para que el 1ro lo tome por defecto
console.log(resutladoDivision);

algo("pepe", 25); // una funcion DECLARADA (function Nombre (){}) puede ser llamada antes, por un proceso interno de JS
function algo(nombre, edad) {
  console.log(`El nombre es ${nombre} y la edad es ${edad}`);
}

// SCOPE --> las variables se pueden utilizar en el ambiente que fueron creadas, o en ambientes internos
// a donde fueron creadas

function saludarSiCumple() {
  if (true) {
    if (true) {
      let saludo = "feliz cumple";
    }
    // console.log(saludo); //ERROR, por scope
  }
}

saludarSiCumple();

let nombreUsuario = "marta";
if (true) {
  let nombreUsuario = "pepe";
  if (true) {
    console.log(nombreUsuario); // JS apunta a la variable del ambiente más cercano ("pepe")
  }
}

// FUNCIONES EXPRESADAS O ANONIMAS, SON LAS MÁS USADAS
// como las funciones anonimas no tienen nombre, para llamarlas se deben asignar a una variable
// tipicamente se usa const

const saludarDos = function (x, z) {
  console.log(x);
  return z;
};

// una funcion EXPRESADA se debe ejecutar después de su creación, por eso se recomienda usarlas
// te permiten asegurar un "orden" mental de que, si se llamó aquí, no puede estar definida abajo
saludarDos(12, 15);

// FUNCION FLECHA --> anonima, de tipo flecha

// Diferencias:
// function sumaDeclarada(){}
// const sumaExpresadaComun = function(){}
// const sumaFlecha = () => {};

// cuando es una linea de codigo, la flecha se puede escribir sin return
const sumaFlecha = (a, b) => a + b;

// si no tiene parametro o si trabajamos con mas de 1, sí o sí se requiere parentesis
const sumaFlecha2 = () => 10;

let resultadoFlecha = sumaFlecha(5, 3);
console.log(resultadoFlecha);

console.log("funciona");

// prompt --> me sirve para simular un input que a futuro sacaremos del HTML
// prompt("ingresar un numero");

// consola --> para simular lo que devuelvo en el HTML
console.log("hola");
// alert("tu numero es blabla");

// Variables --> son cajas para guardar algo (datos)
// let y const, ambas son variables. c/variable tiene 4 partes:
// el iniciador, el nombre, el '=' y el valor

let emailDelUsuario = "tu@email.com";

let nombre = "pepe";

let password = 123456;

const apellido = "perez";

console.log("---- variables ----");
console.log(nombre);
console.log(password);

// con let, las variables pueden cambiar de valor
// el let va solo la primera vez que declaro/inicializo la variable
let edad = 32;
console.log(edad);

edad = 33;
console.log(edad);

console.log(apellido);
// apellido = "moya"; // ERROR, por ser variable tipo const

// palabras reservadas: let, const, return, this, function, etc

// tipos de datos

// strings --> cadena de texto
let palabra = "casa";
let frase = "esta es una frase";

// si  quiero usar comillas dobles en alguna parte del texto, debo inicializar con comilla simple, y viceversa
frase = 'pepe esta "cansado"';

console.log("---- strings y comillas ----");
console.log(palabra);
console.log(frase);

// number --> numeros

let numero = 12;
let numerito = 12.5;

// booleanos --> que responden a una pregunta de si o no (true o false en MINUSCULAS)
usuarioLogueado = true;

// asignar el input de un prompt a una variable
console.log("---- uso de prompts ----");
let nombrePrompt = prompt("ingresa tu nombre");

console.log(nombrePrompt);

// se puede sin asignar variable, javascript resuelve siempre de adentro hacia afuera y de arriba hacia abajo
// console.log(prompt("ingresa tu apellido"));

// Operadores, para numeros y tambien para strings (concatenar)

// concatenar strings

let saludo = "hola " + nombrePrompt + ", como estas?";

// template literals
// backsticks --> `` (alt+96), sirve para armar un template literal
let saludoPro = `hola ${nombrePrompt}, como estas? cumpliste ${edad} años!`;

console.log(saludoPro);

let n1 = 9;
let n2 = 2;

console.log("---- operaciones ----");
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

// modulo, devuelve el resto de la division
console.log(n1 % 2);

// como obtener booleanos a partir de comparaciones
let x = 12;
let z = 15;

// operadores de comparacion --> SIEMPRE SIEMPRE DEVUELVE UN BOOLEANO
console.log("---- booleanos resultados de comparaciones ----");
console.log(x > z);
console.log(x < z);
console.log(x >= z);
console.log(x <= z);

// comparacion simple
console.log(x == z);
console.log(x != z);

// comparacion estricta
let n3 = 12;
let n4 = "12";

console.log("---- comparacion estricta ----");
console.log(n3 == n4); // este retorna True, ya que solo compara el dato (12 contra 12)
console.log(n3 === n4); // comparacion estricta también compara los tipos de datos
console.log(n3 != n4); // este retorna False, mismo principio
console.log(n3 !== n4); // aquí si retorna True

// sugerencia: usar comparacion estricta a menos que se necesite lo contrario

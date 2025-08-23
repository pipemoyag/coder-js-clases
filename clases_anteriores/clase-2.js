// CONDICIONALES --> estructuras de control
// IF / ELSE   --- TERNARIO   --- SWITCH

let edad = 20;
let inicioSession = false;

console.log("empieza");

if (6 > 4) {
  console.log("entro en el if");
} else {
  console.log("entro en el else");
}

console.log("termina");

// SISTEMA POR ROLES

// ROL --> tiene ciertos permisos
// simulamos peticion al backend
let rol = "vendedor";

// acceso a todo al admin
// acceso a una parte al vendedor
// y muy poco acceso al comprador

if (rol === "admin") {
  console.log("Acceso a todo");
} else if (rol == "vendedor") {
  console.log("Acceso a una parte");
} else if (rol == "comprador") {
  console.log("Acceso a casi nada");
} else {
  console.log("Rol no es ni admin, ni vendedor ni comprador");
}

// sistema que deje pasar a los usuarios si son mayor de edad y compraron entrada
// si son menores y compraron entrada, tienen que venir acompañado
// si no compraron entrada, no entran
// si son menores y no vienen acompañados, no entran

let edadUsuario = 15;
let esMayor = edadUsuario >= 18;
let tieneEntrada = true;
let vieneAcompañado = false;

if (tieneEntrada && esMayor) {
  console.log("puedes pasar porque tienes entrada y eres mayor");
} else if (tieneEntrada && vieneAcompañado) {
  console.log(
    "puedes pasar porque tienes entrada, eres menor pero vienes con alguien"
  );
} else if (!tieneEntrada) {
  console.log("no puedes pasar porque no tienes entrada");
} else if (!esMayor && !vieneAcompañado) {
  console.log(
    "no puedes pasar, eres menor necesitas a alguien que te acompañe"
  );
}

//

// Si llueve salgo con paraguas
// Si no, no hace falta

let clima = "soleado";

// ######################
// TERNARIO, para if/else con 2 opciones solamente
// ######################

// condicion ? el bloque verdadero : el bloque falso

// if (clima === "lluvioso") {
//   console.log("sí, lleva paraguas");
// } else {
//   console.log("no, no hace falta");
// }

// TERNARIO SI O SI REQUIERE LAS 2 CONDICIONES, NO SOLO "LA DEL IF"
clima === "lluvioso"
  ? console.log("si, lleva paraguas")
  : console.log("no, no hace falta");

// ######################
// SWITCH-CASE cuando se tienen muchos caminos
// ######################

// sistema que determine el valor del impuesto de un auto
// el impuesto base es de 200
// VW sumar 100
// AUDI sumar 150
// BMW sumar 200
// MERCEDES sumar 250
// FORD sumar 50
// ...

let impuesto = 200;

// let marcaAuto = prompt("dime qué auto tienes");
marcaAuto = "VW";

// if (marcaAuto === "VW") {
//   impuesto += 100;
// } else if (marcaAuto === "AUDI") {
//   impuesto += 150;
// } else if (marcaAuto === "BWM") {
//   impuesto += 200;
// } else if (marcaAuto === "MERCEDES") {
//   impuesto += 250;
// } else if (marcaAuto === "FORD") {
//   impuesto += 50;
// }

// dentro del parentesis va SOLO lo que queremos comparar
switch (marcaAuto) {
  case "VW":
    impuesto += 100;
    break;
  case "AUDI":
    impuesto += 150;
    break;
  case "BWM":
    impuesto += 200;
    break;
  case "MERCEDES":
    impuesto += 250;
    break;
  case "FORD":
    impuesto += 50;
    break;
  // equivalente a un else sería el default
  default:
    impuesto = "tu auto esta exento de impuesto";
}

console.log(
  `Gracias por usar nuestro sistema, el impuesto total es ${impuesto}`
);

// ######################################################
// ####################### CICLOS #######################
// ######################################################

// Estructuras de repeticion: FOR / WHILE / DO WHILE
// El más usual es For, luego While; MUY RARO usar el Do While

console.log("empieza el ciclo");
// FOR ->  inicializacion ; la condicion ; el modificador
// usualmente la condicion usa la variable inicializada, pero podría ser cualquier condicion en realidad
// i++ equivale a i+=1
for (let i = 1; i <= 10; i++) {
  console.log("hola");
}
console.log("termina el ciclo");

// pedir el propmt del numero
// y mostrar la tabla de multiplicar de dicho numero

let numero = Number(prompt("ingresa el numero"));
console.log(typeof numero);

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// WHILE, a diferencia del for, lo que importa es la condicion, no deberia depender de la inicializacion y actualizacion en cada iteracion
let j = 12;
while (j < 11) {
  console.log(`${numero} x ${j} = ${numero * j}`);
  j++;
}

// DO WHILE, cuando necesitamos que el bloque se ejecute al menos una vez, aunque no se cumpla la condicion
console.log("--------------");

j = 12;
do {
  console.log(`${numero} x ${j} = ${numero * j}`);
  j++;
} while (j < 11);

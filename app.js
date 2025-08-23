// Acceso a los elementos

// document apunta al objeto en el que estoy navegando en el momento que ejecuto el código
// nodos ---> html
let titulo = document.getElementById("title");
console.log(titulo);

// otra forma de seleccionar elementos del DOM: querySelector, que conversa con CSS
// se puede seleccionar por etiqueta, por .class, #id, etc
// SIEMPRE devuelve la primer coincidencia
let contenedorDeProductos = document.querySelector(".productos");
console.log(contenedorDeProductos);

// Para seleccionar todas las coincidencias
let categorias = document.querySelectorAll(".categoria");
console.log(categorias);

// manipulacion de los elementos
// estilos
// titulo.style.color = "red";

// contenido (texto), textContent es ideal para etiquetas que contienen texto, como los <h1>, <h2>, <p>, etc
titulo.textContent = "Hola este es un nuevo texto";

// para etiquetas contenedoras, sirve mas el innerHTML
contenedorDeProductos.innerHTML = `
<div class="producto">
    <h2> Un producto </h2>
</div>
<div class="producto">
    <h2> Un producto </h2>
</div>
<div class="producto">
    <h2> Un producto </h2>
</div>
`;

// al usar nodo.style, es basicamente abrir una hoja CSS
contenedorDeProductos.style.border = "2px solid red";

// boton
let btnAgregarClase = document.getElementById("btn-agregar-clase");
let btnQuitarClase = document.getElementById("btn-quitar-clase");
console.log(btnAgregarClase);

// "escuchador de nodos", NO es solo para botones, sirve para cualquier elemento
// el addEventListener NO es una propiedad, como el innerHTML, textContent.. es un METODO
// otros: dobleclick, drag / drop (como trello), mouse enter, mouse leave, etc
btnAgregarClase.addEventListener("click", () => {
  // agregar clases
  titulo.classList.add("dark");
});

btnQuitarClase.addEventListener("click", () => {
  // quitar clases
  titulo.classList.remove("dark");
});

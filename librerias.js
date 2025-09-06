// // Ej librerias: fechas
// console.log(new Date().getHours());
// console.log(new Date().getMinutes());
// // siempre Date() entrega mes en cuestión -1
// console.log(new Date().getMonth() + 1);

// otras librerias
// day js
// moment js

// const miInput = ----> elemento html (ej formularios)
// Librerias de validacion: Yup --> Zod

// Librería Peticiones (fetch): Axios
// https://axios-http.com/es/docs/intro
// si no la tuvieramos en CDN, se instalaría con npm y se llamaría en el código haciendo:
// const axios = require("axios"), o mas moderno:
// import axios from "axios"

// "Instancias", cada vez que haga una peticion, puedo usar la siguiente variable, y no axios.get() por ejemplo
// timeout, si se demora más que eso, corta la ejecución
// puedo incluir aquí mismo el header, con el token de autorizacion, para no tener que ingresarlo a cada rato después
const axiosCustom = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {},
});

const obtenerProductos = async () => {
  // forma que vimos la clase pasada:
  //   // recordar que el metodo GET es el por defecto
  //   const res = await fetch("https://fakestoreapi.com/products", {
  //     method: "POST",
  //     body: JSON.stringify({}),
  //     headers: {
  //       Authorization: "barer-dashdahashdajsd123123",
  //     },
  //   });

  // nueva forma, axios
  //   const res = await axios.get("https://fakestoreapi.com/products"); // sin instancia
  const res = await axiosCustom.get("/products"); // usando instancia
  // la ventaja es que aquí la respuesta ya viene parseada, pero con mucha mas info, asi que para obtener los datos
  // hay que rescatar el atributo data
  console.log(res.data);
};

obtenerProductos();

// Ux UI - Notificaciones: tostify (OJO, alternativa: "sonner")
// https://www.npmjs.com/package/toastify-js
const renderToast = (texto, callback) => {
  Toastify({
    // Toastify() configura el toast, y para mostrarlo en pantalla se usa el showToast()
    text: texto,
    duration: 5000,
    //   destination: "https://github.com/apvarun/toastify-js",
    //   newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "steelblue",
    },
    onClick: callback, // Callback after click => funciones al tocar la notificacion
  }).showToast();
};

const crearProducto = async () => {
  try {
    let nuevoProducto = {};
    const res = await axiosCustom.post("/products", nuevoProducto);
    renderToast("hola", () => {
      console.log("primer callback");
    });
    renderToast("chao", () => {
      console.log("segundo callback");
    });
  } catch (error) {
    console.log(error);
  }
};

const btnCrear = document.getElementById("crear");
btnCrear.addEventListener("click", crearProducto);

// // Ux UI - Alertas: sweetAlert2
// https://sweetalert2.github.io/#examples
// util para mostrar alertas preventivas antes que el usuario gatille una accion importante
// sweetAlert SIEMPRE devuelve una PROMESA. Por lo tanto, usualmente se trabaja con .then, .catch
const limpiarCarrito = () => {
  Swal.fire({
    title: "Seguro que quieres limpiar el carrito?",
    // showConfirmButton: false, // por defecto viene true
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: "Sí, limpiar",
    denyButtonText: `No, me arrepentí`,
    // timer: 3000,
  }).then((res) => {
    // isConfirmed: true, isDenied: false
    if (res.isConfirmed) {
      Swal.fire({
        title: "Carrito limpiado",
        icon: "success",
      });
    } else if (res.isDenied) {
      Swal.fire({
        title: "Carrito quedó como estaba",
        icon: "info",
      });
    }
  });
};

const btnLimpiar = document.getElementById("limpiar");
btnLimpiar.addEventListener("click", limpiarCarrito);

// ojo, hay librerias que ya usan axios y le agregan funcionalidades (ej swr.vercel.app)

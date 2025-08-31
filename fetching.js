// CLASE 8

// ASINCRONISMO

// ---> Una peticion HTTP --> JS devuelve una PROMESA, la cual debe trabajarse (desencriptarse)

// 2 FORMAS
// FORMA 1: try/catch + async/await

const obtenerPosteos = async () => {
  let contenedor = document.getElementById("container");
  //   console.log(contenedor);
  try {
    // fetch: disparar una peticion HTTP. Primer parámetro el ENDPOINT, segundo el OBJETO DE CONFIGURACION
    // OBJETO CONFIGURACION incluye methon, body, headers, etc
    // method por defecto del fetch es GET
    const posteos = await fetch("https://jsonplaceholder.typicode.com/postss", {
      method: "GET",
      // body: , // lugar en donde yo mando info del front al back, cuando uno CREA o actualiza algo
      // headers: {
      //     token,
      //     tipo dato
      // }
    });

    // console.log(posteos); // async/await transforman la "promesa" en una respuesta

    // En local storage usamos JSON.parse(variable), pero en Fetch usamos variable.json()
    // Para Post, seguiremos usando JSON.stringify
    const posteosListos = await posteos.json();
    console.log(posteosListos);

    let htmlPosteos = "";
    posteosListos.forEach((posteo) => {
      htmlPosteos += `<h2>${posteo.title}</h2>`;
    });

    contenedor.innerHTML = htmlPosteos;
  } catch (error) {
    console.log(error);
    contenedor.innerHTML = "<div><h2>Algo salio mal</h2></div>";
  }
};
// obtenerPosteos();

// FORMA 2: PROMESAS, cambiar await por then
// fetch devuelve una promesa, por eso se aplica un then
// el .json() también devuelve una promesa, por eso OTRO then (igual que doble await de antes)
const obtenerPosteos2 = () => {
  let contenedor = document.getElementById("container");
  const posteos = fetch("https://jsonplaceholder.typicode.com/posts");
  // en el callback del .then SIEMPRE llega una respuesta, y en el del .catch SIEMPRE llega un error
  posteos
    .then((respuesta) => respuesta.json())
    .then((posteosListos) => {
      let htmlPosteos = "";
      posteosListos.forEach((posteo) => {
        htmlPosteos += `<h2>${posteo.title}</h2>`;
      });
      contenedor.innerHTML = htmlPosteos;
    })
    .catch((error) => {
      console.log(error);
      contenedor.innerHTML = "<div><h2>Algo salio mal</h2></div>";
    });
};

obtenerPosteos2();

// IMPORTANTE, SIEMPRE mejor usar async y await, aunque se haga un POST, porque
// SIEMPRE vamos a querer evaluar la respuesta
const crearPosteo = async () => {
  try {
    // harcodeado, simulacion estática de algo dinámico
    let nuevoPosteo = {
      title: "pepe",
      body: "este es el mejor post",
      userId: 1,
    };

    // EN GET Y POST en general no va ID en el ENDPOINT, no así en DELETE, PATCH, PUT
    // Si usaremos DELETE, normalmente el ENDPOINT tendrá el ID, y NO sería necesario un body
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // RECORDAR, SIEMPRE que enviamos info del front al back, string JSON
      body: JSON.stringify(nuevoPosteo),
    });
    const responseParseada = await response.json();
    console.log(responseParseada);
    alert("producto creado con exito");
  } catch (error) {
    console.log(error);
    alert("no se pudo crear el producto");
  }
};

let btnCrear = document.getElementById("btn");
btnCrear.addEventListener("click", crearPosteo);

const actualizarPosteo = async () => {
  // harcodeado, simulacion estática de algo dinámico
  try {
    let nuevoPosteo = {
      title: "juan",
    };

    // Para ACTUALIZAR, SI será necesario indicar el id en el ENDPOINT
    // PUT agarra TODO el objeto viejo y lo reemplaza por el nuevo, es un peligro, porque se pueden
    // perder atributos que no queríamos modificar
    // Para solo modificar 1 o varios atributos, usar PATCH
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3",
      {
        method: "PUT",
        body: JSON.stringify(nuevoPosteo),
      }
    );
    const responseParseada = await response.json();
    console.log(responseParseada);
    // alert("producto creado con exito");
  } catch (error) {
    console.log(error);
    // alert("no se pudo crear el producto");
  }
};

let btnActualizar = document.getElementById("btn2");
btnActualizar.addEventListener("click", actualizarPosteo);

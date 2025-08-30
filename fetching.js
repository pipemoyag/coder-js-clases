// CLASE 8

// ASINCRONISMO

// ---> Una pericion HTTP --> PROMESA

// 2 FORMAS
// FORMA 1: try>catch + async/await

// REVISAR ESTO, quizas falta el catch en el try
const obtenerPosteos = async () => {
  let contenedor = document.getElementById("container");
  //   console.log(contenedor);
  try {
    // disparar una peticion HTTP. Primer parámetro el ENDPOINT, segundo el OBJETO DE CONFIGURACION
    // OBJETO CONFIGURACION incluye methon, body, headers, etc
    // method por defecto del fetch es GET
    const posteos = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      // body: // lugar en donde yo mando info del front al back,
      // headers: {
      //     token,
      //     tipo dato
    });

    // console.log(posteos); // esto arrojará una "promesa" si no tengo async y await

    // En local storage usamos JSON.parse(variable), pero en Fetch usamos variable.json()
    // Para Post, seguiremos usando JSON.stringify
    const posteosListos = await posteos.json();
    console.log(posteosListos);

    let htmlPosteos = "";
    posteosListos.forEach((posteo) => {
      htmlPosteos += `<h2>${posteo.title}</h2>`;
    });

    contenedor.innerHTML = htmlPosteos;
  } catch (error) {}
};

// FORMA 2: PROMESAS, cambiar await por then
// fetch devuelve una promesa, por eso se aplica un then
// el .json() también devuelve una promesa, por eso OTRO then (igual que doble await de antes)
const obtenerPosteos2 = () => {
  let contenedor = document.getElementById("container");
  const posteos = fetch("https://jsonplaceholder.typicode.com/posts");
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
      console.log("Algo salio mal");
    });
};

obtenerPosteos2();

// IMPORTANTE, SIEMPRE mejor usar async y await, aunque se haga un POST, porque
// SIEMPRE querremos evaluar la respuesta
const crearPosteo = async () => {
  // harcodeado, simulacion estática de algo dinámico
  try {
    let nuevoPosteo = {
      title: "pepe",
      body: "este es el mejor post",
      userId: 1,
    };

    // EN GET Y POST en general no va ID, no así en DELETE, PATCH, PUT
    // Si usaremos DELETE, normalmente el ENDPOINT tendrá el ID, y NO sería necesario un body
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
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

    // EN GET Y POST en general no va ID, no así en DELETE, PATCH, PUT
    // Si usaremos DELETE, normalmente el ENDPOINT tendrá el ID, y NO sería necesario un body
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

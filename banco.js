const clientesBanco = [
  {
    id: 1,
    nombre: "María González",
    alias: "maria.gon",
    cbu: "0000003100000001234567",
    tipoCuenta: "Caja de Ahorro",
    saldo: 152000.5,
  },
  {
    id: 2,
    nombre: "Juan Pérez",
    alias: "juanp.1985",
    cbu: "0000003100000009876543",
    tipoCuenta: "Cuenta Corriente",
    saldo: 58250.75,
  },
  {
    id: 3,
    nombre: "Lucía Fernández",
    alias: "lucia.fer",
    cbu: "0000003100000002468101",
    tipoCuenta: "Caja de Ahorro",
    saldo: 9200.0,
  },
  {
    id: 4,
    nombre: "Carlos Martínez",
    alias: "carlos.mt",
    cbu: "0000003100000001357913",
    tipoCuenta: "Cuenta Corriente",
    saldo: 347500.1,
  },
  {
    id: 5,
    nombre: "Ana López",
    alias: "ana.lo",
    cbu: "0000003100000001122334",
    tipoCuenta: "Caja de Ahorro",
    saldo: 74300.0,
  },
  {
    id: 6,
    nombre: "Pedro Ramírez",
    alias: "pedro.ram",
    cbu: "0000003100000005566778",
    tipoCuenta: "Cuenta Corriente",
    saldo: 21000.4,
  },
  {
    id: 7,
    nombre: "Sofía Herrera",
    alias: "sofia.he",
    cbu: "0000003100000003344556",
    tipoCuenta: "Caja de Ahorro",
    saldo: 98500.0,
  },
  {
    id: 8,
    nombre: "Diego Torres",
    alias: "dtorres.90",
    cbu: "0000003100000007788990",
    tipoCuenta: "Cuenta Corriente",
    saldo: 120000.25,
  },
  {
    id: 9,
    nombre: "Valentina Castro",
    alias: "vale.cas",
    cbu: "0000003100000004433221",
    tipoCuenta: "Caja de Ahorro",
    saldo: 15500.75,
  },
  {
    id: 10,
    nombre: "Rodrigo Morales",
    alias: "rodrigo.mo",
    cbu: "0000003100000009988776",
    tipoCuenta: "Cuenta Corriente",
    saldo: 86000.0,
  },
  {
    id: 11,
    nombre: "Camila Vega",
    alias: "camila.ve",
    cbu: "0000003100000001239874",
    tipoCuenta: "Caja de Ahorro",
    saldo: 30500.1,
  },
  {
    id: 12,
    nombre: "Francisco Díaz",
    alias: "fran.dz",
    cbu: "0000003100000003216549",
    tipoCuenta: "Cuenta Corriente",
    saldo: 270000.0,
  },
  {
    id: 13,
    nombre: "Isabella Soto",
    alias: "isa.soto",
    cbu: "0000003100000007418529",
    tipoCuenta: "Caja de Ahorro",
    saldo: 5000.0,
  },
  {
    id: 14,
    nombre: "Matías Navarro",
    alias: "mat.nav",
    cbu: "0000003100000009638527",
    tipoCuenta: "Cuenta Corriente",
    saldo: 199500.5,
  },
  {
    id: 15,
    nombre: "Fernanda Reyes",
    alias: "fer.rey",
    cbu: "0000003100000001597536",
    tipoCuenta: "Caja de Ahorro",
    saldo: 45700.25,
  },
  {
    id: 16,
    nombre: "Nicolás Fuentes",
    alias: "nico.fue",
    cbu: "0000003100000003571594",
    tipoCuenta: "Cuenta Corriente",
    saldo: 73000.0,
  },
  {
    id: 17,
    nombre: "Gabriela Campos",
    alias: "gaby.cam",
    cbu: "0000003100000006541238",
    tipoCuenta: "Caja de Ahorro",
    saldo: 91200.8,
  },
  {
    id: 18,
    nombre: "Tomás Herrera",
    alias: "tomas.he",
    cbu: "0000003100000008529631",
    tipoCuenta: "Cuenta Corriente",
    saldo: 40500.9,
  },
  {
    id: 19,
    nombre: "Paula Romero",
    alias: "paula.ro",
    cbu: "0000003100000002583691",
    tipoCuenta: "Caja de Ahorro",
    saldo: 60500.5,
  },
  {
    id: 20,
    nombre: "Andrés Molina",
    alias: "andres.mo",
    cbu: "0000003100000001472583",
    tipoCuenta: "Cuenta Corriente",
    saldo: 158000.0,
  },
];

// un sistema banco que tenga:
// clientes
// consultar cliente (con alias)
// depositar (con alias)
// extraer (con alias)

// recordar que está esta alternativa para los metodos
const funcionDepositar = function (elAlias, monto) {
  // ejemplo de validacion
  if (!elAlias || !monto) {
    return "Debes pasarme el alias y el monto";
  }

  let cliente = this.consultarCliente(elAlias);

  if (cliente !== undefined) {
    cliente.saldo += monto;
    return `La operacion salio exitosa, el nuevo saldo de ${cliente.nombre} es ${cliente.saldo}`;
  } else {
    return "Lo siento, ese cliente no existe";
  }
};

const banco = {
  clientes: clientesBanco,

  consultarCliente: function (dameElAlias) {
    // this.clientes es array, y al aplicar find obtendremos el primer elemento que cumpla la condicion
    return this.clientes.find((cliente) => cliente.alias === dameElAlias);
  },

  depositar: funcionDepositar,

  extraer: function (elAlias, monto) {
    let cliente = this.consultarCliente(elAlias);
    // if (cliente) funciona si cliente es objeto, ya que objeto es un truthy
    if (cliente) {
      if (cliente.saldo >= monto) {
        cliente.saldo -= monto;
        return `La operacion salio exitosa, el nuevo saldo de ${cliente.nombre} es de ${cliente.saldo}`;
      } else {
        return "Cliente no tiene saldo suficiente";
      }
    } else {
      return "No se encontró al cliente";
    }
  },
};

// clientes
console.log(banco.clientes);

// consultar cliente (con alias)
let encontrado = banco.consultarCliente("vale.cas");
console.log(encontrado);

// depositar (con alias)
// let camilaAntes = banco.consultarCliente("camila.ve");
// console.log(camilaAntes.saldo);

console.log(banco.depositar("camila.ve", 2000));

// let camilaDespues = banco.consultarCliente("camila.ve");
// console.log(camilaDespues.saldo);

// extraer (con alias)
console.log(banco.extraer("rodrigo.mo", 10000));

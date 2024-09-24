import { addCliente, listaClientes } from "./cliente.js";
import { suma } from "./operaciones.js";

let num1 = 1;
let num2 = 2;
let resultado = suma(num1,num2);
console.log(resultado);

//crear clientes

addCliente('alicia sosa', 'ali@gmail.com')
addCliente('maria jose', 'josefa@gmail.com')

console.log(listaClientes());

// Promesas en errores con Promise.any()

const promesa1 = Promise.reject("Error!!");
const promesa2 = Promise.resolve("Exito!!");

Promise.any([promesa1, promesa2])
.then(resultado => console.log("Primera Exitosa:", resultado))
.catch(error => console.error("Todos Fallaron:", error));
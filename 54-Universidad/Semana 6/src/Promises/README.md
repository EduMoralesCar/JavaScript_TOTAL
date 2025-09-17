# Promises (Promesas) en JavaScript

## ¿Qué es una Promesa?

Una **promesa** es un objeto en JavaScript que representa la eventual finalización (o falla) de una operación asíncrona y su resultado. Permite escribir código asíncrono de manera más clara y manejable que usando solo callbacks.

## Los 3 estados de una Promesa

Una promesa puede estar en uno de estos tres estados:

1. **Pending (Pendiente):**  
   La operación aún no ha terminado, ni se ha resuelto ni se ha rechazado.

2. **Fulfilled (Cumplida/Resuelta):**  
   La operación se completó exitosamente y la promesa tiene un resultado.

3. **Rejected (Rechazada):**  
   La operación falló y la promesa tiene una razón del fallo (un error).

## ¿Por qué usar Promesas?

- Permiten manejar operaciones asíncronas de forma más legible y estructurada.
- Evitan el "callback hell" (anidamiento excesivo de callbacks).
- Facilitan el manejo de errores y el encadenamiento de acciones usando `.then()` y `.catch()`.
- Son la base para trabajar con `async` y `await` en JavaScript moderno.

## Ejemplo básico

```javascript
const promesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve("¡Operación exitosa!");
    } else {
        reject("Ocurrió un error.");
    }
});

promesa
    .then(resultado => {
        console.log(resultado); // Se ejecuta si la promesa se resuelve
    })
    .catch(error => {
        console.log(error); // Se ejecuta si la promesa es rechazada
    });
```

## Resumen

Las **promesas** son una herramienta fundamental para manejar código asíncrono en JavaScript, permitiendo escribir código más limpio, fácil de leer y de mantener.
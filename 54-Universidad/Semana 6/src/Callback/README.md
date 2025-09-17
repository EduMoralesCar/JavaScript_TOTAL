# Callback en JavaScript

## ¿Qué es un Callback?

Un **callback** es una función que se pasa como argumento a otra función y que se ejecuta después de que ocurre algún evento o se completa una tarea.  
En otras palabras, es una función que "llama de vuelta" cuando algo ha terminado.

## ¿Para qué sirve un Callback?

Los callbacks se utilizan principalmente para:
- Ejecutar código después de que una operación asíncrona (como leer un archivo, hacer una petición HTTP, o esperar un temporizador) ha terminado.
- Permitir que una función sea más flexible y reutilizable, ya que puedes decidir qué hacer después de que termine su tarea principal.
- Manejar eventos, como clics de usuario o respuestas de servidores.

## Ejemplo básico

```javascript
function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback();
}

function despedir() {
    console.log("Adiós!");
}

saludar("Edu", despedir);
// Salida:
// Hola, Edu
// Adiós!
```

En este ejemplo, `despedir` es un callback que se ejecuta después de saludar.

## Resumen

Un **callback** es una función que se pasa como argumento a otra función para ser ejecutada después de que ocurra una acción específica. Son fundamentales en JavaScript, especialmente para trabajar con código asíncrono y eventos.
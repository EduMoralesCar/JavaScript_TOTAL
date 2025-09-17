# Resumen de Node, Deno y Programación Asíncrona en JavaScript

<p align="center">
  <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="80"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://deno.com/logo.svg" alt="Deno Logo" width="80"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" width="60"/>
</p>

---

## 🟢 ¿Qué es Node?
<img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="40" align="left" style="margin-right: 10px;"/>
**Node.js** es un entorno de ejecución para JavaScript fuera del navegador, basado en el motor V8 de Google Chrome. Permite crear aplicaciones del lado del servidor, herramientas de línea de comandos y servicios de red de manera eficiente y escalable.

<br clear="left"/>

---

## 🦕 ¿Qué es Deno?
<img src="https://deno.com/logo.svg" alt="Deno Logo" width="40" align="left" style="margin-right: 10px;"/>
**Deno** es un entorno de ejecución para JavaScript y TypeScript creado como una evolución de Node.js. Ofrece mayor seguridad, soporte nativo para TypeScript y un sistema de permisos más estricto, buscando solucionar limitaciones de Node.js.

<br clear="left"/>

---

## ❓ ¿Por qué Deno no tuvo tanto éxito como Node?
<img src="https://cdn-icons-png.flaticon.com/512/189/189792.png" alt="Question" width="40" align="left" style="margin-right: 10px;"/>
Deno no alcanzó la popularidad de Node.js principalmente por la gran comunidad y ecosistema ya existente de Node, la falta de compatibilidad con módulos de Node (npm), la dificultad de migración de proyectos y la madurez alcanzada por Node.js en el mercado.

<br clear="left"/>

---

## ⚡ ¿Qué es la programación asíncrona?
<img src="https://cdn-icons-png.flaticon.com/512/545/545680.png" alt="Async" width="40" align="left" style="margin-right: 10px;"/>
La **programación asíncrona** permite ejecutar tareas que pueden tardar (como acceder a archivos o servidores) sin detener el flujo principal del programa, haciendo que las aplicaciones sean más rápidas y responsivas.

<br clear="left"/>

---

## 🔄 Mecanismos asíncronos en JavaScript

<table>
  <tr>
    <td align="center"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" width="40"/><br/>Callbacks</td>
    <td align="center"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="40"/><br/>Promises</td>
    <td align="center"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" width="40"/><br/>Async/Await</td>
  </tr>
</table>

- **Callbacks:** Funciones que se pasan como argumento y se ejecutan cuando una tarea asíncrona termina.
- **Promises (Promesas):** Objetos que representan el resultado futuro de una operación asíncrona, facilitando el manejo de acciones y errores.
- **Async / Await:** Palabras clave que permiten escribir código asíncrono de forma más clara y similar al código síncrono, mejorando la legibilidad y el manejo de errores.

---

> **Tip:** Puedes descargar los íconos o usar tus propias imágenes y guardarlas en una carpeta `img/` dentro de tu proyecto, luego cambia las URLs por rutas locales como `img/nodejs.png`.
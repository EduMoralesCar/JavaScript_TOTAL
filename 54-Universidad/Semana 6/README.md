# 📌 Resumen: Node.js, Deno y Programación Asíncrona en JavaScript

<p align="center">
  <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="70"/>
  &nbsp;&nbsp;
  <img src="https://deno.com/logo.svg" alt="Deno Logo" width="70"/>
  &nbsp;&nbsp;
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" width="55"/>
</p>

---

## 🟢 ¿Qué es Node.js?
> **Node.js** es un entorno de ejecución para JavaScript fuera del navegador, basado en el motor V8 de Google Chrome.  
Permite crear aplicaciones del lado del servidor, herramientas de línea de comandos y servicios de red de manera eficiente y escalable.

---

## 🦕 ¿Qué es Deno?
> **Deno** es un entorno de ejecución para JavaScript y TypeScript, creado por el autor original de Node.js como una evolución moderna.  
Ofrece seguridad por defecto, soporte nativo para TypeScript y un sistema de permisos más estricto.

---

## ⚖️ Node.js vs Deno: Comparativa rápida

| Característica         |                           Node.js                            |                  Deno                   |
|------------------------|:------------------------------------------------------------:|:---------------------------------------:|
| **Lenguajes**          | JavaScript                                                   | JavaScript, TypeScript                  |
| **Seguridad**          | Permisos abiertos por defecto                                | Permisos restringidos por defecto       |
| **Gestor de paquetes** | npm                                                          | Incorporado (usa URLs, no npm)          |
| **Compatibilidad**     | Gran ecosistema, módulos npm                                 | Menor compatibilidad con npm            |
| **Instalación**        | Requiere npm                                                 | Binario único, sin instalación extra    |
| **Soporte TypeScript** | Externo                                                      | Nativo                                  |

---

## ❓ ¿Por qué Deno no tuvo tanto éxito como Node.js?
Deno no alcanzó la popularidad de Node.js principalmente por:
- La gran comunidad y ecosistema ya existente de Node.js.
- La falta de compatibilidad directa con módulos npm.
- La dificultad para migrar proyectos existentes.
- La madurez y estabilidad de Node.js en el mercado.

---

## ⚡ ¿Qué es la programación asíncrona?

La **programación asíncrona** permite ejecutar tareas que pueden tardar (como acceder a archivos o servidores) sin detener el flujo principal del programa.  
Esto hace que las aplicaciones sean más rápidas y responsivas.

---

## 🔄 Mecanismos asíncronos en JavaScript

| Mecanismo      | Imagen                                                                 | Descripción                                                                                                                                     |
|----------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **Callbacks**  | <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" width="32"/> | Funciones que se pasan como argumento y se ejecutan cuando una tarea asíncrona termina.                                                         |
| **Promises**   | <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="32"/>   | Objetos que representan el resultado futuro de una operación asíncrona, facilitando el manejo de acciones y errores.                             |
| **Async/Await**| <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" width="32"/> | Palabras clave que permiten escribir código asíncrono de forma clara y similar al código síncrono, mejorando la legibilidad y el manejo de errores.|

---

## 📚 Recursos recomendados

- [Documentación Node.js](https://nodejs.org/es/docs/)
- [Documentación Deno](https://deno.com/manual)
- [MDN Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
- [MDN Async/Await](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await)

---

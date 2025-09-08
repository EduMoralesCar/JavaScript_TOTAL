// Función que recibe un arreglo y un número y retorna cuántas veces aparece el número en el arreglo
function contarOcurrencias(arreglo, numero) {
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
            contador++;
        }
    }
    return contador;
}

// Función que recibe un arreglo y retorna el valor máximo
function encontrarMaximo(arreglo) {
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}

// Función que recibe un arreglo y retorna el valor mínimo
function encontrarMinimo(arreglo) {
    let minimo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < minimo) {
            minimo = arreglo[i];
        }
    }
    return minimo;
}

// Función que recibe un arreglo y retorna la suma de sus elementos
function sumarElementos(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

// Función que recibe un arreglo y retorna el promedio de sus elementos
function calcularPromedio(arreglo) {
    let suma = sumarElementos(arreglo);
    return suma / arreglo.length;
}
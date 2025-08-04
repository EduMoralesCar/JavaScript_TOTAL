// Fizz Buzz...

// 3 6 9 12 15      ...     FIZZ        (multiplos de 3)
// 5 10 15 20 25    ...     BUZZ        (multiplos de 5)
// 15 30 45         ...     FIZZ BUZZ   (multiplos de 15)

for (let i = 1; i <= 50; i++) {

    if (i % 15 === 0) {
        console.log('Numero:', i, 'FIZZ BUZZ') // Es la condición menos comun el que va pasar menos veces
    } else if (i % 5 === 0) {
        console.log('Numero:', i, 'BUZZ')
    } else if (i % 3 === 0) {
        console.log('Numero:', i, 'FIZZ');
    }
}
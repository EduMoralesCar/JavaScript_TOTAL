// Cuando tienes múltiples condiciones por revisar, una forma fácil de leerlo es con un switch...

//const metodoPago = ''; // NO REALIZO EL PAGO
const metodoPago = 'yape';

switch (metodoPago) {

    case 'efectivo':
        console.log(`\nPagaste con ${metodoPago} espere un momento...\n`);
        break;

    case 'cheque':
        console.log(`\nPagaste con ${metodoPago} espere un momento...\n`);
        break;

    case 'tarjeta':
        console.log(`\nPagaste con ${metodoPago} espere un momento...\n`);
        break;

    case 'yape':
        console.log(`\nPagaste con ${metodoPago} espere un momento...\n`)
        break;

    default:
        console.log('\nAún no realizaste el pagado\n');
        break;
}


// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if
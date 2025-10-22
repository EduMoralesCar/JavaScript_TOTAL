
// manda a llamar el componente Saludo en App.js
const Saludo = (prop) => {
    return (
        <div>
            <h1>¡Hola, {prop.nombre}, {prop.apellido}!</h1>
            <h2>Tienes {prop.edad} años.</h2>
        </div>
    );
}

export default Saludo;
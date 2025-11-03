import { useState } from "react";

export function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div className="container text-center mt-5">
            <h2>Contador: {contador}</h2>
            <button className="btn btn-primary mx-2" onClick={incrementar}>Incrementar</button>
            <button className="btn btn-success mx-2" onClick={decrementar}>Decrementar</button>
        </div>
    );
};

export default Contador;

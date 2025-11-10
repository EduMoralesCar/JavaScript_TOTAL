import { useRef } from "react";

const RefHooks = () => {
    const inputRef = useRef(null);
    const resultRef = useRef(null);

    const hacerCosas = () => {
        alert(`Valor del input: ${inputRef.current.value}`);
        resultRef.current.innerText = `Has ingresado: ${inputRef.current.value}`;
    };

    return (
        <div className="container text-center mt-5">
            <h2>Ejemplo de useRef</h2>
            <input type="text" ref={inputRef} placeholder="Escribe algo..." className="form-control my-3" />
            <button className="btn btn-primary" onClick={hacerCosas}>¡Imprimelo acá!</button>
            
            <div ref={resultRef} className="mt-3"></div>
        </div>
    );
}

export default RefHooks;
import React from 'react';

export default function OperacionesNumeros() {
    const [num1, setNum1] = React.useState("");
    const [num2, setNum2] = React.useState("");
    const [resultado, setResultado] = React.useState({});

    const sumar = () => {
        setResultado({
            suma: Number(num1) + Number(num2),
        });

        // Limpiar los campos de entrada después de la suma
        setNum1("");
        setNum2("");
    };

    const restar = () => {
        setResultado({
            resta: Number(num1) - Number(num2),
        });

        // Limpiar los campos de entrada después de la resta
        setNum1("");
        setNum2("");
    }

    return (
        <div>
            <h2 className=' text-center text-primary'>Operaciones con Números</h2>
            <div className='d-flex justify-content-center gap-2 mb-3'>
                <input
                    type="number"
                    value={num1}
                    placeholder="Número 1"
                    onChange={(e) => setNum1(Number(e.target.value))}
                />
                <input
                    type="number"
                    value={num2}
                    placeholder="Número 2"
                    onChange={(e) => setNum2(Number(e.target.value))}
                />

                <button className='btn btn-success' onClick={sumar}>Sumar</button>
                <button className='btn btn-danger' onClick={restar}>Restar</button>
            </div>
            <div>
                {resultado.suma !== undefined && (
                    <div className='text-center'>
                        <h3>Resultados</h3>
                        <p>Suma: {resultado.suma}</p>
                    </div>
                )}
                {resultado.resta !== undefined && (
                    <div className='text-center'>
                        <h3>Resultados</h3>
                        <p>Resta: {resultado.resta}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

import React from 'react';

export default function Temporizador() {
  const [segundos, setSegundos] = React.useState(0);
  const intervaloRef = React.useRef(null);
  const [isRunning, setIsRunning] = React.useState(false);

  const startTemporizador = () => {
    if (intervaloRef.current !== null) return; // ya está corriendo
    intervaloRef.current = setInterval(() => {
      setSegundos(prev => prev + 1);
    }, 1000);
    setIsRunning(true);
  };

  const detenerTemporizador = () => {
    if (intervaloRef.current !== null) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
    setIsRunning(false);
  };

  const reiniciarTemporizador = () => {
    // Reinicia a 0 y arranca de nuevo
    setSegundos(0);
    if (intervaloRef.current !== null) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
    startTemporizador();
  };

  // Iniciar automáticamente al montar (opcional)
  React.useEffect(() => {
    startTemporizador(); // Inicia al montar
    return () => {
      if (intervaloRef.current !== null) {
        clearInterval(intervaloRef.current);
        intervaloRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <h2>Temporizador</h2>
      <p>Tiempo transcurrido: {segundos} segundos</p>

      <div style={{ marginTop: 8 }}>
        <button
          className='btn btn-primary mx-2'
          onClick={reiniciarTemporizador}
        >
          Reiniciar
        </button>

        <button
          className='btn btn-danger mx-2'
          onClick={detenerTemporizador}
          disabled={!isRunning}
        >
          Detener
        </button>

        <button
          className='btn btn-success'
          onClick={startTemporizador}
          disabled={isRunning}
        >
          Reanudar / Iniciar
        </button>
      </div>
    </div>
  );
}
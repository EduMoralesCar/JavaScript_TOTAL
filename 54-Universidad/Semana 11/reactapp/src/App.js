import './App.css';
import './index.css';
import './componente';
import Componente from './componente';

function App() {
  return (
    <div class="container mt-4">
      <h1 class = "text-center fw-bold">Hola Mundo React!</h1>
      <Componente />
      <button className="btn-center btn btn-primary" onClick={() => alert('¡Hola Mundo!')}>Click Me!</button>
    </div>
    
  );
}

export default App;

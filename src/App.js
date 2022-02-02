import './app.css'


function App() {
  return (
   <div className="app">
    <h1>Calculadora IMC</h1>
    <span>Vamos Calcular seu IMC</span>
    
    <div className="area-input">
      <input 
      type="text"
      placeholder="Peso em (Kg) Ex: 90"
      />
      <input 
      type="text"
      placeholder="Altura em (cm) Ex: 180"
      />

      <button>
        Calcular
      </button>
     
    </div>

    <h2>Seu IMC foi 25, você está abaixo do Peso!</h2>

    
    </div>

   
  );
}

export default App;

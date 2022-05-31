import './App.css';
import  Boton from './componentes/Boton';
import  Contador from './componentes/Contador';
import logo from './imagenes/logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
         <img 
          className='logo'
          src={logo}
          alt='Logo de aplicación'
          />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numclics={numClics} 
        />
        <Boton 
          texto= 'Click'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto= 'Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

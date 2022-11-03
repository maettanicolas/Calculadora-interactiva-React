import "./App.css";
import "./hojas-de-estilo/Pantalla.css";
import "./hojas-de-estilo/Boton.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import logopc from "./Imaganes/logopc.png";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valorinpuit) => {
    setInput(input + valorinpuit);
  };

  const funcionCalcular = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese un valor");
    }
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <h1 className="logo-titulo">Proyecto: calculadora interactiva</h1>
        <img src={logopc} className="calculadora-logo" alt="Logo calculadora" />
      </div>
      <div className="contenedor-calculadora">
        <div class="title-bar">
          <div class="title-bar-text">Calculadora interactiva</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={funcionCalcular}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

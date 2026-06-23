import "./App.css";
import Display from "./Display.jsx";
import Teclado from "./Teclado.jsx";
import { useState } from "react";

function App() {
  const [equacao, setequacao] = useState("");

  function calcularequacao() {}

  const aoClicar = (valor) => {
    if (valor === "C") {
      setequacao("");
    } else if (valor === "BACK") {
      setequacao(equacao.slice(0, -1));
    } else if (valor === "=") {
      calcularequacao();
    } else {
      setequacao(equacao + valor);
    }
  };

  return (
    <div id="calculadora">
      <Display valor={equacao} />
      <Teclado aoClicar={aoClicar} />
    </div>
  );
}

export default App;

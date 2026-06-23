import "./App.css";
import Display from "./Display.jsx";
import Teclado from "./Teclado.jsx";
import { useState } from "react";

function App() {
  const [equacao, setequacao] = useState("");

  const aoClicar = (valor) => {
    setequacao(equacao + valor);
  };

  return (
    <div id="calculadora">
      <Display valor={equacao} />
      <Teclado aoClicar={aoClicar} />
    </div>
  );
}

export default App;

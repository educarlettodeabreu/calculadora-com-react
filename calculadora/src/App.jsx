import "./App.css";
import Display from "./Display.jsx";
import Teclado from "./Teclado.jsx";
import { useState } from "react";
import { Calcularequacao } from "./Calcularequacao.js";
import Historico from "./Historico.jsx";
function App() {
  const [equacao, setequacao] = useState("");
  const [historico, sethistorico] = useState([]);

  const aoCarregar = (conta) => {
    setequacao(conta);
  };

  const aoClicar = (valor) => {
    if (valor === "C") {
      setequacao("");
    } else if (valor === "BACK") {
      setequacao(equacao.slice(0, -1));
    } else if (valor === "=") {
      if (
        /[+\-*/^]{2,}/.test(equacao) ||
        /^[+\-*/^]/.test(equacao) ||
        /[+\-*/^]$/.test(equacao)
      ) {
        setequacao("Erro: Equação inválida");
        setTimeout(() => setequacao(""), 800);
        return;
      }
      const resultado = Calcularequacao(equacao);
      sethistorico([...historico, { conta: equacao, res: resultado }]);
      setequacao(resultado);
    } else {
      setequacao(equacao + valor);
    }
  };

  return (
    <div id="calculadora">
      <Display valor={equacao} />
      <Teclado aoClicar={aoClicar} />
      <Historico registros={[...historico]} aoCarregar={aoCarregar} />
    </div>
  );
}

export default App;

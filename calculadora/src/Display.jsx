import "./Display.css";
function Display(props) {
  return (
    <div id="display">
      <p>{props.valor || 0}</p>
      <button
        id="btn"
        className="funcao"
        onClick={() => props.mostrarhistorico()}
      >
        Historico
      </button>
      <button
        id="BACK"
        className="funcao"
        onClick={() => props.aoClicar("BACK")}
      >
        BACK
      </button>
      <button id="C" className="funcao" onClick={() => props.aoClicar("C")}>
        C
      </button>
    </div>
  );
}

export default Display;

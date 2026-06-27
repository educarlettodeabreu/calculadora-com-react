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
    </div>
  );
}

export default Display;

import "./Teclado.css";
function Teclado(props) {
  const tipos = {
    "√": "operador",
    "^": "operador",
    "+": "operador",
    "-": "operador",
    "*": "operador",
    "/": "operador",
    "=": "igual",
    "(": "operador",
    ")": "operador",
  };
  const botoes = [
    "(",
    ")",
    "√",
    "^",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
    "+",
  ];
  return (
    <div className="grid">
      {botoes.map((num) => (
        <button
          key={num}
          className={tipos[num] || `numero`}
          onClick={() => props.aoClicar(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Teclado;

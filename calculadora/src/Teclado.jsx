function Teclado(props) {
  const botoes = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "+",
    "*",
    "/",
  ];
  return (
    <div className="grid">
      {botoes.map((num) => (
        <button key={num} onClick={() => props.aoClicar(num)}>
          {num}
        </button>
      ))}
    </div>
  );
}

export default Teclado;

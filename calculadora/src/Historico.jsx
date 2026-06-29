import "./Historico.css";
function Historico(props) {
  const registros = props.registros;
  return (
    <div id="historico">
      {registros.length > 0 ? (
        <ul>
          {registros.map((item, index) => (
            <li key={index} onClick={() => props.aoCarregar(item.conta)}>
              {item.conta}={item.res}
            </li>
          ))}
        </ul>
      ) : (
        <p className="msg">Não há nada no histórico ainda.</p>
      )}
    </div>
  );
}
export default Historico;

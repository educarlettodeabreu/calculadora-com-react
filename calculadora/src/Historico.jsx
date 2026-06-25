import "./Historico.css";
function Historico(props) {
  const registros = props.registros;
  return (
    <div id="historico">
      <ul>
        {registros.map((item, index) => (
          <li key={index} onClick={() => props.aoCarregar(item.conta)}>
            {item.conta}={item.res}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Historico;

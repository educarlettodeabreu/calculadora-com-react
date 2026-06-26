import "./Display.css";
function Display(props) {
  return (
    <div id="display">
      <p>{props.valor || 0}</p>
    </div>
  );
}

export default Display;

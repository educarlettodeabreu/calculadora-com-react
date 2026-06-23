function Display(props) {
  return (
    <div>
      <p>{props.valor || 0}</p>
    </div>
  );
}

export default Display;

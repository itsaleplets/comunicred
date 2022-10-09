import "../style/Input.css"

function Input(props) {
  return (
    <input className="input input-common" placeholder={props.text} type={props.type} />
  );
}

function SmallInput(props) {
  return (
    <input className="input smallInput-common" placeholder={props.text} type={props.type} />
  );
}
export { Input, SmallInput };
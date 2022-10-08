import "../style/Input.css"

function Input(props) {
  return (
    <input className="input-common" placeholder={props.text} type={props.type} />
  );
}

export default Input;
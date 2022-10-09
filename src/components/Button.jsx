import "../style/Button.css"
import { useHistory } from "react-router-dom"

function GreenButton(props) {
	const history = useHistory();

	const handleClick = (props) => {
		if (props.path) {
			history.push(props.path)
		} else {
			props.function()
		}
	}
	return (
		<div className="buttonDiv">
			<button  type="submit" className="greenButton" onClick={() => handleClick(props)}>
				{props.text}
			</button>
		</div>
	);
}

function WhiteButton(props) {
	return (
		<div className="buttonDiv">
			<button type="submit" className="whiteButton">
				{props.text}
			</button>
		</div>
	);
}

export  { GreenButton, WhiteButton };
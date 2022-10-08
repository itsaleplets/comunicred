import "../style/Button.css"

function GreenButton(props) {
	return (
		<div className="buttonDiv">
			<button  type="submit" className="greenButton" onClick={props.userAuthentication}>
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

export  { GreenButton,WhiteButton };
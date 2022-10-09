import "../style/Box.css"
import { useHistory } from "react-router-dom"
import arrow from "../images/arrow.png"

function BigBox(props) {
	const history = useHistory();

	return (
		<div className="bigBox box">
		    <h3>Parcela atual: R$ 120,00 </h3>
            <p>Vencimento: 30 de outubro</p>
            <p className="grey">Crédito disponível: R$ 770,00</p>
            <hr></hr>
            <div>
                <span onClick={() => history.push(props.path)}>Ver meus empréstimos</span>
                <img src={arrow} width="8px"/>
            </div>
		</div>
	);
}

function SmallBox(props) {
	return (
		<div className="smallBox box">
            <img src={props.src} width="24px" />
			<p>{props.text}</p>
		</div>
	);
}

export  { BigBox, SmallBox };
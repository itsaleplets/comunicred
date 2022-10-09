import "../style/Box.css"
import { useHistory } from "react-router-dom"
import arrow from "../images/arrow.png"
import blackArrow from "../images/black-arrow.png"

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
	const history = useHistory();

	return (
		<div className="smallBox box" onClick={() => history.push(props.path)}>
            <img src={props.src} width="24px" />
			<p>{props.text}</p>
		</div>
	);
}

function TextBox() {
	return (
		<div className="box textBox">
            <h3>Saldo: R$ 200,00 </h3>
            <p>Total de entradas: R$ 700,00</p>
            <p>Total de saídas: R$ 500,00</p>
		</div>
	);
}

function ImageBox(props) {
	const history = useHistory();
	return (
		<div className="bigBox box imageBox">
            <img src={props.src} />
			<div>
				<p className="bold">{props.title}</p>
				<p className="grey">{props.info}</p>
			</div>
			{/* <img src={blackArrow} /> */}
		</div>
	);
}

export  { BigBox, SmallBox, TextBox, ImageBox };
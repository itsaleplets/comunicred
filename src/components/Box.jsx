import "../style/Box.css"
import arrow from "../images/arrow.png"

function BigBox() {
	return (
		<div className="bigBox box">
		    <h3>Parcela atual: R$ 120,00 </h3>
            <p>Vencimento: 30 de outubro</p>
            <p>Crédito disponível: R$ 770,00</p>
            <hr></hr>
            <div>
                <span>Ver meus empréstimos</span>
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
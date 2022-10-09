import { BigBox } from '../components/Box';
import Header from '../components/Header';
import '../style/Loans.css'
import arrow from "../images/arrow.png"


function Loans() {

	return (
		<div className='loans'>
			<Header text="MEUS EMPRÉSTIMOS" />
			<BigBox />
			<div className="loan">
				<h3>Você tem 1 empréstimo ativo </h3>
				<hr></hr>
				<p>Empréstimo Nº 1 - 01/05/2022 </p>
				<p>Valor: R$ 1.000,00</p>
				<p className='grey'>Status: Faltam 04 parcelas de R$ 120,00</p>
				<hr></hr>
				<div>
					<span>Ver histórico</span>
				</div>
			</div>
			<div className="nextPayment">
				<h3>Próximas Parcelas</h3>
				<hr></hr>
				<div>
					<span>Outubro</span>
					<span>R$ 120,00
						<img src={arrow} />
					</span>
				</div>
				<hr></hr>
				<div>
					<span>Novembro</span>
					<span>R$ 120,00
						<img src={arrow} />
					</span>
				</div>
				<hr></hr>
				<div>
					<span>Dezembro</span>
					<span>R$ 120,00
						<img src={arrow} />
					</span>
				</div>
				<hr></hr>

			</div>
		</div>

	);
}

export default Loans;
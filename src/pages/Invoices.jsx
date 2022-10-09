import { GreenButton } from '../components/Button';
import Header from '../components/Header';
import Invoice from '../components/Invoice';
import '../style/Invoices.css'

function Invoices() {
	return (
		<div className='invoices'>
			<Header text="NOTAS FISCAIS" />
			<div className='months'>
				<h3>Histórico de notas</h3>
				<div>
					<button>Julho</button>
					<button style={{backgroundColor:'#63C832'}}>Agosto</button>
					<button>Setembro</button>
					<button>Outubro</button>
				</div>
			</div>
			<Invoice />
			<Invoice />
			<Invoice />
			<div className='invoiceButton'>
				<GreenButton text="+ INCLUIR NOVA NOTA"/>
			</div>
		</div>

	);
}

export default Invoices;
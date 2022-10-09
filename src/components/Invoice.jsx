import '../style/Invoice.css'

function Invoice() {
	return (
		<div className='invoice grey'>
			<p>Mercadinho São Luiz</p>
			<p>Nº 2345 5671 1567 3137 2345 5671 1567 3137</p>
			<p className='dark'>Valor: R$ 56,43</p>
			<p>19/08/22 - às 14:22</p>
		</div>

	);
}

export default Invoice;
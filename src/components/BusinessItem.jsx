import '../style/BusinessItem.css'

function BusinessItem(props) {

	return (
		<div className='item grey'>
            <div className='dark'>
			    <p>Tipo: {props.type} </p>
                <p>{props.value}</p>
            </div>
			<p>Descrição:</p>
            <p>Data: {props.date}</p>
		</div>

	);
}

export default BusinessItem;
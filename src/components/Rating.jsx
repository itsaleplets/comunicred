import '../style/Rating.css'

function Rating() {

	return (
		<div className='evaluation'>
				<p>SUA AVALIAÇÃO ESTÁ: "BOA"</p>
				<div className="progress">
					<div className="progress-done" style={{ width: `${73}%` }}>
						<span className="progressText">
							{73}
						</span>
					</div>
				</div>
				<p>Frase motivacional para continuar pagando</p>
		</div>
	);
}

export default Rating;
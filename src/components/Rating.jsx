import '../style/Rating.css'

function Rating() {

	return (
		<div className='evaluation'>
				<p>SUA AVALIAÇÃO ESTÁ: <b>"BOA"</b></p>
				<div className="progress">
					<div className="progress-done" style={{ width: `${73}%` }}>
						<span className="progressText">
							{73}
						</span>
					</div>
				</div>
				<p>Toda caminhada começa com um passo.</p>
		</div>
	);
}

export default Rating;
import React, { useEffect, useState } from 'react';
import '../style/Rating.css'

function Rating(props) {
	const [rate, setRate] = useState('');

	const rating = () => {
		if(props.rate >= 80) {
			setRate("ÓTIMA")
		} else if (props.rate >= 60 && props.rate <= 79) {
			setRate("BOA")
		} else {
			setRate("BAIXA")
		}
	}

	useEffect(() => {
		rating()
	}, [])

	return (
		<div className='evaluation'>
				<p>{props.text}: <b>"{rate}"</b></p>
				<div className="progress">
					<div className="progress-done" style={{ width: `${props.rate}%` }}>
						<span className="progressText">
							{props.rate}
						</span>
					</div>
				</div>
				<p className='italic'>Toda caminhada começa com um passo.</p>
		</div>
	);
}

export default Rating;
import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import '../style/Member.css'
import coin from '../images/coin01.svg';

function Member(props) {
    const [src, setSrc] = useState('');

    function loadImage(name) {
		import(`../images/${name}.png`)
		  .then(image => {
			console.log(image.default);
			setSrc(image.default);
		  })
		  .catch((error) => <Redirect to="/" />);
	}

    useEffect(() => {
		loadImage(props.member.nome)
	}, [])

	return (
		<section className='member'>
            <div>
                <img src={src}/>
                <p className='memberName'>{props.member.nome}</p>
            </div>
            <div className='coin'>
                <img src={coin} width="30px"/>
                <p>{props.member.moedas}</p>
            </div>
		</section>
	);
}

export default Member;
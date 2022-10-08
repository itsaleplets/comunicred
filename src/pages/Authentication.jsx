import '../style/SplashScreen.css';
import React, { useContext } from 'react';
import SplashScreen from './SplashScreen';
import Context from '../services/context/Context';

function Authentication() {
	const { splashScreen, showSplashScreen } = useContext(Context); 

	setTimeout(() => {
		showSplashScreen();
	}, 4000)

	return (
		<div>
			{ splashScreen ? <SplashScreen /> : <div>oi</div> }
		</div>
	);
}

export default Authentication;
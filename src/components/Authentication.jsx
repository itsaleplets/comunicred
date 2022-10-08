// import '../style/SplashScreen.css';
import React, { useContext } from 'react';
import SplashScreen from '../pages/SplashScreen';
import Context from '../services/context/Context';
import Login from '../pages/Login';

function Authentication() {
	const { splashScreen, showSplashScreen } = useContext(Context); 

	setTimeout(() => {
		showSplashScreen();
	}, 1000)

	return (
		<div>
			{ splashScreen ? <SplashScreen /> : <Login /> }
		</div>
	);
}

export default Authentication;
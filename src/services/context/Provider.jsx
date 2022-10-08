import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
	const [splashScreen, setSplashScreen] = useState(true);
	const [authentication, setAuthentication] = useState(false);


	const showSplashScreen = () => {
		setSplashScreen(false)
	}

	const userAuthentication = () => {
		setAuthentication(true)
	}

	const contextValue = {
		splashScreen,
		showSplashScreen,
		authentication,
		userAuthentication,
	};

	return (
		<Context.Provider value={ contextValue }>
			{ children }
		</Context.Provider>
	);
}

export default Provider;
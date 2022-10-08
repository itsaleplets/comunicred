import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
	const [splashScreen, setSplashScreen] = useState(true);

	const showSplashScreen = () => {
		setSplashScreen(false)
	}
	const contextValue = {
		splashScreen,
		showSplashScreen,
		
	};
	return (
		<Context.Provider value={ contextValue }>
			{ children }
		</Context.Provider>
	);
}

export default Provider;
import React, { useState } from 'react';
import Context from './Context';
import api from '../api/comunicred_full_json.json'

function Provider({ children }) {
	const [splashScreen, setSplashScreen] = useState(true);
	const [authentication, setAuthentication] = useState(false);
	const [data, setData] = useState(api)


	const showSplashScreen = () => {
		setSplashScreen(false)
	}

	const userAuthentication = () => {
		setAuthentication(true)
	}

	const addData = (newData) => {
		setData(newData)
	}

	const contextValue = {
		splashScreen,
		showSplashScreen,
		authentication,
		userAuthentication,
		api,
		addData
	};

	return (
		<Context.Provider value={ contextValue }>
			{ children }
		</Context.Provider>
	);
}

export default Provider;
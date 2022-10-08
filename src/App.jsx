import React, { useContext } from 'react';
// import Provider from './services/context/Provider'
import Context from './services/context/Context';
import Home from './pages/Home'
import Login from './pages/Login'
import Authentication from './components/Authentication';

function App() {
	const { authentication } = useContext(Context); 

  return (
    <>
			{ authentication ? <Home /> : <Authentication /> }
    </>
  );
}

export default App;

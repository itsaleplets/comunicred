import React, { useContext } from 'react';
import Context from './services/context/Context';
import Home from './pages/Home'
import Authentication from './components/Authentication';

function App() {
	const { authentication } = useContext(Context); 

  return (
    <div>
			{ authentication ? <Home /> : <Authentication /> }
    </div>
  );
}

export default App;

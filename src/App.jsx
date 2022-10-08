import React from 'react';
import Provider from './services/context/Provider'
import Home from './pages/Home'
import Authentication from './pages/Authentication';

function App() {
  return (
    <Provider>
      <Authentication />
      <Home />
    </Provider>
  );
}

export default App;

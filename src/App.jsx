import React, { useContext } from 'react';
import Context from './services/context/Context';
import Home from './pages/Home'
import Authentication from './components/Authentication';
import Loans from './pages/Loans';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  const { authentication } = useContext(Context);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authentication ? Home : Authentication} />
        <Route path="/home" component={ Home } />
        <Route path="/loans" component={ Loans } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

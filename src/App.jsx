import React, { useContext } from 'react';
import Context from './services/context/Context';
import Home from './pages/Home'
import Authentication from './components/Authentication';
import Loans from './pages/Loans';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Invoices from './pages/Invoices';
import MyBusiness from './pages/MyBusiness';
import NewItem from './pages/NewItem';

function App() {
  const { authentication } = useContext(Context);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={authentication ? Home : Authentication} />
        <Route path="/home" component={ Home } />
        <Route path="/loans" component={ Loans } />
        <Route path="/invoices" component={ Invoices } />
        <Route path="/my-business" component={ MyBusiness } />
        <Route path="/new-item" component={ NewItem } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

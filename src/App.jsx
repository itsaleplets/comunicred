import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Loans from './pages/Loans';
import Courses from './pages/Courses';
import NewItem from './pages/NewItem';
import Invoices from './pages/Invoices';
import MyBusiness from './pages/MyBusiness';
import Context from './services/context/Context';
import Authentication from './components/Authentication';

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
        <Route path="/courses" component={ Courses } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

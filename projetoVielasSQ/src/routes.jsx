import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homeome';
import {FotoParaCompra} from './pages/Fotoparacompra';
import Thanks from './components/Thanks';
import NotFound from './components/NotFound'; // Create a simple NotFound component if you don't have one

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Fotoparacompra" pages={FotoParaCompra} />
        <Route path="/Thanks" component={Thanks} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;

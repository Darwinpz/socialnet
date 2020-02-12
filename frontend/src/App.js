import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js';


import Navegacion from './components/navegation';
import Main from './components/main';
import Validar from './components/validarcuenta';
import Completar from './components/completaregistro';
import Principal from './components/principal';

function App() {
  return (

    <Router>

      <Navegacion/>

      <div className="container p-3">

        <Route path="/" exact component={Main} />
        <Route path="/:id/validarcuenta" component={Validar} />
        <Route path="/:id/completaregistro" component={Completar} />
        <Route path="/principal" component={Principal} />
                
      </div>


    </Router>

  );
}

export default App;

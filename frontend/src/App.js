import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js';


import Navegacion from './components/navegation';
import Main from './components/main';
import Validar from './components/validarcuenta';
import Completar from './components/completaregistro';

function App() {
  return (

    <Router>

      <Navegacion/>

      <div className="container p-4">

        <Route path="/" exact component={Main} />
        <Route path="/:id/validarcuenta" component={Validar} />
        <Route path="/:id/completaregistro" component={Completar} />

      </div>


    </Router>

  );
}

export default App;

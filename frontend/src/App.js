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
import Mensajes from './components/messages';

function App() {
  return (

    <Router>

      <Navegacion/>

      <div className="container">

        <Route path="/" exact component={Main} />
        <Route path="/:id/validarcuenta" component={Validar} />
        <Route path="/:id/completaregistro" component={Completar} />
        <Route path="/principal" component={Principal} />
        
                
      </div>
      <Route path="/messages" component={Mensajes} />

    </Router>

  );
}

export default App;

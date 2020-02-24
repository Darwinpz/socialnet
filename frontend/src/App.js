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
import Perfil from './components/perfil'

function App() {
  return (

    <Router>

      <Navegacion/>

      <div className="container"  >

        <Route path="/" exact component={Main} />
        <Route path="/principal" component={Principal} />
        <Route path="/validarcuenta/:id" component={Validar} />
        <Route path="/completaregistro/:id" component={Completar} />
        <Route path="/perfil/:id" component={Perfil} />
              
      </div>

    </Router>

  );
}

export default App;

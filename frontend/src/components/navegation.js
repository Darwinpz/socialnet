import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import config from '../metodos/config_session';

import { If, Then, Else } from 'react-if';


import generales from '../metodos/generales';

export default class navegation extends Component {

    state = {

        conectado: false

    }


    async UNSAFE_componentWillMount() {

        await axios.get('http://localhost:4000/api/usuario/estoy_conectado', config)
            .then(res => {

                if (res.data.mensaje) {

                    this.setState({ conectado: true });

                } else {
                    this.setState({ conectado: false });
                    
                }

            }).catch(err => {
                console.log(err);
            });
    }


    render() {

        // this.estoy_conectado();

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top p-1">

                <div className="container">

                    <If condition={this.state.conectado}>
                        <Then>
                            <Link className="navbar-brand" to="/principal">Socialnet</Link>
                        </Then>

                        <Else>
                            <Link className="navbar-brand" to="/">Socialnet</Link>
                        </Else>
                    </If>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <If condition={this.state.conectado}>
                        <div className="collapse navbar-collapse" id="navbarNav">

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contacto">Notificaciones</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contacto">Mensajes</Link>
                                </li>

                                <li className="nav-item dropdown active">
                                    <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">Silvia
                                    <img src={'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg'} width="25" height="25" className="rounded-circle ml-2" alt="" />
                                    </Link>
                                    <div className="dropdown-menu">

                                        <Link className="dropdown-item" to="/">Configurar</Link>
                                        <Link className="dropdown-item" to="" onClick={()=>generales.salir()}>Salir</Link>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </If>

                </div>

            </nav>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navegation extends Component {
    render() {


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-1" style={{position:"sticky",top:0, zIndex:'10'}}>

                <div className="container">
                    <Link className="navbar-brand" to="/">Socialnet</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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
                                    <img src={'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg'} width="25" height="25" className="rounded-circle ml-2" alt=""/>
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/">Configurar</Link>
                                    <Link className="dropdown-item" to="/">Salir</Link>

                                </div>
                            </li>
                        </ul>
                    </div>

                </div>


            </nav>
        )
    }
}

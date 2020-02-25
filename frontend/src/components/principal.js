import React, { Component } from 'react'

import Publicacion from './publicacion'

import Historias from './historias'

import Useritem from './useritem'

import { Link } from 'react-router-dom'

export default class principal extends Component {
    render() {
        return (
            <div className="container" style={{position:"absolute"}}>
                <div className="col">
                    <div className="row">
                        <div className="col-md 4" >
                            <section>
                                <div className="container" style={{ position: "fixed", overflowY: "auto", overflowX: "hidden", width: "21%", height: "80%", marginLeft: "-20px" }}>
                                    <div className="row">
                                        <Link className="nav-link" to="/contacto">Inicio</Link>
                                        <Link className="nav-link" to="/contacto">Marketplace</Link>
                                    </div>
                                    <div className="row">
                                        <h6>Conectados</h6>
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />
                                        <Useritem />

                                    </div>

                                </div>


                            </section>
                        </div>
                        <div className="col-md-8">
                            <section >

                                <Publicacion></Publicacion>
                                <Historias />
                                <Publicacion></Publicacion>

                                <Publicacion></Publicacion>

                                <Publicacion></Publicacion>
                                <Publicacion></Publicacion>

                            </section>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

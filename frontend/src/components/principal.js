import React, { Component } from 'react'

import Publicacion from './publicacion'

import Historias from './historias'

import Usuarios from './usuarios'
import Conectados from './conectados'
import SidePanel from './sidepanel'

export default class principal extends Component {
    render() {
        return (

            <div class="row">
                <div class="col-3 mr-3">
                    <section style={{ position: "relative" }}>
                        <div style={{ position: "fixed" }}>
                            <SidePanel/>
                        </div>
                    </section>
                </div>

                <div class="col-6 mt-3 ml-2">
                    <section style={{ position: "relative" }}>
                        <div>
                            <Publicacion></Publicacion>
                            <Historias/>
                            <Publicacion></Publicacion>
                            <Publicacion></Publicacion>
                            <Publicacion></Publicacion>
                            <Publicacion></Publicacion>
                        </div>
                    </section>
                </div>

                <div class="col-2" >
                    <section style={{ position: "relative" }}>
                        <div style={{ position: "fixed" }}>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}

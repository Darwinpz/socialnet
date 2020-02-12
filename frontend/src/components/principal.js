import React, { Component } from 'react'

import Publicacion from './publicacion'

import Historias from './historias'

import Usuarios from './usuarios'

export default class principal extends Component {
    render() {
        return (

            <div class="row">

                <div class="col">
                    <section style={{ position: "relative"}}>

                        <div style={{ position: "fixed"}}>
                           

                        </div>
                        

                    </section>

                </div>

                <div class="col-6 mt-3">
                    <section style={{ position: "relative"}}>

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

                <div class="col border" style={{borderLeft:"1px solid"}}>
                    <section style={{ position: "relative"}}>

                        <div style={{ position: "fixed"}}>

                            <Usuarios/>

                        </div>

                    </section>
                </div>

            </div>

        )
    }
}

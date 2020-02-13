import React, { Component } from 'react'

import Publicacion from './publicacion'

import Historias from './historias'

import Useritem from './useritem'

export default class principal extends Component {
    render() {
        return (

            <div className="row" style={{position:"absolute"}}>

                <div className="col border-primary" style={{ border: "1px solid" }}>
                    <section style={{ position: "fixed" }}>

                        <h1>HOLA</h1>


                    </section>

                </div>

                <div className="col-6 mt-3" style={{position:"absolute"}}>
                    <section style={{ position: "relative" }}>

                        <Publicacion></Publicacion>
                        <Historias />
                        <Publicacion></Publicacion>

                        <Publicacion></Publicacion>

                        <Publicacion></Publicacion>
                        <Publicacion></Publicacion>

                    </section>
                </div>

                <div className="col border-primary" style={{ border: "1px solid", position:"absolute"}}>

                    <section style={{ position: "fixed"}}>

                        <div className="container mt-1">

                            <small className="text-muted font-weight-bold">conectados</small>

                        </div>

                        <div className="container" style={{position:"fixed",overflowY: "auto",overflowX:"hidden", width: "21%", height: "80%", marginLeft: "-20px" }}>

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
                        

                    </section>

                </div>

            </div>

        )
    }
}

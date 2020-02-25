import React, { Component } from 'react'


import { Link } from 'react-router-dom'

import Publicacion from './publicacion'

export default class perfil extends Component {
    render() {
        return (

            <div className="container mt-5" style={{ position: "absolute" }}>

                <div className="row align-items-center">


                    <div className="col-md-10">

                        <div className="card mt-3">

                            <div className="" style={{ height: "320px", width: "100%", backgroundImage: "url(/portadanueva.jpg)", backgroundSize: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                            </div>


                            <div class="card-img-overlay mt-5">

                                <div className="row align-items-center ml-2">

                                    <img src={'/yo.jpg'} alt="" style={{ height: "168px", width: "168px" }} className="rounded-circle img-thumbnail" />

                                    <h4 className="ml-3 text-white font-weight-bold" style={{ WebkitTextStroke: "1px black", fontSize: "30px" }}>Darwin Pilaloa Zea</h4>

                                </div>

                            </div>


                        </div>

                        <div className="card mb-3">

                            <div className="m-1 bg-white ml-auto">

                                <Link className="btn btn-primary mr-1">Biografía</Link>
                                <Link className="btn btn-warning mr-1">Información</Link>
                                <Link className="btn btn-info mr-1">Amigos</Link>
                                <Link className="btn btn-success mr-1">Fotos</Link>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-4">

                                <div className="card">
                                    
                                    <h5 className="m-2">Detalles</h5>
                                                                       
                                    <div className="card-body text-left">

                                        <p>Estudia en <Link  to="/">Universidad Técnica de Machala</Link> </p>
                                        
                                        <p>Estudió en <Link  to="/">PADRE JULIO MARIA MATOVELLE</Link></p>

                                        <p>Vive en <Link  to="/">Machala</Link></p>

                                        <p>De <Link  to="/">Machala</Link></p>

                                        
                                    </div>

                                    <div className="card-footer">
                                        
                                        <Link to="/">Editar</Link>

                                    </div>


                                </div>

                                <div className="card mt-2">

                                    <h5 className="m-2">Seguidores</h5>

                                    <div className="card-body text-center">

                                        <p>10 personas o sitios</p>

                                    </div>

                                    <div className="card-footer">
                                        
                                        <Link  to="/">Ver todo</Link>

                                    </div>

                                </div>

                                <div className="card mt-2">

                                    <h5 className="m-2">Siguiendo</h5>

                                    <div className="card-body text-center">

                                        <p>10 personas o sitios</p>

                                    </div>

                                    <div className="card-footer">
                                        
                                        <Link  to="/">Ver todo</Link>

                                    </div>

                                </div>

                                <div className="card mt-2">

                                    <h5 className="m-2">Publicaciones</h5>

                                    <div className="card-body text-center">

                                         <p>10 publicaciones o etiquetas</p>

                                    </div>

                                    <div className="card-footer">
                                        
                                        <Link  to="/">Ver todo</Link>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-8">


                                <Publicacion></Publicacion>

                                <Publicacion></Publicacion>

                                <Publicacion></Publicacion>

                                <Publicacion></Publicacion>

                            </div>


                        </div>


                    </div>

                    <div className="col-md-2">

                    </div>

                </div>



            </div>

        )
    }
}

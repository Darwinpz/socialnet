import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import config from '../metodos/config_session';
import axios from 'axios';

import { If } from 'react-if'

import CreatePublication from './CreatePublication'

import Publication from './Publication';

export default class perfil extends Component {


    state = {

        server:"http://172.30.184.204:4000",
        ruta_server: 'http://172.30.184.204:4000/public/usuarios/',
        id_usuario: 'anonimo',
        nombre_completo: '',
        link_portada: 'portada.jpg',
        link_perfil: 'perfil.jpg',
        seguidores: 0,
        seguidos: 0,
        publicaciones: 0,
        amigos: 0,
        id_sesion: '',
        publicaciones: null

    }

    async componentDidMount() {

        const user_id = window.location.pathname.split("/")[2];

        if (user_id != null) {

            const response = await axios.get('http://172.30.184.204:4000/api/usuario/' + user_id, config);

            if (response.data.mensaje) {

                const datos = response.data.datos;

                this.setState({ id_usuario: datos.id_usuario, nombre_completo: datos.nombre + " " + datos.apellido, link_perfil: datos.link_perfil, link_portada: datos.link_portada });

                this.setState({ id_sesion: response.data.id_sesion });

                this.setState({ seguidores: parseInt(datos.total_seguidores), seguidos: parseInt(datos.total_seguidos), amigos: parseInt(datos.total_amigos), publicaciones: parseInt(datos.total_publicaciones) });
                
                this.ver_publicaciones();

            }

        }


    }


    ver_publicaciones = async()=>{


        const response = await axios.get('http://172.30.184.204:4000/api/publicacion/ver_publicaciones', config);

        if (response.data.mensaje) {

            console.log(response.data.datos);

        }


    }

    render() {

        return (

            <div className="container pt-2 col-lg-10 col-md-10 col-sm-12 mt-5 px-lg-5 px-md-5 px-0" >

                <div className="card mt-2">

                    <div style={{ height: "320px", width: "100%", backgroundImage: "url(" + this.state.ruta_server + this.state.id_usuario + "/portada/" + this.state.link_portada + ")", backgroundSize: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                        <If condition={this.state.id_usuario !== this.state.id_sesion}>

                            <div className="card-body" style={{ float: "right" }} >
                                
                                <button className="btn btn-success mr-1" >Seguir</button>
                                <button className="btn btn-primary mr-1" >Enviar Solicitud</button>

                            </div>

                        </If>


                    </div>


                    <div className="card-img-overlay mt-5">

                        <div className="row align-items-center ml-2">

                            <img src={this.state.ruta_server + this.state.id_usuario + "/perfil/" + this.state.link_perfil} alt="" style={{ height: "168px", width: "168px",objectFit:"cover",objectPosition:"center center" }} className="rounded-circle img-thumbnail" />

                            <h4 className="ml-3 text-white font-weight-bold" style={{ WebkitTextStroke: "1px black", fontSize: "30px" }}>{this.state.nombre_completo}</h4>

                        </div>

                    </div>


                </div>

                <div className="card mb-3">

                    <div className="m-1 bg-white ml-auto">

                        <Link className="btn btn-info mr-1" to="">Biografía</Link>
                        <Link className="btn btn-warning mr-1" to="">Información</Link>
                        <Link className="btn btn-secondary mr-1" to="">Amigos</Link>
                        <Link className="btn btn-primary mr-1" to="">Fotos</Link>

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-4">

                        <div className="card">

                            <h5 className="m-2">Detalles</h5>

                            <div className="card-body text-left">

                                <p>Estudia en <Link to="/">Universidad Técnica de Machala</Link> </p>

                                <p>Estudió en <Link to="/">PADRE JULIO MARIA MATOVELLE</Link></p>

                                <p>Vive en <Link to="/">Machala</Link></p>

                                <p>De <Link to="/">Machala</Link></p>


                            </div>

                            <div className="card-footer">

                                <Link to="/">Editar</Link>

                            </div>


                        </div>

                        <div className="card mt-2">

                            <h5 className="m-2">Seguidores</h5>

                            <div className="card-body text-center">

                                <p>{this.state.seguidores} personas o sitios</p>

                            </div>

                            <div className="card-footer">

                                <Link to="/">Ver todo</Link>

                            </div>

                        </div>

                        <div className="card mt-2">

                            <h5 className="m-2">Siguiendo</h5>

                            <div className="card-body text-center">

                                <p>{this.state.seguidos} personas o sitios</p>

                            </div>

                            <div className="card-footer">

                                <Link to="/">Ver todo</Link>

                            </div>

                        </div>

                        <div className="card mt-2 mb-3">

                            <h5 className="m-2">Publicaciones</h5>

                            <div className="card-body text-center">

                                <p>{this.state.publicaciones} publicaciones o etiquetas</p>

                            </div>

                            <div className="card-footer">

                                <Link to="/">Ver todo</Link>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-8">

                        <CreatePublication nombre={this.state.nombre_completo} id_usuario={this.state.id_usuario} link_perfil={this.state.link_perfil} />
                            
                        <Publication 
                                userImage="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                                user="Gabriela Astudillo"
                                etiqueta1="Darwin Pilaloa"
                                etiqueta2="Silvia Cabrera"
                                fechaPublicacion="1 h"
                                textPublicacion="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final."
                                imagenPublicacion="https://4ca2a52t2g0244kzir3456v7-wpengine.netdna-ssl.com/charlotte/wp-content/uploads/sites/3/2014/05/puppy-preschool.jpg"
                                />

                    </div>


                </div>


            </div>

        )
    }
}

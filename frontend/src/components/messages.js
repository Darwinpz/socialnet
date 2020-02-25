import React, { Component } from 'react'

export default class messages extends Component {


    state = {
        search: ""
    }

    onInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value


        })
        console.log(e.target.value)

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3" style={{ borderRight: "1px solid rgb(211,211,211)" }}>
                        <div className="row ml-2 mt-2" >
                            <h3 className="titulo mt-3">Chats</h3>
                        </div>

                        <div className="row-md-3 mt-2" style={{ padding: "5px" }}>
                            <input className="buscar form-control" type="text" style={{ background: "#eee", borderRadius: "40px" }} placeholder="Buscar en mensajes" />
                        </div>

                        <div className="row-md-3 mt-3" style={{ overflowY: "scroll", height: "450px" }}>
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "60px" }} class="time text-muted small small">13:21</span>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "60px" }} class="time text-muted small small">13:21</span>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "60px" }} class="time text-muted small small">13:21</span>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "60px" }} class="time text-muted small small">13:21</span>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "60px" }} class="time text-muted small small">13:21</span>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "60px" }} class="time text-muted small small">13:21</span>
                            </div>
                            <hr className="mt-1" />
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="row" style={{ borderBottom: "1px solid rgb(211,211,211)" }}>
                            <img class="profile-image ml-4 mt-2 mr-2 mb-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px", cursor: "pointer" }} alt="" />
                            <div class="text">
                                <h6 className="usuarioname-chat" style={{ marginTop: "11px", marginBottom: "3px", cursor: "pointer" }}>Robo Cop</h6>
                                <p className="text-muted-chat small" style={{ color: "grey" }}>Activo hace 8min</p>
                            </div>
                           
                        </div>
                        
                        <div className="zona-chat" style={{ overflowY: "scroll", height: "480px", borderBottom: "1px solid rgb(211,211,211)" }}>
                            <ul className="chat mt-4">
                                <li className="him">Hola silvia</li>
                                <li className="me">Hola Robo me gustaría analizar los requerimientos del proceso de titulación mediante la caracterización de las distintas formas de trabajo titulación que ofrece la Universidad Técnica de Machala.</li>
                                <li className="him">Bueno silvia</li>
                                <li className="me">Gracias Robo</li>
                                <li className="me">Te escribo luego men</li>
                                <li className="him">Ya pilas</li>
                                <li className="him">La titulación es un proceso de concreción de competencias profesionales y de investigación, donde el estudiante tiene la oportunidad de demostrar sus conocimientos profesionales siendo de apoyo para la sociedad con trabajos de investigación.</li>
                            </ul>
                        </div>

                        <div className="row">
                            <input className="form-control mt-3 ml-2 mr-5" type="text" style={{ background: "#eee", borderRadius: "40px" }} placeholder="Escribe un mensaje" /> 

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class validarcuenta extends Component {
    render() {
        
    const cardstyle ={
        width:'21.5em',
        margin:'0 auto'

    };
        return (
            <div>
                <div className="container">
                    <div class="card w-75 mt-5" style={cardstyle}>
                        <div class="card-body text-center">
                            <h5 class="card-title">Validación de Cuenta</h5>
                            <p class="card-text">Confírmanos que te pertenece este correo electrónico. Introduce el código del mensaje que hemos enviado a pablo2@gmail.com.</p>
                            <form className="text-center">
                                <div class="form-row text-center">
                                    <div className="col-2">
                                    </div>
                                    <div className="col-5">
                                        <input type="text" class="form-control" placeholder="Código" />
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-primary" type="submit">Validar correo</button>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-2">
                                </div>
                                <div className="col-5">
                                    <Link className="btn btn-link" to="/">Volver a enviar código</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

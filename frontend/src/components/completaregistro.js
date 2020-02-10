import React, { Component } from 'react'

export default class completaregistro extends Component {
    render() {

        const cardstyle ={
            width:'21.5em',
            margin:'0 auto'
    
        };

        return (
            <div>
                <div className="container">
                    <div className="card mt-5 w-75" style={cardstyle}>
                        <div className="card-body">
                            <h5 className="card-title text-center">Completar registro de Correo</h5>
                            <div className="form mt-4">
                                <div className="form-row">
                                    <div className="col-6">
                                            <input type="text" className="form-control" placeholder="Alias" />
                                    </div>
                                    <div className="col-6">
                                            <input type="text" className="form-control" placeholder="Descripción" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

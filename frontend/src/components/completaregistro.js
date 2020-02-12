import React, { Component } from 'react'


export default class completaregistro extends Component {
    
    loadimageprofile(event) {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    };

    loadimageportada(event) {
        const output = document.getElementById('output2');
        output.src = URL.createObjectURL(event.target.files[0]);
    };

    render() {

        const cardstyle ={
            width:'21.5em',
            margin:'0 auto'
    
        };

        const picturstyle={
            'object-fit': 'cover',
            'object-position': 'center center'

        }


        return (
            <div>
                <div className="container">
                    <div className="card mt-1 w-75" style={cardstyle}>
                        <div className="card-body">
                            <h5 className="card-title text-center">Completar registro de Correo</h5>
                            <form className="mt-4">
                                <div className="form-row">
                                    <div className="col-6">
                                            <input type="text" className="form-control" placeholder="Alias" />
                                    </div>
                                    <div className="col-6">
                                            <input type="text" className="form-control" placeholder="Descripción" />
                                    </div>
                                </div>
                                <h6 className="mt-4">Foto de perfil</h6>
                                <div className="form-row mt-4">
                                    <div className="col-6 mt-5">
                                        <input type="file" onChange={this.loadimageprofile.bind(this.event)}/>
                                        
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src="https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg " id="output" alt="" width="200" height="200" style={picturstyle} className="rounded-circle"/>
                                    </div>
                                </div>
                                <h6 className="mt-4">Foto de portada</h6>
                                <div className="form-row mt-4">
                                    <div className="col-6 mt-5">
                                        <input type="file" onChange={this.loadimageportada.bind(this.event)}/>
                                        
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src="https://i.pinimg.com/236x/dd/32/e4/dd32e425983b716ec853e77f165cbfa0.jpg" id="output2" alt="" width="350" height="200" style={picturstyle} />
                                    </div>
                                </div>
                                <div className="form-row mt-5">
                                    <button className="btn btn-primary btn-block" type="submit">Terminar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class sidepanel extends Component {
    render() {
        return (
            <nav className="nav flex-column float-lg-right float-md-right float-xl-right">
                <a className="nav-link active m-2" href="google.com"><i className="fas fa-newspaper mr-3"></i>Noticias</a>
                <a className="nav-link m-2" href="google.com"><i className="fab fa-facebook-messenger mr-3"></i>Mensajería</a>
                <a className="nav-link m-2" href="google.com"><i className="fas fa-store mr-3"></i>Marketplace</a>                
                <a className="nav-link m-2" href="google.com"><i className="fas fa-users mr-3"></i>Grupos</a>
                <a className="nav-link m-2" href="google.com"><i className="fas fa-flag ml-1 mr-3"></i>Páginas</a>
                <a className="nav-link m-2" href="google.com"><i className="fas fa-calendar-check ml-1 mr-3"></i>Eventos</a>                
                <a className="nav-link m-2" href="google.com"><i className="fas fa-bookmark ml-1 mr-3"></i>Guardado</a>
            </nav>
        )
    }
}

import React, { Component } from 'react'

export default class useritem extends Component {
    render() {
        return (
            <button className="btn btn-block rounded-0  pt-1 pb-1 w-100 text-left">
                <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="34" height="34" className="rounded-circle float-left border mr-2" alt="" />
                <div>  
                    <small className="card-text font-weight-normal">Gabriela Astudillo</small>              
                </div>
                
            </button>
        )
    }
}
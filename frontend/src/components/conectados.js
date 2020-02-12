import React, { Component } from 'react'
import UserItem from './useritem'

export default class conectados extends Component {
    render() {
        return(
<div className="col flex-column float-lg-right float-md-right float-xl-right  bg-white">
                <h6 className="bg-light p-2 m-0">CONECTADOS</h6>
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
            </div>
            )
    }
}

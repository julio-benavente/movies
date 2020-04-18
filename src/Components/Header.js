import React, { Component } from 'react'
import './Header.scss'



export default class Header extends Component {
    render() {
        return (
            <div className = "header">
                <nav>
                    <div className="logo">
                        <span className="fal fa-camera-movie"></span>
                        <h1>Movie <span>Planet</span></h1>
                    </div>  
                    <ul className = "nav-list">
                        <li className="nav-link active">Movies</li>
                        <li className="nav-link">TV shows</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
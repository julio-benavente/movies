import React, { Component } from 'react'
import MovieTrack from './MovieTrack'
import './Movies.scss'





export default class Movies extends Component {
    render() {
        return (
            <div className = "movies">
                
                <MovieTrack />

            </div>
        )
    }
}

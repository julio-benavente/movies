import React, { Component } from 'react'
import HeroCard from './HeroCard'
import './Hero.scss'

export default class Hero extends Component {
    render() {
        return (
            <div className = "hero">
                {/* <iframe src = "https://www.youtube.com/embed/5mTCAYdWrO8?controls=0&autoplay=1&mute=1&loop=1&vq=tiny" width="100%" height = "100%" frameborder="0"></iframe> */}
                {/* <div className="overlay"></div> */}

                <div className="heroCardWraper">

                    <HeroCard/>
                </div>                
                
            </div>
        )
    }
}

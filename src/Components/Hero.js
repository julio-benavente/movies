import React, { Component } from 'react'
import HeroCard from './HeroCard'
import './Hero.scss'

export default class Hero extends Component {
    render() {
        return (
            <div className = "hero">
                <div className="heroCardWraper">
                    <HeroCard/>
                </div>                
                
            </div>
        )
    }
}

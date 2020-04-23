import React, { Component } from 'react'
import './Hero.scss'

export default class HeroCard extends Component {
    render() {
        return (
            <div className = "heroCard">
                <div className="cardWraper">
                    <div className="postWraper">
                        <div className="poster"></div>
                        <img src="" alt=""/>
                        <button><span className="fal fa-ticket-alt"></span> Book now</button>

                    </div>
                    <div className="detailsWraper">
                        <h1 className="movieName">
                            The Devil Princess
                        </h1>
                        <div className = "rating">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>

                            587 votes

                        </div>
                        <p className="movieDescription">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ut laudantium molestiae esse earum excepturi distinctio nesciunt ab eius aspernatur, sapiente, voluptatibus nam minus ea debitis corporis laboriosam omnis ducimus.
                        </p>
                        <div className="castWraper">
                            <h2 className="castTitle">
                                Cast:
                            </h2>
                            <div className="cast">
                                <div className="image"></div>
                                <div className="image"></div>
                                <div className="image"></div>
                                <div className="image"></div>
                                <div className="image"></div>
                                <div className="image"></div>
                                <div className="image"></div>
                            </div>
                        </div>
                        <div className="trailer">
                            <h2>Watch Trailer</h2>
                            <button>
                                <span className="fas fa-play-circle"></span>
                                Play Now
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

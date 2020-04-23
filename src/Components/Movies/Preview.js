import React, { Component } from 'react'

export default class Preview extends Component {

    
    render() {
        const {background} = this.props;
        // console.log(background)
        // console.log(this.props)
        return (
        <div className="preview">
            <div className="poster" style = {background}>
                <p className="genere">Horror · Suspenso</p>
            </div>

            <div className="popupPrereview">
                <div className="poster">
                    <div className="overlay"></div>
                    <span className="fas fa-play"></span>
                    <div className="ratingBox">
                        <p className="rating">7.78</p>
                        <p className="votes">3902 <br/> votes</p>
                    </div>
                </div>

                <div className="information">
                    <p className = "title">La chica de humo</p>
                    <p className = "year">2019</p>
                    <p className="genere">Terror · Aventura</p>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus ab tenetur at mollitia quaerat minus iusto aut quibusdam modi.</p>
                </div>
            </div>
        </div>
        )
    }
}

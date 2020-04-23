import React, { Component } from 'react'
import "./Footer.scss"

export default class Footer extends Component {
    render() {
        return (
            <div className = "footer">
                
                <div className="icons">
                    <span className="fab fa-facebook-square"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-instagram"></span>
                    <span className="fab fa-youtube"></span>
                </div>

                <div className = "footerLinks">
                    <span className="footerLink">Terms & Conditions</span>
                    <span className="footerLink">Contact Us</span>
                    <span className="footerLink">Movies</span>
                    <span className="footerLink">Theatres</span>
                    <span className="footerLink">Ratings Information</span>
                    <span className="footerLink">Groups & Events</span>
                    <span className="footerLink">Offers & Promotions</span>
                    <span className="footerLink">Gift Cards</span>
                </div>

                <div className="storeWraper">
                    <div className="store apple">
                        <span className="fab fa-apple"></span>
                        <div className="description">
                            <p>Download on the</p>
                            <p>App store</p>
                        </div>
                    </div>
                    <div className="store google">
                        <span className="fab fa-google-play"></span>
                        <div className="description">
                            <p>Get it on</p>
                            <p>Google play</p>
                        </div>
                    </div>

                </div>

                <div className="copyright">
                    <p>&copy; {(new Date).getFullYear()} movieplaye.movie. All rights reserved.</p>
                </div>
            </div>
        )
    }
}



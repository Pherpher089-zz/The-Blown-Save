import React from 'react';
import Logo from '../imgs/Logo_1500x2100.png';
import Instagram from '../imgs/social_media/Instagram_1.png';
import Facebook from '../imgs/social_media/Facebook_1.png';
import Twitter from '../imgs/social_media/Twitter_1.png'
function HeroSection() {
    return (
        <div className="hero-container">
            <img className = 'hero-img' src={Logo} alt="The Blown Save"/>
            <div className='hero-content'>
                <h1>New Episodes Weekly</h1>
                <h3>some subtext goes here</h3>
                <div className="hero-buttons">
                    <button>Subscribe ></button>
                    <img src={Instagram} alt='insta'/>
                    <img src={Twitter} alt='Twitter'/>
                    <img src={Facebook} alt='FB'/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
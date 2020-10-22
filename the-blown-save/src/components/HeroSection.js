import React from 'react';
import Logo from '../imgs/Logo_1500x2100.png';
import Instagram from '../imgs/social_media/Instagram_2.png';
import Facebook from '../imgs/social_media/Facebook_2.png';
import Twitter from '../imgs/social_media/Twitter_2.png'
function HeroSection() {
    return (
        <div className="hero-container">
            <img className = 'hero-img' src={Logo} alt="The Blown Save"/>
            <div className='hero-content'>
                <h1>New Episodes Weekly</h1>
                <h3>some subtext goes here</h3>
                <div className="hero-buttons">
                    <button>Subscribe ></button>
                    <a href="https://www.instagram.com/theblownsavepodcast/?hl=en">
                        <img src={Instagram} alt='insta'/>
                    </a>
                    <a href="https://twitter.com/blown_save">
                        <img src={Twitter} alt='Twitter'/>
                    </a>
                    <a href="">
                        <img src={Facebook} alt='FB'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
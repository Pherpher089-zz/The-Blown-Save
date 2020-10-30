import React from 'react';
import Logo from '../imgs/Logo_1500x2100.png';
import Instagram from '../imgs/social_media/Instagram_2.png';
import YouTube from '../imgs/social_media/YouTube_2.png';
import Twitter from '../imgs/social_media/Twitter_2.png'
function HeroSection() {
    return (
        <div className="hero-container">
            <img className='hero-img' src={Logo} alt="The Blown Save" />
            <div className='hero-content'>
                <h1>New Episodes Weekly</h1>
                <h3>for sports fans, by sports fans</h3>
                <div className="hero-buttons">
                    <a href="https://www.spreaker.com/show/the-blown-save-podcast" target='blank'>
                        <button>Subscribe ></button>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/theblownsavepodcast/?hl=en">
                        <img src={Instagram} alt='insta' />
                    </a>
                    <a target="_blank" href="https://twitter.com/blown_save">
                        <img src={Twitter} alt='Twitter' />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCXhaOiubzakuGc4YGj_0XSw/featured?view_as=subscriber">
                        <img src={YouTube} alt='YouTube' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
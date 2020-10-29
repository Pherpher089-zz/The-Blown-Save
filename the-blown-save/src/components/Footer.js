import React from "react";
import Instagram from '../imgs/social_media/Instagram_2.png'
import YouTube from '../imgs/social_media/YouTube_2.png'
import Twitter from '../imgs/social_media/Twitter_2.png'

function Footer() {
    return (
        <div className="footer-container">
            <a target="_blank" href="https://www.instagram.com/theblownsavepodcast/?hl=en">
                <img src={Instagram} alt="Instagram" />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCXhaOiubzakuGc4YGj_0XSw/featured?view_as=subscriber">
                <img src={YouTube} alt="YouTube" />
            </a>
            <a target="_blank" href="https://twitter.com/blown_save">
                <img src={Twitter} alt="Twitter" />
            </a>
        </div>
    )
}

export default Footer;
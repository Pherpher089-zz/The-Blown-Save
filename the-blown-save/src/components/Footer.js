import React from "react";
import Instagram from '../imgs/social_media/Instagram_2.png'
import Facebook from '../imgs/social_media/Facebook_2.png'
import Twitter from '../imgs/social_media/Twitter_2.png'

function Footer() {
    return (
        <div className="footer-container">
            <img src={Instagram} alt="Instagram"/>
            <img src={Facebook} alt="Facebook"/>
            <img src={Twitter} alt="Twitter"/>
        </div>
    )
}

export default Footer;
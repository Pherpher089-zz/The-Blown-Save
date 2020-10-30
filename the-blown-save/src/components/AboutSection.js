import React from 'react';
import PlaceHolder from '../imgs/selfie.jpg'
import BretPic from '../imgs/bret_02.jpg'
import ArtiePic from '../imgs/artie_00.jpg'
import BackgroundImg from '../imgs/Hero/About_Background.jpg'
import Instagram from '../imgs/social_media/Instagram_2.png';
import Twitter from '../imgs/social_media/Twitter_2.png'

const background_style = {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}
function AboutSection() {
    return (
        <div className='about-container' style={background_style}>
            <h1 className="about-title">About Us</h1>
            <div className="about-content-container" >
                <div className='left-section'>
                    <h1 className='left-title'>The Blown Save - Started - Feb 28th, 2020</h1>
                    <p className='left-content'> The Blown Save started with a simple idea, “Lets have a few drinks and talk sports”. Together Brent Sanchez & Artie Cassas came together one faithful day in February to try something they had done a million times over, but this time they stuck a mic in between them and set off on a passion project of letting the world know their opinions and have a laugh or two. They did it more for themselves and their close friends but slowly the show has grown and seen that people not only across the nation, but around the world are listening in. It feels good to know that people enjoy hearing us argue and discuss back and forth for an hour or so a week and cant wait to hear what the next week will bring. Artie and Brent lost connection after grade school and didn’t reconnect until one faithful day on the Softball field. The rest, well is history. </p>
                </div>
                <div className='right-section'>
                    <div className='content-group'>
                        <div className='title-text'>
                            <h1 className="right-title"> Brent Sanchez</h1>
                            <p className="right-text">39 year old Marine Corps Combat Veteran, Father and husband. After high school I joined the Marine Corps and traveled the world. Visited many countries, some for pleasure some forced. Never losing touch with how my favorite teams were doing no matter where in the world I would lay my head. Sometimes being in the middle of nowhere, but being able to catch some game, any game, on the A.M. frequencies was like a taste of home even so far away. My love of sports never wavered, and I pass that along to all my kids and watch their love of different aspects of the games become their favorite. Speaking in front of a large crowd was never an issue for me and it would be an easy transition to speak into a mic and enjoy a conversation with a close friend.</p>
                        </div>
                        <div className='img-and-links'>
                            <img src={BretPic} alt="picture" />
                            <div className='social-media-container'>
                                <a target="_blank" href="https://www.instagram.com/bridgetownbs/">
                                    <img className='social-media' src={Instagram} alt='insta' />
                                </a>
                                <a target="_blank" href="https://twitter.com/BridgetownBS">
                                    <img className='social-media' src={Twitter} alt='insta' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='content-group'>
                        <div className='img-and-links'>
                            <img src={ArtiePic} alt="picture" />
                            <div className='social-media-container'>
                                <a target="_blank" href="https://www.instagram.com/titan4vida/">
                                    <img className='social-media' src={Instagram} alt='insta' />
                                </a>
                            </div>
                        </div>
                        <div className='title-text' >
                            <h1 className="right-title bottom">Artie Cassas</h1>
                            <p className="right-text bottom" >At the top of my list there are two things I’m most proud of, being raised in La Puente also known as “Bridgetown” and graduating college from Cal State Fullerton as a Titan. The “happy homes” neighborhood that I grew up in groomed me to become someone that believed in tough love, old school values, and finding a way to succeed by focusing on one thing at a time. I don’t believe in doing things by the “book” and very much think rules were meant to be bent or at least have loopholes built in them.
                            After graduating high school from Workman in 1999, I decided that it would be best to get away from my area and attend/play baseball at East Los Angeles College. In 2001 I blew out my knee and decided to give up playing at the collegiate level to focus on transferring to my dream school. After earning an Associates Degree in Print Journalism from ELAC in the Spring of 2002 I began my journey at CSUF. While pursuing my Bachelors Degree I took on the approach of paying my dues while in college so I can be rewarded when graduation came around. This mindset allowed me to work as a freelance writer for just about every news paper in the Los Angeles County: Whittier Daily News, Long Beach Press Telegram, Pasadena Star News, San Gabriel Valley Tribune, Daily Breeze, Epoch Times and even the SB Daily Bulletin. While attending CSUF I was lucky enough to be mentored by the L.A. Times award winning columnist Bill Plaschke.
                            Even as a Sportswriter I continued pursing my education, a master’s degree from the University of Concordia in Irvine and working occasionally as substitute teacher. That is when two friends that are teachers suggested I go into coaching and teaching. In the spring of 2009, I enrolled in a teaching credential program at Cal Poly Pomona and began my journey as teacher. . During my tenure as a SkyHawk I have coached: football, girls softball, boys soccer, cheer and baseball. In 2015 I was named Fontana Unified District Teacher of the Year thanks in large part to taking a TV-Production class and turning it into an award-winning program.
                            Once my teaching career got started it felt like the rest of my life fell into place, starting with meeting my wife Maria Victoria in the winter of 2011. Since then we got married in 2015, have bought two houses, and have two sons – Leonel Arte and Juan Miguel.

</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection;
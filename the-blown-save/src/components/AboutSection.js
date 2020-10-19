import React from 'react';
import PlaceHolder from '../imgs/selfie.jpg'
function AboutSection() {
    return(
        <div className='about-container'>
            <h1 className="about-title">About Us</h1>
                <div className="about-content-container">
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
                            <img src={PlaceHolder} alt="picture"/>
                        </div>
                        <div className='content-group'>
                            <img src={PlaceHolder} alt="picture"/>
                            <div className='title-text' >
                                <h1 className="right-title bottom">Artie Cassas</h1>
                                <p className="right-text bottom" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default AboutSection;
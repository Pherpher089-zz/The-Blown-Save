import React from 'react';
import PlaceHolder from '../imgs/selfie.jpg'
function AboutSection() {
    return(
        <div className='about-container'>
            <h1 className="about-title">About Us</h1>
                <div className="about-content-container">
                    <div className='left-section'>
                        <h1 className='left-title'>Tag Line Goes Here</h1>
                        <p className='left-content'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='right-section'>
                        <div className='content-group'>
                            <div className='title-text'>
                                <h1 className="right-title">Name 1</h1>
                                <p className="right-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            </div>
                            <img src={PlaceHolder} alt="picture"/>
                        </div>
                        <div className='content-group'>
                            <img src={PlaceHolder} alt="picture"/>
                            <div className='title-text' >
                                <h1 className="right-title">Name 1</h1>
                                <p className="right-text" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default AboutSection;
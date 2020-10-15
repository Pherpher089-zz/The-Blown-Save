import React from 'react';
import BackGround from '../imgs/contact_background_redLaces.png'
function ContactSection (props) {
    return(
        <div className='contact-container'>
            <div className='form-container'>
                <h1 className='contact-title'>Contact Us</h1>
                <form className='contact-form'>
                    <div className='name-email'>
                        <div className='title-field'>
                            <h2>Name</h2>
                            <input type="text"/>
                        </div>
                        <div className='title-field'>
                            <h2>Emial</h2>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='title-field message'>
                        <h2>Message</h2>
                        <textarea type="text"/>
                    </div>
                    <div className='message-buttons'>
                        <button className='submit'>Send Message</button>
                        <button className='reset'>Reset</button>
                    </div>
                </form>
                {/* <div className='social-media'>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>

                </div> */}
            </div>            
        </div>
    )
}

export default ContactSection;
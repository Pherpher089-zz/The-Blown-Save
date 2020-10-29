import React, { useState } from 'react';
import BackGround from '../imgs/contact_background_redLaces.png'

function ContactSection(props) {
    const [email, setEmail] = useState(
        {
            name: '',
            email: '',
            message: '',
        }
    )

    const sendToEmail = "theblownsavepodcast@gmail.com"

    const handleInput = e => {
        setEmail({ ...email, [e.target.name]: e.target.value })
    }

    const reset = (e) => {
        e.preventDefault()
        setEmail({ name: '', email: '', message: '' });
    }

    const handleSubmit = (e) => {
        const templateId = 'template_mayr66f'
        sendFeedback(templateId, { message_html: email.message, from_name: email.name, from_email: email.email, reply_to: sendToEmail })
    }

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'my_gmail', templateId, variables
        ).then(res => {
            console.log('Email successfully sent!')
        }).catch(err => console.error('oh well, you failed. Here are some thoughts on the error that occurred:', err))
    }

    return (
        <div className='contact-container'>
            <div className='form-container'>
                <h1 className='contact-title'>Contact Us</h1>
                <form className='contact-form'>
                    <div className='name-email'>
                        <div className='title-field'>
                            <h2>Name</h2>
                            <input type="text" name='name' placeholder='Name' value={email.name} onChange={handleInput} />
                        </div>
                        <div className='title-field'>
                            <h2>Email</h2>
                            <input type="text" name='email' placeholder='Email' value={email.email} onChange={handleInput} />
                        </div>
                    </div>
                    <div className='title-field message' >
                        <h2>Message</h2>
                        <textarea type="text" name='message' placeholder="message..." value={email.message} onChange={handleInput} />
                    </div>
                    <div className='message-buttons'>
                        <button className='submit' onClick={handleSubmit}>Send Message</button>
                        <button className='reset' onClick={reset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSection;
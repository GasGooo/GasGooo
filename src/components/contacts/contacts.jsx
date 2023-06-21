import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import "./contacts.css"

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kn2br8f', 'template_psaxaih', form.current, 'xTgAZfujgLijdGbGT')
        e.target.reset()
    };

  return (
    <section className="contact_section" id="contact">

        <div className="container">
            
            <div className="contact_container">
                <div className="contact_title">
                    <h3>Contact us ✍🏻</h3>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="contact_form">
                    <div className='wrapper'>
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Your mail</label>
                            <input type="email" name='email' className='contact_form-input' placeholder='John@email.com' />
                        </div>

                        <div className="small-wrapper">
                            <div className="contact_form-pair">
                                <label className="contact_form-tag">Your name</label>
                                <input type="text" name='name' className='contact_form-input' placeholder='John' />
                            </div>
                            <div className="contact_form-pair">
                                <label className="contact_form-tag">Your subject</label>
                                <input type="text" name='subject' className='contact_form-input' placeholder='My cool project is...' />
                            </div>
                        </div>

                        <div className="contact_form-div">
                            <label className="contact_form-tag ">Your Message</label>
                            <textarea name="project" cols= "30" rows="10" className='contact_form-ta' placeholder='Dear GasGoo team ...'></textarea>
                        </div>
                    </div>

                    <button href="#" className="contact_button" type='submit'>
                        <i class="uil uil-arrow-right"/>
                        <p>Send</p>
                    </button>
                </form>
            </div>

            </div>
    </section>
  )
}

export default Contact;
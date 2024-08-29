import React from 'react';
import '../css/contact.css';

function Contact(){
    return (
        <div id='contact'>
            <p className='sectionTitle'>CONTACT ME!</p>            
            <p><i id= "icon" className="fas fa-envelope" title="Email"></i>Email <span className='sec'>vapa.jesusangel@gmail.com</span></p>
            <p><i id= "icon" className="fab fa-whatsapp" title="WhatsApp"></i>WhatsApp <span className='sec'>+1 514 977 07 47</span></p>
            <p><i id= "icon" className="fab fa-linkedin" title="LinkedIn"></i>LinkedIn <a href='https://www.linkedin.com/in/angel-vapa/' className='sec' target="_blank" rel='noreferrer'>/angel-vapa.</a></p>
        </div>
    );
}
export default Contact;
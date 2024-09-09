import React, { useState } from 'react';
import '../css/contact.css';

function Contact(){
    const [copied, setCopied] = useState(false);
    const handleCopyEmail = (e) => {
        const email = 'vapa.jesusangel@gmail.com';
        navigator.clipboard.writeText(email);
        setCopied(true);
          setTimeout(() => {
          setCopied(false);
        }, 2000);
      };
      
    return (
        <div id='contact'>
            <p className='sectionTitle'>CONTACT ME!</p>            
            <p><i id= "icon" className="fas fa-envelope" title="Email"></i>Email <span className='sec email' onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>vapa.jesusangel@gmail.com</span>{copied && <span className="copied-message"> Copied!</span>}
            </p>
            <p><i id= "icon" className="fab fa-whatsapp" title="WhatsApp"></i>WhatsApp <span className='sec'>+1 514 977 07 47</span></p>
            <p><i id= "icon" className="fab fa-linkedin" title="LinkedIn"></i>LinkedIn <a href='https://www.linkedin.com/in/angel-vapa/' className='sec' target="_blank" rel='noreferrer'>/angel-vapa.</a></p>
        </div>
    );
}
export default Contact;
import React from 'react';
import '../css/aboutMe.css';

function AboutMe() {
  return (
    <div id='about'>
      <p className='sectionTitle'>ABOUT ME</p>
      <p>
        I started my professional career in the automotive industry as a CNC machinery and PLC automation programmer at a very early age thanks to the family business.
        Although I still love what I did for so many years, I have always been interested in software programming, so in 2022 I decided to come to Montreal, QC to study and give myself the opportunity to enter this world that quickly became my passion.
      </p>
      <p className='emphText'><strong>I AM CURRENTLY STUDYING MY LAST SEMESTER AND I AM LOOKING FOR AN INTERNSHIP FOR FALL 2024.</strong></p>
      <p>Check out my work experience in detail on <a href='https://www.linkedin.com/in/angel-vapa/' className='link' target="_blank" rel='noreferrer'>LinkedIn.</a></p>
    </div>
  );
}

export default AboutMe;

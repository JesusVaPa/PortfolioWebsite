import React from 'react';
import '../css/education.css';

function Education() {
  return (
    <div id='education'>
      <p className='sectionTitle'>EDUCATION</p>
      <div className='eduBlock'>
        <h1>IT Programmer-Analyst ASC<span className='date'>May 2023 - December 2024</span></h1>
        <span>LaSalle College, Montreal,QC.</span>
      </div>
      <div className='eduBlock'>
        <h1>Electromechanics Engineering<span className='date'>August 2016 - June 2021</span></h1>
        <span>Instituto Tecnologico Nacional De Mexico. Leon, MX.</span>
      </div>
      
    </div>
  );
}

export default Education;
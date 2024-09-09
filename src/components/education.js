import React from 'react';
import '../css/education.css';
import LSClogo from '../media/lasallelogo.jpeg';
import TNMlogo from '../media/tecnmlogo.png';

function Education() {
  return (
    <div id='education'>
      <p className='sectionTitle'>EDUCATION</p>
      <div className='stdBox'>               
        <h1 >IT Programmer-Analyst ASC<span className='date'>May 2023 - December 2024</span></h1>
        <a href='https://lasallecollege.lcieducation.com/' target="_blank" rel='noreferrer' className='emphText' ><span><img src={LSClogo} alt="LSClogo" className="instlogo-img" /></span>LaSalle College, Montreal, QC.</a>
      </div>
      <div className='stdBox'>        
        <h1>Electromechanics Engineering<span className='date'>August 2016 - June 2021</span></h1>
        <a href='https://www.tecnm.mx/' target="_blank" rel='noreferrer' className='emphText'><span><img src={TNMlogo} alt="TNMlogo" className="instlogo-img" /></span>Instituto Tecnologico Nacional De Mexico. Leon, MX.</a>
      </div>                    
    </div>
  );
}

export default Education;



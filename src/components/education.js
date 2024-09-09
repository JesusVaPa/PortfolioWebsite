import React from 'react';
import '../css/education.css';

function Education() {
  return (
    <div id='education' className='container py-5'>
      <p className='sectionTitle'>EDUCATION</p>
        <div className='col-md-8 col-sm-12'>
          <h1 className='text-center'>IT Programmer-Analyst ASC</h1>
          <h2 className='d-flex justify-content-between'>
            LaSalle College, Montreal, QC.
            <span className='date'>May 2023 - December 2024</span>
          </h2>
      </div>
        <div className='col-md-8 col-sm-12'>
          <h1 className='text-center'>Electromechanics Engineering</h1>
          <h2 className='d-flex justify-content-between'>
            Instituto Tecnologico Nacional De Mexico. Leon, MX.
            <span className='date'>August 2016 - June 2021</span>
          </h2>
      </div>      
    </div>
  );
}

export default Education;
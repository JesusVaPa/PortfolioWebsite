import React from 'react';
import '../css/skills.css';

function Skills() {
  return (
    <div id='skills'>
        <p className='sectionTitle'>SKILLS</p>
        <h1>Programming Languages</h1>
        <div className='logoBlock'>
            <i className="devicon-java-plain colored" title="Java">Java</i>
            <i className="devicon-csharp-plain colored" title="C#">C#</i>
            <i className="devicon-javascript-plain colored" title="JavaScript">JavaScript</i>
            <i className="devicon-python-plain colored" title="Python">Python</i>
            <i className="devicon-php-plain colored" title="PHP">PHP</i>
        </div>
        <h1>Web Technologies</h1>
        <div className='logoBlock'>
            <i className="devicon-html5-plain colored" title="HTML5">HTML5</i>
            <i className="devicon-css3-plain colored" title="CSS3">CSS</i>
        </div>
        <h1>Libraries and Frameworks</h1>
        <div className='logoBlock'>
            <i className="devicon-react-plain colored" title="React">React</i>
            <i className="devicon-django-plain colored" title="Django">Django</i>
            <i className="devicon-dotnetcore-plain colored" title=".NET">.NET</i>
        </div>
        <h1>Database Management</h1>
        <div className='logoBlock'>
            <i className="devicon-mysql-plain colored" title="MySQL">MySQL</i>
            <i className="devicon-postgresql-plain colored" title="PostgreSQL">PostgreSQL</i>
            <i className="devicon-oracle-plain colored" title="Oracle">Oracle</i>
        </div>     
        <h1>I am learning...</h1>
        <ul>
            <li>Amazon Web Services online course by <a href='https://midu.dev/' className='link' target="_blank" rel='noreferrer'>Midudev.</a></li>
            <li>The Git & Github Bootcamp by <a href='https://www.udemy.com/user/coltsteele/' className='link' target="_blank" rel='noreferrer'>Colt Steele.</a></li>
            <li>Android Mobile Applications at LaSalle College.</li>
            <li>Web Server at LaSalle College.</li>
        </ul>
    </div>
  );
}
export default Skills;
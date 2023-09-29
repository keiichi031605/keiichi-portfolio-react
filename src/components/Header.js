import React from 'react';

export default function Header({resumeData}) {

  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Experience</a></li>
            <li><a className="smoothscroll" href="#portfolio">Educations</a></li>
            <li><a className="smoothscroll" href="#testimonials">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline mb-5">{resumeData.name}</h1>
            <h3 style={{color:'#fff', fontFamily: 'sans-serif '}}>
              {resumeData.description}
            </h3>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

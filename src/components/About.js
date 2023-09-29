import React from 'react';

export default function About({resumeData}) {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="/images/profile.png" alt="profile" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p> { resumeData.about }</p>
          <div className="row">
            <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{resumeData.name}</span>
                <br></br>
                <span>
                {resumeData.address}
              </span>
              <br></br>
              <span>{resumeData.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

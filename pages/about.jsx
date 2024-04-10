import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="who-we-section">
        <h2>WHO WE ARE?</h2>
        <div className="content-container">
          <div className="image-container">
            <img src="/images/aboutpic.jpg" alt="Who We Are" />
          </div>
          <div className="description-container">
            <p>PIE is a special interest group of IEEE which focuses on curating a vibrant community innovators and entrepreneur.
              Promotion of Innovation and Entrepreneurship, intends to support engineers in pursuing entrepreneurship, have a better understanding of Startups and supports them by giving them access to the right platforms and resources.</p>
          </div>
        </div>
        <div className="member-container">
          <div data-aos="zoom-in-up">
            <div className="noofm">
              <p className="orange-text">30+</p>
              <p className="white-text">Events</p>
            </div>
          </div>
          <div data-aos="zoom-in-up">
            <div className="noofm">
              <p className="orange-text">300+</p>
              <p className="white-text">Participants</p>
            </div>
          </div>
          <div data-aos="zoom-in-up">
            <div className="noofm">
              <p className="orange-text">6</p>
              <p className="white-text">Awards</p>
            </div>
          </div>
        </div>


      </section>

      <section className="mission-section">
        <h2>OUR MISSION</h2>
        <p>Our mission at IEEE PIE is to inspire and support a culture of innovation and entrepreneurship among our members and the wider community.
          We believe in fostering an inclusive, diverse, and sustainable ecosystem of innovation and entrepreneurship that drives positive change for society and the planet.</p>
      </section>

      <section className="vision-section">
        <h2>OUR VISION</h2>
        <p>Our vision for IEEE PIE is to be the leading global platform for innovation and entrepreneurship, empowering individuals to drive positive change through technology and innovation.
          we envision a future where every individual has the tools and support they need to turn their ideas into reality, and where technology is leveraged for the greater good of society and the planet</p>
      </section>
    </div>
  );
}

export default About;

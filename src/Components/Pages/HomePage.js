import React, { useEffect, useState } from 'react';
// import './Header.css';

const HomePage = () => {

    const [countries, setCountries] = useState(0);
    const [regions, setRegions] = useState(0);
    const [organizations, setOrganizations] = useState(0);
  
    useEffect(() => {
      // Simulate a counter increment
      const interval = setInterval(() => {
        if (countries < 50) setCountries(countries + 1);
        if (regions < 120) setRegions(regions + 2);
        if (organizations < 300) setOrganizations(organizations + 5);
      }, 100);
      return () => clearInterval(interval);
    }, [countries, regions, organizations]);
  
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="logo">CEDIL</div>
        <nav className="nav">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <a href="#donate" className="cta-button">Donate</a>
      </div>
    </header>

    <section className="hero-banner">
      <div className="overlay">
        <div className="banner-text">
          <h1>Empowering Global Communities</h1>
          <p>Advancing sustainable development through innovation and leadership.</p>
          <a href="#donate" className="cta-button">Support Our Mission</a>
        </div>
      </div>
    </section>

    <section className="about-us" id="about">
      <div className="container">
        <h2>About Us</h2>
        <p>We are a non-profit organization dedicated to promoting sustainable development through leadership and innovation in the Global South.</p>
      </div>
    </section>

    <section className="impact-counter" id="impact">
      <div className="counter-container">
        <div className="counter">
          <h3>{countries}</h3>
          <p>Countries Impacted</p>
        </div>
        <div className="counter">
          <h3>{regions}</h3>
          <p>Regions Impacted</p>
        </div>
        <div className="counter">
          <h3>{organizations}</h3>
          <p>Organizations Impacted</p>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="footer-content">
        <p>Contact Us: email@example.com</p>
        <div className="social-icons">
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default HomePage;

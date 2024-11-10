import React from 'react';
import Image from 'next/image';
import '../style/Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Heading outside the container */}
      <h1 className="hero-heading">ULTIMATE SALES</h1>

      {/* Centered Container */}
      <div className="hero-box">
        <Image src="/image.png" alt="Small Gray Box" width={500} height={400} />
        <p className="hero-description">
          Find your perfect dress for any occasion, from casual chic to elegant evening wear. Our collection combines style, comfort, and confidence, so you can look and feel your best. Shop now and discover the dress that speaks to your unique style.
        </p>
      </div>

      {/* Login Button */}
      <div className="hero-button-container">
        <button className="hero-button">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Hero;

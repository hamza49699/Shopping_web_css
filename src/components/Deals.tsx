import React from 'react';
import Image from 'next/image';
import '../style/Deals.css';  // Import the corresponding CSS file

const Deals = ({ id }: { id: string }) => {
  return (
    <div id={id} className="deals-container">
      {/* First Section - Brand Names */}
      <section className="brand-names">
        <p className="brand-name brand-name-uppercase">CHANEL</p>
        <p className="brand-name brand-name-lowercase">LOUIS VUITTON</p>
        <p className="brand-name brand-name-uppercase">PRADA</p>
        <p className="brand-name brand-name-lowercase">Calvin Klein</p>
        <p className="brand-name brand-name-uppercase">DENIM</p>
      </section>

      {/* Second Section - Deals of the Month */}
      <section className="deals-of-the-month">
        <div className="deals-container-content">
          {/* Left Section */}
          <div className="deals-left">
            <h2 className="deals-heading">Deals Of The Month</h2>
            <p className="deals-description">
              Winter is coming so this is the best time to get these 
              hot dresses and enjoy your winters safely.
            </p>
            <button className="buy-now-button">Buy Now</button>
            <div className="countdown-timer">
              <p className="countdown-heading">Hurry, Before It&rsquo;s Too Late!</p>
              <div className="timer">
                <div className="time-unit">
                  <p className="time-number">02</p>
                  <p className="time-label">Days</p>
                </div>
                <div className="time-unit">
                  <p className="time-number">06</p>
                  <p className="time-label">Hr</p>
                </div>
                <div className="time-unit">
                  <p className="time-number">05</p>
                  <p className="time-label">Mins</p>
                </div>
                <div className="time-unit">
                  <p className="time-number">30</p>
                  <p className="time-label">Sec</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Carousel of Deals */}
          <div className="deals-right">
            <div className="carousel-container">
              {/* Card 1 */}
              <div className="deal-card">
                <Image 
                  src="/image7.png" 
                  alt="Spring Sale"
                  width={300}
                  height={400}
                  className="deal-image"
                />
                <div className="deal-info">
                  <p className="deal-name">01 — Spring Sale</p>
                  <p className="deal-discount">30% OFF</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="deal-card">
                <Image 
                  src="/image8.png" 
                  alt="Summer Sale"
                  width={300}
                  height={400}
                  className="deal-image"
                />
                <div className="deal-info">
                  <p className="deal-name">02 — Summer Sale</p>
                  <p className="deal-discount">50% OFF</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="deal-card">
                <Image 
                  src="/image9.png" 
                  alt="Fall Sale"
                  width={300}
                  height={400}
                  className="deal-image"
                />
                <div className="deal-info">
                  <p className="deal-name">03 — Fall Sale</p>
                  <p className="deal-discount">40% OFF</p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls">
              <button className="carousel-button left">
                <span>&lt;</span>
              </button>
              <button className="carousel-button right">
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;

import React from 'react';
import Image from 'next/image';
import '../style/Contact.css';  // Import the corresponding CSS file

const Contact = ({ id }: { id: string }) => {
  return (
    <div id={id} className="contact-container">
      <section className="contact-section">
        <div className="contact-content">
          <div className="grid">
            {/* Left Image */}
            <div className="contact-image contact-left">
              <Image
                src="/image2.png"
                alt="Descriptive text for image 2"
                width={500}
                height={600}
                className="contact-img"
              />
            </div>

            {/* Subscription Form */}
            <div className="contact-form">
              <h2 className="form-title">Subscribe To Our Newsletter</h2>
              <p className="form-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                duis ultrices sollicitudin aliquam.
              </p>

              <form className="form">
                <input
                  type="text"
                  placeholder="Drop your Message"
                  className="form-input"
                />
                <button
                  type="submit"
                  className="form-button"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Image */}
            <div className="contact-image contact-right">
              <Image
                src="/image3.png"
                alt="Descriptive text for image 3"
                width={500}
                height={600}
                className="contact-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React from 'react';
import Image from 'next/image';
import '../style/NewArrivals.css'; // Import the CSS file

const NewArrivals = ({ id }: { id: string }) => {
  return (
    <section id={id} className="new-arrivals-section">
      <div className="container text-center">
        <h2 className="new-arrivals-heading">New Arrivals</h2>
        <p className="new-arrivals-description">
          Enjoy your Party with beautiful dresses now. Dont forget to avail this amazing collection.
        </p>

        {/* Category Tabs */}
        <div className="category-tabs">
          <button className="category-button">Mens Fashion</button>
          <button className="category-button active">Womens Fashion</button>
          <button className="category-button">Womens Accessories</button>
          <button className="category-button">Mens Accessories</button>
          <button className="category-button">Discount Deals</button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="product-cards">
        
        {/* Card 1 */}
        <div className="product-card">
          <Image src="/image1.png" alt="Shiny Dress" width={300} height={400} className="product-image" />
          <h3 className="product-title">Shiny Dress</h3>
          <p className="product-description">Modern Outfit</p>
          <p className="product-price">$93.50</p>
          <p className="product-discount">20% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="product-card">
          <Image src="/image2.png" alt="Long Dress" width={300} height={400} className="product-image" />
          <h3 className="product-title">Long Dress</h3>
          <p className="product-description">Modern Outfit</p>
          <p className="product-price">$98.50</p>
          <p className="product-discount">15% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="product-card">
          <Image src="/th.png" alt="Full Sweater" width={300} height={400} className="product-image" />
          <h3 className="product-title">Full Sweater</h3>
          <p className="product-description">Winter Collection</p>
          <p className="product-price">$99.50</p>
          <p className="product-discount">10% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="product-card">
          <Image src="/image4.png" alt="White Dress" width={300} height={400} className="product-image" />
          <h3 className="product-title">White Dress</h3>
          <p className="product-description">Winter Collection</p>
          <p className="product-price">$99.50</p>
          <p className="product-discount">10% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="product-card">
          <Image src="/image5.png" alt="Color Dress" width={300} height={400} className="product-image" />
          <h3 className="product-title">Color Dress</h3>
          <p className="product-description">Winter Collection</p>
          <p className="product-price">$99.50</p>
          <p className="product-discount">10% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 6 */}
        <div className="product-card">
          <Image src="/image6.png" alt="White Shirt" width={300} height={400} className="product-image" />
          <h3 className="product-title">White Shirt</h3>
          <p className="product-description">Winter Collection</p>
          <p className="product-price">$99.50</p>
          <p className="product-discount">10% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 7 */}
        <div className="product-card">
          <Image src="/image7.png" alt="Black Jacket" width={300} height={400} className="product-image" />
          <h3 className="product-title">Black Jacket</h3>
          <p className="product-description">Winter Collection</p>
          <p className="product-price">$149.99</p>
          <p className="product-discount">25% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>

        {/* Card 8 */}
        <div className="product-card">
          <Image src="/image8.png" alt="Summer Shorts" width={300} height={400} className="product-image" />
          <h3 className="product-title">Summer Shorts</h3>
          <p className="product-description">Casual Collection</p>
          <p className="product-price">$39.99</p>
          <p className="product-discount">5% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9734;&#9734;</span>
          </div>
        </div>

        {/* Card 9 */}
        <div className="product-card">
          <Image src="/image9.png" alt="Cozy Sweater" width={300} height={400} className="product-image" />
          <h3 className="product-title">Cozy Sweater</h3>
          <p className="product-description">Winter Collection</p>
          <p className="product-price">$79.99</p>
          <p className="product-discount">15% OFF</p>
          <div className="product-rating">
            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default NewArrivals;

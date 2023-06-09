import React from 'react';
import "./index.css"
const index = () => {
    return (
      <div className='home_wrapper'>
        <div className="hero">
          <div className="left">
            <p>Come visit</p>
            <h2>Home Of Exoctic Bespoke Dresses</h2>
            <p>
              Welcome to best exoctic bespoke dresses on the planet. Want to
              look amazing for that special occasion, shophova got you covered,
              we offer the best bespoke dresses with top shelf clothing
              materials
            </p>
            <div className="btn">
              <button className="btn_left">Get Started</button>
              <button className="btn_right">Login</button>
            </div>
          </div>
          <div className="right">
            <img
              src="https://raw.githubusercontent.com/larrycoal/Socials/master/Asset/image/store-front.jpeg"
              alt="store front of our shop"
              height="350px"
            />
          </div>
        </div>
        <div className="layer_two">
          <div className="container">
            <div className="left">
              <span className="box"></span>
              <div className="img">
                <img
                  src="https://raw.githubusercontent.com/larrycoal/Socials/master/Asset/image/statementJacket.jpeg"
                  alt="a model showing our dress"
                  height="450px"
                />
              </div>
            </div>
            <div className="right">
              <h2>Buy ready to wear dress from our store</h2>
              <p>
                We have the most beutiful ready to wear smart clothes at
                affordable prices walk into our stores and pick out beautiful
                wears from our amazing collection.
              </p>
              <button>Visit Store</button>
            </div>
          </div>
        </div>
        <div className="layer_three">
          <div className="container">
            <div className="right">
              <h2>Bet on us for your special occasion</h2>
              <p>
                Do you have a special occasion you need bespoke dress for?
                contact us today and get attended to by world class fashion
                designer and stylist availble to you 24/7, do not hesitate, we
                are waiting for you
              </p>
              <button>Order Now</button>
            </div>
            <div className="left">
              <span className="box"></span>
              <div className="img">
                <img
                  src="https://raw.githubusercontent.com/larrycoal/Socials/master/Asset/image/skinmePant.jpeg"
                  alt="a model showing our dress"
                  height="450px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="description_section">
          <h2>How We Work</h2>
          <div className="container">
            <div className="img">
              <img
                src="https://raw.githubusercontent.com/larrycoal/Socials/master/Asset/image/danique-tersmette-HusIRI6pw4k-unsplash.jpg"
                width="100%"
                height="700px"
                alt=" a man sewing."
              />
            </div>
            <i className="fa fa-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="testimonial">
          <h2>What Our Customer say</h2>
          <div className="container">
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                ni
              </p>
              <img
                src="https://raw.githubusercontent.com/larrycoal/Socials/master/Asset/image/natalie-heathcoat-QP1N1rK5QlA-unsplash.jpg"
                alt="a satisfied customer"
              />
              <h3>Amanda Jackson</h3>
              <p>CEO,NRD Group</p>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                ni
              </p>
              <img
                src="https://raw.githubusercontent.com/larrycoal/Socials/master/Asset/image/ashley-jiang-afrtxWXevuU-unsplash.jpg"
                alt="a satisfied customer"
              />
              <h3>Ashley Jackson</h3>
              <p>CEO,NRD Group</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default index;
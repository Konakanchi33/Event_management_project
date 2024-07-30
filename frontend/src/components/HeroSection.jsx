import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="Restuarent.jpg" alt="restaurant" />
      <div className="item">
        <h3>Imagination Creator</h3>
        <div>
          <h1>Your Personal Fantasy Maker</h1>
          <p>
            We believe that it is all about the BIG DREAMS comes succesfull.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
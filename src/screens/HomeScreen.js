import React from 'react';
import TopProducts from '../components/TopProducts';
import ImageGrid from '../components/ImageGrid';
import Sponsors from '../components/Sponsors';
import NewsLetter from '../components/NewsLetter';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="row">
          <div className="col-md-6">
            <div className="img-container">
              <img
                src="/images/egg.webp"
                alt="omelete"
                width="100%"
                height="585rem"
              />
            </div>
          </div>
          <div className="col-md-6 my-5">
            <div className="hero-content">
              <h1>
                Pasta <br />
                is our <br />
                happy food
              </h1>
              <h3>No machine required.</h3>
              <Link to="/product">
                <button>Go to Shop</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <TopProducts />
      <ImageGrid />
      <Sponsors />
      <ImageGrid />
      <NewsLetter />
    </>
  );
};

export default Hero;

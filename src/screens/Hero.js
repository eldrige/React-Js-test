import React from 'react';
import { Image } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="hero">
      <div className="row">
        <div className="col-md-6">
          <div className="img-container">
            {/* <Image src="/images/eggs.jpg" fluid style={{ height: '50%' }} /> */}
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
            <button>Go to Shop</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

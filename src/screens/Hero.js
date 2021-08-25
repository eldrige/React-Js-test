import React from 'react';

const Hero = () => {
  return (
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
            <button>Go to Shop</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

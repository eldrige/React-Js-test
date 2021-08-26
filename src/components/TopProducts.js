import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fakeProducts } from './data.js';

const TopProducts = () => {
  return (
    <section id="topProducts">
      <div className="container">
        <div className="row">
          {fakeProducts.map((product) => (
            <div className="col-md-3">
              <div className="custom-card">
                <div className="image-item mb-5">
                  <Link to="/product">
                    <Image src={product.url} fluid />
                  </Link>
                </div>
                <p className="desc ">{product.text}</p>
                <p className="price">3,90 €</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;

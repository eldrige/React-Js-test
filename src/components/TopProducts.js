import React from 'react';
import { Image } from 'react-bootstrap';
let fakeProducts = ['one', 'two', 'three', 'four'];

const TopProducts = () => {
  return (
    <section id="topProducts">
      <div className="container">
        <div className="row">
          {fakeProducts.map((product) => (
            <div className="col-md-3">
              <div className="custom-card">
                {/* <img src="" alt="" /> */}
                <div className="image-item">
                  <Image src="/images/eggs.jpg" fluid />
                </div>
                <p className="desc">Greeting Card set "Dancing Couple"</p>
                <p className="price">7,5 $</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;

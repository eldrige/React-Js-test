import React from 'react';
let fakeProducts = [
  'Organic granola "Frühsportfreunde" ',
  'Greeting Card Set “Dancing Couple”',
  'Besswap wrap medium',
  'Cook book + Beeswax wraps Bundle',
];

const TopProducts = () => {
  return (
    <section id="topProducts">
      <div className="container">
        <div className="row">
          {fakeProducts.map((product) => (
            <div className="col-md-3">
              <div className="custom-card">
                <div className="image-item">
                  {/* <Image src="/images/eggs.jpg" fluid /> */}
                </div>
                <p className="desc ">{product}</p>
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

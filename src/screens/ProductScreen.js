import React, { useState } from 'react';
import { Row, Col, Container, Button, Collapse, Image } from 'react-bootstrap';
import Review from '../components/Review';
import Features from '../components/Features';
import Recommendation from '../components/Recommendation';
import ImageShowcase from '../components/ImageShowcase';

import {
  FaCcVisa,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';

const imgUrl = ['one.webp', 'two.webp', 'three.webp'];

const ProductScreen = () => {
  const [showMaterial, setShowMaterial] = useState(false);
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > imgUrl.length - 1) {
      return 0;
    }
    if (number < 0) {
      return imgUrl.length - 1;
    }
    return number;
  };

  const nextImg = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevImg = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section>
      <Container fluid id="productScreen">
        <Container>
          <Row className="p-5">
            <Col md={1} />
            <Col md={5}>
              <div className="slider-container">
                <FaArrowLeft
                  className={index === 0 ? 'prev-arrow hidden' : 'prev-arrow'}
                  size={20}
                  onClick={prevImg}
                />
                <Image src={`/images/${imgUrl[index]}`} fluid />
                <FaArrowRight
                  className={index === 2 ? 'next-arrow hidden' : 'next-arrow'}
                  size={20}
                  onClick={nextImg}
                />
              </div>
            </Col>
            <Col md={5}>
              <div className="product-description">
                <Row className="title">
                  <div className="detail mb-4">
                    <div>
                      <h4>
                        Greeting Card Set <br /> 'Dancing Couple'
                      </h4>
                      <p>Sustainable birthday cards</p>
                    </div>
                    <div className="price">3,90 €</div>
                  </div>
                  <section className="contain">
                    <div>
                      <select name="" id="item" className="mb-3">
                        <option value="">1 kart + kuverte (3,90 €)</option>
                        <option value="">5 karten + 1 kuverte (12,90 €)</option>
                      </select>
                    </div>
                    <div>
                      <select name="" id="qty" className="mb-3">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                      </select>
                    </div>
                    <Button className="mb-4">add to cart</Button>
                    <div className="mb-4">
                      <div className="delivery d-flex align-items-baseline">
                        <div className="available" />
                        <p className="ml-3">
                          Product available, Delivery in 1 day
                        </p>
                      </div>
                      <p>Free shipping in Germany from 75€</p>
                    </div>
                    <p>Pay with</p>
                    <div className="mb-4">
                      <FaCcPaypal className="p-option" />
                      <FaCcAmazonPay className="p-option" />
                      <FaCcMastercard className="p-option" />
                      <FaCcVisa className="p-option" />
                      <FaCcApplePay className="p-option" />
                    </div>
                    <Row>
                      <h4>With exclusive illustrations</h4>
                      <p>
                        Our greeting cards are setting the beat: Renowned Polish
                        illustrator Maya Stepien has designed this dancing
                        couple especially for us, with all the joy and attention
                        to detail.
                      </p>
                      <h4>Saving resources</h4>
                      <p>
                        Our products are printed with organic inks on paper from
                        sustainable forestry. We offset any CO2 emissions by
                        supporting reforestation and mixed forest maintenance
                        projects in the Oberallgäu region.
                      </p>
                      <h4>Made in Germany</h4>
                      <p>
                        Our Pfeffer & Frost cards are printed locally in
                        Erlangen (Bavaria) and wrapped by us in FSC certified
                        silk paper.
                      </p>
                      <div className="d-flex justify-content-between">
                        <h4>Material</h4>
                        {showMaterial ? (
                          <FaChevronUp
                            className="toggle"
                            size={20}
                            onClick={() => setShowMaterial(!showMaterial)}
                          />
                        ) : (
                          <FaChevronDown
                            className="toggle"
                            size={20}
                            onClick={() => setShowMaterial(!showMaterial)}
                          />
                        )}
                      </div>
                      <Collapse in={showMaterial}>
                        <p>
                          Folding cards: DIN A6 (10.5x14.8 cm) FSC-certified,
                          uncoated paper; envelope: C6 (11.4x16.2 cm), white,
                          FSC-certified, uncoated paper, from Colorplan,
                          CO2-neutral, printed in Franconia (Germany) with
                          organic paint, free from mineral oil.
                        </p>
                      </Collapse>
                      <div className="mt-2 mb-5 line" />
                    </Row>
                  </section>
                </Row>
              </div>
            </Col>
            <Col md={1} />
          </Row>
        </Container>
      </Container>
      <ImageShowcase />
      <Recommendation />
      <Review />
      <Features />
    </section>
  );
};

export default ProductScreen;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  FaFacebook,
  FaHeart,
  FaLock,
  FaPercentage,
  FaTelegramPlane,
} from 'react-icons/fa';

const Features = () => {
  return (
    <Row id="features">
      <Col md={3}>
        <div className="item">
          <FaPercentage size={45} className="my-4" />
          <h4>Free Shipping in Germany</h4>
          <p>From € 75.00 purchase value</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="item">
          <FaTelegramPlane size={45} className="my-4" />
          <h4>Delivered in 4-5 working days</h4>
          <p>and 100% plastic free packaged</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="item">
          <FaLock size={45} className="my-4" />
          <h4>Secure payment guaranteed</h4>
          <p>And safe processing of your data</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="item">
          <FaHeart size={90} className="my-4" />
          <h4>We're happy to help.</h4>
          <p>Drop us a line servus@pfeffer​und​frost.de</p>
        </div>
      </Col>
    </Row>
  );
};

export default Features;

import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CheckOutForm from '../components/CheckOutForm';

const CheckoutScreen = () => {
  return (
    <Container fluid id="checkout">
      <Row>
        <Col md={6}>
          <div className="contain">
            <h1>
              Pfeffer & Frost Secure checkout <FaShoppingBag />
            </h1>
            <h2 className="text-center mb-4">Shipping & Contact Information</h2>
            <CheckOutForm />
            <div className="actions">
              <Link to="/product">
                <FaArrowLeft />
                <span className="mx-2">Back to Cart</span>
              </Link>
              <button>Go to shipping</button>
            </div>
            <div className="line mt-5"></div>
            <div className="mini-footer">
              <span className="mx-2 mt-1">Returns</span>
              <span className="mx-2 mt-1">Terms and conditions</span>
              <span className="mx-2 mt-1">Imprint</span>
              <span className="mx-2 mt-1">Data privacy statement</span>
            </div>
          </div>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
};

export default CheckoutScreen;

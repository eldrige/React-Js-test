import React from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';
import {
  FaShoppingBag,
  FaArrowLeft,
  FaShoppingCart,
  FaCaravan,
  FaCreditCard,
  FaLocationArrow,
  FaSmile,
} from 'react-icons/fa';
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
        <Col md={6}>
          <section className="wrap">
            <div className="location">
              <div className="line mt-1">
                <div className="item-wrapper mt-2">
                  <div className="item allow">
                    <div className="circle">
                      <FaShoppingCart />
                    </div>
                    <p>Cart</p>
                  </div>
                  <div className="item active">
                    <div className="circle active">
                      <FaLocationArrow />
                    </div>
                    <p>Address</p>
                  </div>
                  <div className="item disallow">
                    <div className="circle disallow">
                      <FaCaravan />
                    </div>
                    <p>Shipping</p>
                  </div>
                  <div className="item disallow">
                    <div className="circle disallow">
                      <FaCreditCard />
                    </div>
                    <p>Payment</p>
                  </div>
                  <div className="item disallow">
                    <div className="circle disallow">
                      <FaSmile />
                    </div>
                    <p>Review</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-center mb-4">Order Overview</h2>
            <Row>
              <Col md={4}>
                <Image src="/images/can.webp" fluid />
              </Col>
              <Col md={8}>
                <div className="description mt-5">
                  <h4 className="mr-5">Organic Granola</h4>
                  <p>8,00 € </p>
                  <p>x 1</p>
                </div>
              </Col>
              <div className="sum">
                <p>product sum</p>
                <p>8,00 € x 1</p>
              </div>
              <div className="total">
                <div>
                  <h5>Subtotal</h5>
                  <p>plus shipping</p>
                </div>
                <div class="subtotal">
                  <h5 className="mx-4">8,00 €</h5>
                  <p>starting 3,45 €</p>
                </div>
              </div>
            </Row>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutScreen;

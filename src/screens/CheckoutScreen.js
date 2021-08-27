import React from 'react';
import { Row, Container, Col, Form } from 'react-bootstrap';
import { FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <Form>
              <Form.Group as={Col} controlId="formGridEmail">
                <h3>Contact Information</h3>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="mb-3"
                />
              </Form.Group>
              <Row className="mb-3">
                <h3>Shipping Information</h3>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="password" placeholder="Last Name" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Company (optional)" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Control placeholder="Street House, No." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Control placeholder="Additional Address Info (optional)" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="text" placeholder="Postal Code" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="text" placeholder="City" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Billing Address" />
                <span className="text-bold text-small">
                  Use a different billing address than the shipping address
                </span>
              </Form.Group>
            </Form>
            <div className="actions">
              <Link to="/product">
                <FaArrowLeft />
                Back to Cart
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

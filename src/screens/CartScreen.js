import React from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';
import {
  FaBars,
  FaTrash,
  FaGoogleWallet,
  FaCcVisa,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from 'react-icons/fa';

const CartScreen = () => {
  return (
    <Container id="cart">
      <Row>
        <Col md={6}>Transparent section</Col>
        <Col md={6}>
          <section className="contain">
            <div>
              <h1>Cart</h1>
              <FaBars />
            </div>
            <div>
              <span>Tick</span>
              <p>Good choice, here are your products</p>
            </div>
            <article>
              <Image fluid />
              <div>
                <div>
                  <h5>Beeswaps wrap medium</h5>
                  <p>8,00 francs</p>
                </div>
                <div>
                  <FaTrash />
                  <input type="text" />
                </div>
              </div>
            </article>
            <div className="product-sum">
              <p>Product Sum</p>
              <p>8,00 francs</p>
            </div>
            <div className="sub-total">
              <div>
                <p>Subtotal</p>
                <p>plus shipping</p>
              </div>
              <div>
                <p>8,00 francs</p>
                <p>starting from 3,45francs</p>
              </div>
            </div>
            <p>
              <span>
                Free shipping in Germany starting from 75. Shipping costs and
                VAT are calculated at checkout
              </span>
              product is in stock and gets to you within 3-4 work days
            </p>
            <div>
              <p>Pay with</p>
              <div>
                <FaCcPaypal className="p-option" />
                <FaGoogleWallet className="p-option" />
                <FaCcMastercard className="p-option" />
                <FaCcVisa className="p-option" />
                <FaCcApplePay className="p-option" />
                <FaCcAmazonPay className="p-option" />
              </div>
            </div>
            <button>Go to checkout</button>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen = ();

import React from 'react';
import { Row } from 'react-bootstrap';
import {
  FaArrowRight,
  FaGoogleWallet,
  FaCcVisa,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
  FaDhl,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="container-fluid" id="footer">
      <Row>
        <div className="col-md-4">
          <div className="mail">
            <div className="email">
              <h3>Sign up for super emails!</h3>
              <p>
                Subscribe to receive the latest news, promotions and special
                offers. You get a 10% discount on your first order on top.
              </p>
              <div className="input-wrapper my-3 p-1">
                <input type="text" placeholder="Enter E-mail address" />
                <FaArrowRight />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="general-info">
            <Row>
              <div className="col-md-5">
                <h4 className="ship">Payment Methods</h4>
                <div>
                  <FaCcPaypal className="p-option" />
                  <FaGoogleWallet className="p-option" />
                  <FaCcMastercard className="p-option" />
                  <FaCcVisa className="p-option" />
                  <FaCcApplePay className="p-option" />
                  <FaCcAmazonPay className="p-option" />
                </div>
              </div>
              <div className="col-md-5">
                <h4 className="ship">Shipping With</h4>
                <div>
                  <FaDhl className="shipping" />
                  <FaDhl className="shipping" />
                </div>
              </div>
            </Row>
            <Row>
              <div className="col-md-3">
                <h4>Mission & Sustainability</h4>
                <p>
                  We fight for conscious consumption and a plastic-free world.
                </p>
              </div>
              <div className="col-md-3">
                <h5>Storefinder</h5>
                <p>Find your nearest store that stocks our products.</p>
              </div>
              <div className="col-md-3">
                <h5>Returns</h5>
                <h5>Terms & Conditions</h5>
                <h5>Contact Us</h5>
              </div>
              <div className="col-md-3"></div>
            </Row>
            <Row>
              <div className="col-md-3">
                <h5>Questions & Answers</h5>
                <p>All about Lebkuchen, our gift service & shipping.</p>
              </div>
            </Row>
            <Row>
              <div className="col-md-3">
                <h5>Imprint</h5>
                <h5>Data Privacy Statement</h5>
              </div>
            </Row>
            <Row>
              <div className="col-md-9">
                <p>
                  All prices include VAT and packaging, but exclude shipping
                  costs and any customs duties (for non-EU countries). * Free
                  shipping in Germany from € 75.00 purchase value. Pfeffer &
                  Frost – The online shop for traditional Lebkuchen from
                  Nuremberg in plastic-free packaging.
                </p>
              </div>
              <div className="col-md-3">
                <FaFacebook className="icon social" />
                <FaInstagram className="icon social" />
                <FaLinkedin className="icon social" />
              </div>
            </Row>
          </div>
        </div>
      </Row>
    </footer>
  );
};

export default Footer;

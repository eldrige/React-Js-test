import React, { useState } from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const NewsLetter = () => {
  const [value, setValue] = useState('');

  return (
    <Container id="newsletter" fluid>
      <Container>
        <Row>
          <div className="letter p-3">
            <div className="img-wrapper">
              <Image src="/images/letter.webp" fluid />
            </div>
            <p className="text-center mb-4">
              Sign up now to get 10% off your first order, tips & tricks on
              cultivating a sustainable lifestyle, content roundups from our
              chefs and notes on sales
            </p>
            <div className="input-wrapper mb-4 p-2">
              <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Enter your E-mail address"
              />
              <FaArrowRight />
            </div>
            <button
              disabled={!value}
              className={value ? 'allowed' : 'not-allowed'}
            >
              subscribe
            </button>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default NewsLetter;

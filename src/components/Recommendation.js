import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

const Recommendation = () => {
  return (
    <Container fluid id="recomended">
      <Container>
        <Row>
          <Col md={3}>
            <div className="headline mt-5">
              <h5>Recommendation</h5>
              <h2>You might also like:</h2>
            </div>
          </Col>
          <Col md={3}>
            <div class="text-center">
              <div className="img-card">
                <Image src="/images/card.webp" fluid />
              </div>
              <div>
                <h6 className="name">Bienenwachstuch Medium</h6>
                <p className="price">8,00 €</p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center">
              <div className="img-card">
                <Image src="/images/card.webp" fluid />
              </div>
              <div>
                <h6 className="name">Bienenwachstuch Medium</h6>
                <p className="price">8,00 €</p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center">
              <div className="img-card">
                <Image src="/images/card.webp" fluid />
              </div>
              <div>
                <h6 className="name">Bienenwachstuch Medium</h6>
                <p className="price">8,00 €</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Recommendation;

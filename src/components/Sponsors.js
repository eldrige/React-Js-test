import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

const Sponsors = () => {
  return (
    <Container fluid id="sponsors">
      <h1 className="text-center text-black pt-5 pb-2">Known From</h1>
      <Container>
        <Row>
          <Col md={2}>
            <Image src="/images/logoone.webp" fluid />
          </Col>
          <Col md={2}>
            <Image src="/images/logotwo.webp" fluid />
          </Col>
          <Col md={2}>
            <Image src="/images/logothree.webp" fluid />
          </Col>
          <Col md={2}>
            <Image src="/images/logofour.webp" fluid />
          </Col>
          <Col md={2}>
            <Image src="/images/logofive.webp" fluid />
          </Col>
          <Col md={2}>
            <Image src="/images/logosix.webp" fluid />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Sponsors;

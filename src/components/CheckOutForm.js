import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const CheckOutForm = () => {
  return (
    <Form>
      <Form.Group as={Col} controlId="formGridEmail">
        <h3>Contact Information</h3>
        <Form.Control type="email" placeholder="Email" className="mb-3" />
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
  );
};

export default CheckOutForm;

import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import people from './data';
import { FaArrowRight, FaArrowLeft, FaStar } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const { name, date, text } = people[index];
  const secondName = people[secondIndex].name;
  const secondDate = people[secondIndex].date;
  const secondText = people[secondIndex].text;

  console.log(people[secondIndex], 'From review.js');

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
    setSecondIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
    setSecondIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Container id="review" fluid>
      <Row>
        <h2 className="text-center mt-5">What our customers say:</h2>
        <Row className="p-5">
          <Col md={2}>
            <FaArrowLeft className="mt-5 mx-5 prev" onClick={prevPerson} />
          </Col>
          <Col md={4}>
            <div className="author mb-3">
              <div className="pseudo mx-3">
                <p>E</p>
              </div>
              <div className="stars">
                <p className="mb-0">{name}</p>
                <div className="d-flex">
                  <FaStar size={16} color="#FFCC00" className="" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <p>{date}</p>
                </div>
              </div>
            </div>
            <p className="ml-3">{text}</p>
          </Col>
          <Col md={4}>
            <div className="author mb-3">
              <div className="pseudo mx-3">
                <p>W</p>
              </div>
              <div className="stars">
                <p className="mb-0">{secondName}</p>
                <div className="d-flex">
                  <FaStar size={16} color="#FFCC00" className="" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <p>{secondDate}</p>
                </div>
              </div>
            </div>
            <p className="ml-3">{secondText}</p>
          </Col>
          <Col md={2}>
            <FaArrowRight className="mt-5 next" onClick={nextPerson} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Review;

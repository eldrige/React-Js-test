import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
// import people from './data';
import { FaArrowRight, FaArrowLeft, FaStar } from 'react-icons/fa';

const Review = () => {
  // const [index, setIndex] = useState(0);
  // const { name, job, image, text } = people[index];
  // const checkNumber = (number) => {
  //   if (number > people.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number;
  // };
  // const nextPerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const prevPerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const randomPerson = () => {
  //   let randomNumber = Math.floor(Math.random() * people.length);
  //   if (randomNumber === index) {
  //     randomNumber = index + 1;
  //   }
  //   setIndex(checkNumber(randomNumber));
  // };

  return (
    <Container id="review" fluid>
      <Row>
        <h2 className="text-center mt-5">What our customers say:</h2>
        <Row className="p-5">
          <Col md={2}></Col>
          <Col md={4}>
            <div className="author mb-3">
              <div className="pseudo mx-3">
                <p>E</p>
              </div>
              <div className="stars">
                <p className="mb-0">Prince Eldrige</p>
                <div className="d-flex">
                  <FaStar size={16} color="#FFCC00" className="" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <p>April 17, 2021</p>
                </div>
              </div>
            </div>
            <p className="ml-3">
              Super tasty gingerbread, which is pleasantly nutty and not too
              sweet compared to other Elisen Lebkuchen. The sustainable
              packaging is an innovative unique selling point and the can is now
              used for storage.
            </p>
          </Col>
          <Col md={4}>
            <div className="author mb-3">
              <div className="pseudo mx-3">
                <p>W</p>
              </div>
              <div className="stars">
                <p className="mb-0">Mr Wilfried</p>
                <div className="d-flex">
                  <FaStar size={16} color="#FFCC00" className="" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <FaStar size={16} color="#FFCC00" className="mx-1" />
                  <p>May 22, 2021</p>
                </div>
              </div>
            </div>
            <p className="ml-3">
              Order was delivered the next day - great service! Gingerbreads are
              delicious and the tin has that certain something. Can be given
              away well without serving the dusty image of gingerbread in tin
              cans and plastic packaging.
            </p>
          </Col>
          <Col md={2}>
            <FaArrowRight className="mt-5" />
          </Col>
        </Row>
      </Row>
    </Container>
    // <article className="review">
    //   <div className="img-container">
    //     <img src={image} alt={name} className="person-img" />
    //     <span className="quote-icon">
    //       <FaQuoteRight />
    //     </span>
    //   </div>
    //   <h4 className="author">{name}</h4>
    //   <p className="job">{job}</p>
    //   <p className="info">{text}</p>
    //   <div className="button-container">
    //     <button className="prev-btn" onClick={prevPerson}>
    //       <FaChevronLeft />
    //     </button>
    //     <button className="next-btn" onClick={nextPerson}>
    //       <FaChevronRight />
    //     </button>
    //   </div>
    //   <button className="random-btn" onClick={randomPerson}>
    //     surprise me
    //   </button>
    // </article>
  );
};

export default Review;

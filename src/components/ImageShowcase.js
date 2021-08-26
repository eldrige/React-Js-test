import React from 'react';
import { Image } from 'react-bootstrap';

const ImageShowcase = () => {
  return (
    <div id="card-img">
      <div className="img-card">
        <Image src="/images/one.webp" fluid />
      </div>
      <div className="img-card">
        <Image src="/images/two.webp" fluid />
      </div>
      <div className="img-card">
        <Image src="/images/three.webp" fluid />
      </div>
    </div>
  );
};

export default ImageShowcase;

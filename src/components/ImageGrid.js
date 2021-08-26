import React from 'react';
import { Row, Image, Button } from 'react-bootstrap';

const ImageGrid = () => {
  return (
    <section id="imageGrid">
      <Row>
        <div className="item">
          <Image src="/images/farmer.webp" fluid />
        </div>
        <div className="item desc">
          <div>
            <h1 className="">
              Locally sourced
              <br /> ingredients
            </h1>
            <p className="text-center">
              Our honey is produced in Central Franconia by Claus Rudolph – a
              beekeeper who’s passionate about his exquisite forest honey. Join
              us on a trip to Rügland.
            </p>
          </div>
          <Button>Honey from Franconia</Button>
        </div>
        <div className="item desc calendar">
          <div>
            <h1 className="">Perma Kalendar</h1>
            <p className="text-center">
              Calendar, non-fiction book, and garden planner all in one: learn
              everything you need to know about climate change and observe its
              effect on native plants in the garden, forest, and city park.
            </p>
          </div>
          <Button>To Perma Kalendar</Button>
        </div>
      </Row>
      <Row>
        <div className="item desc">
          <div>
            <h1 className="">Our Bestseller</h1>
            <p className="text-center">
              Our honey is produced in Central Franconia by Claus Rudolph – a
              beekeeper who’s passionate about his exquisite forest honey. Join
              us on a trip to Rügland.
            </p>
          </div>
          <Button>Honey from Franconia</Button>
        </div>
        <div className="item">
          <Image src="/images/baker.webp" fluid />
        </div>
        <div className="item desc">
          <div>
            <h1 className="">
              Take a look at the
              <br /> oven
            </h1>
            <p className="text-center">
              We’ve partnered up with a Nuremberg-based team of bakers who will
              be baking 5 flavours of tasty, fresh Lebkuchen for us every week
              from October onwards. Artisan bakery at its best!
            </p>
          </div>
          <Button>Honey from Franconia</Button>
        </div>
      </Row>
    </section>
  );
};

export default ImageGrid;

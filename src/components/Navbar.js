import React, { useState } from 'react';
import {
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaChevronCircleDown,
} from 'react-icons/fa';

const Navbar = () => {
  const [showNav, setShowFullNav] = useState(false);
  const toggleNav = () => {
    setShowFullNav(!showNav);
  };

  return (
    <header className="container-fluid" id="navbar">
      <div className="row">
        <ul>
          <li>
            {showNav ? (
              <FaTimes onClick={toggleNav} className="icon mx-4" />
            ) : (
              <FaBars onClick={toggleNav} className="icon mx-4" />
            )}
            Shop
          </li>
          <li>Pfaizer & Frost</li>
          <li>
            Cart <FaShoppingBag className="icon mx-1 shoppingBag" />
          </li>
        </ul>
      </div>
      {showNav && (
        <section>
          <div className="content">
            <p>Home</p>
            <p>
              Shop <FaChevronCircleDown />
            </p>
            <p>Storelocator</p>
            <p>B2B</p>
            <p>Q & A</p>
            <p>
              DE <span className="active">EN</span>
            </p>
            <p className="social">
              <FaFacebook className="icon social" />
              <FaInstagram className="icon social" />
              <FaLinkedin className="icon social" />
            </p>
            <p>
              <span className="mx-2 term">Legal Disclosures</span>
              <span className="mx-2 term">Privacy Policy</span>
            </p>
          </div>
        </section>
      )}
    </header>
  );
};

export default Navbar;
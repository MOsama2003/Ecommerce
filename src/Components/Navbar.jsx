import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <h1>
                Rashan.pk
            </h1>
        </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link">Home</a>
        </li>
        <li className="navbar__item">
          <a  className="navbar__link">About</a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="navbar has-shadow is-white">
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            exact
            className="navbar-item has-text-weight-bold is-size-4 ml-3"
            to="/"
          >
            <FontAwesomeIcon className="icon mr-2" icon={faSeedling} />
            kevin's plants
          </NavLink>
          <div
            className={`navbar-burger ${burgerIsActive ? 'is-active' : ''}`}
            onClick={() => {
              setBurgerIsActive(!burgerIsActive);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-menu ${burgerIsActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <NavLink
              exact
              activeClassName="is-underlined"
              className="navbar-item ml-4"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="is-underlined"
              className="navbar-item ml-4"
              isActive={() =>
                ['/products', '/products/id/'].find((path) =>
                  pathname.includes(path)
                )
              }
              to="/products/all"
            >
              Shop
            </NavLink>
            <NavLink
              activeClassName="is-underlined"
              className="navbar-item ml-4"
              to="/cart"
            >
              Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

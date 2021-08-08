import React from 'react';
import { NavLink } from 'react-router-dom';
import { productsData } from '../data/ProductsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const brightLight = productsData.find(
    (product) => product.id === 'fiddle-leaf-fig'
  );
  const lowLight = productsData.find(
    (product) => product.id === 'philodendron-verrucosum'
  );
  const succulent = productsData.find((product) => product.id === 'succulent');

  return (
    <div className="container">
      <section className="hero is-fullheight has-background-img-1">
        <div className="hero-body">
          <div>
            <p className="has-text-weight-bold has-text-black is-size-1">
              Bring nature into your home.
            </p>
            <p className="has-text-black subtitle">
              Find your newest best friend today!
            </p>
            <NavLink exact to="/products/all">
              <button className="button is-success">Shop Now</button>
            </NavLink>
          </div>
        </div>
      </section>
      <div className="columns is-mobile is-variable is-5 mt-6">
        <div className="column is-4">
          <NavLink to={`/products/bright-light`}>
            <figure className="image is-4by5">
              <img src={brightLight.image} alt={brightLight.name} />
            </figure>
            <div className="is-flex is-align-items-center mt-4 is-size-4-desktop is-size-6-mobile has-text-black">
              <p className="has-text-weight-bold mr-1">Bright Light</p>
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </div>
          </NavLink>
        </div>
        <div className="column is-4">
          <NavLink to={`/products/low-light`}>
            <figure className="image is-4by5">
              <img src={lowLight.image} alt={lowLight.name} />
            </figure>
            <div className="is-flex is-align-items-center mt-4 is-size-4-desktop is-size-6-mobile has-text-black">
              <p className="has-text-weight-bold mr-1">Low Light</p>
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </div>
          </NavLink>
        </div>
        <div className="column is-4">
          <NavLink to={`/products/succulents`}>
            <figure className="image is-4by5">
              <img src={succulent.image} alt={succulent.name} />
            </figure>
            <div className="is-flex is-align-items-center mt-4 is-size-4-desktop is-size-6-mobile has-text-black">
              <p className="has-text-weight-bold mr-1">Succulents</p>
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </div>
          </NavLink>
        </div>
      </div>
      <section className="hero is-large my-6 has-background-img-2">
        <div className="hero-body"></div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { productsData } from '../data/ProductsData';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === id);

  return (
    <div className="container mb-6">
      <div className="columns mt-6 is-variable is-7 is-vcentered">
        <div className="column is-5">
          <figure className="image is-4by5">
            <img src={product.image} alt={product.name} />
          </figure>
        </div>
        <div className="column is-7">
          <h1 className="pr-6 is-size-1">{product.name}</h1>
          <p className="py-4">{product.description}</p>
          <p className="is-size-3 has-text-weight-bold py-4">
            ${product.price}
          </p>
          <div className="field is-grouped">
            <NavLink className="" exact to="/cart">
              <button
                className="button is-success is-outlined is-fullwidth mr-4"
                onClick={() => addToCart(product)}
              >
                Buy Now
              </button>
            </NavLink>
            <button
              className="button is-success ml-4"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

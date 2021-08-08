import React from 'react';
import Hero from './Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, removeProduct, updateCart }) => {
  if (cart.length === 0) {
    return <Hero title="There aren't any items in your cart yet!" />;
  }

  return (
    <div className="container mb-6">
      {cart.map(({ product, quantity }) => (
        <div
          className="mt-6 columns is-vcentered is-flex is-justify-content-space-between is-mobile is-5"
          key={product.id}
        >
          <img className="column is-2" src={product.image} alt={product.name} />
          <div className="column has-text-centered">
            <p className="is-size-6 has-text-weight-semibold">{product.name}</p>
          </div>
          <div className="column is-2 has-text-centered is-align-self-center">
            <div className="is-flex is-justify-content-space-around">
              <FontAwesomeIcon
                className="icon is-clickable"
                icon={faMinus}
                onClick={() => updateCart(product, -1)}
              />
              <p className="mx-5">{quantity}</p>
              <FontAwesomeIcon
                className="icon is-clickable"
                icon={faPlus}
                onClick={() => updateCart(product, 1)}
              />
            </div>
          </div>
          <div className="column has-text-centered is-2">
            ${product.price * quantity}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

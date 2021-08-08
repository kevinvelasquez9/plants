import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Cart from './components/Cart';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductPage from './components/ProductPage';

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  const addToCart = (product) => {
    let cartCopy = [...cart];
    let existingProduct = cartCopy.find(
      (cartProduct) => cartProduct.product.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartCopy.push({ product, quantity: 1 });
    }
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  };

  const removeProduct = (product) => {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter(
      (cartProduct) => cartProduct.product.id !== product.id
    );
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  };

  const updateCart = (product, amount) => {
    let cartCopy = [...cart];
    let existingProduct = cartCopy.find(
      (cartProduct) => cartProduct.product.id === product.id
    );
    if (!existingProduct) {
      return;
    }
    existingProduct.quantity += amount;
    if (existingProduct.quantity <= 0) {
      cartCopy = cartCopy.filter(
        (cartProduct) => cartProduct.product.id !== product.id
      );
    }
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  };

  return (
    <body className="main">
      <div className="mx-4">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              removeProduct={removeProduct}
              updateCart={updateCart}
            />
          </Route>
          <Route exact path="/products/:filter">
            <Products />
          </Route>
          <Route exact path="/products/id/:id">
            <ProductPage addToCart={addToCart} />
          </Route>
          <Route>
            <Hero title="Hold on, we might've taken a wrong turn here!" />;
          </Route>
        </Switch>
      </div>
      <Footer />
    </body>
  );
};

export default App;

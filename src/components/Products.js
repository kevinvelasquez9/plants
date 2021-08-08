import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categoryData } from '../data/CategoryData';
import { productsData } from '../data/ProductsData';
import Hero from './Hero';
import Toolbar from './Toolbar';

const Products = () => {
  const { filter } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const category = categoryData.find((category) => category.id === filter);
  if (!category) {
    return <Hero title="Hold on, we might've taken a wrong turn here!" />;
  }
  const tag = category.tag;
  const products = (
    filter === 'all'
      ? productsData
      : productsData.filter((product) => product.tags.includes(tag))
  )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((product) => (
      <div
        className="column is-3-desktop is-4-tablet is-6-mobile mb-6"
        key={product.name}
      >
        <Link to={`/products/id/${product.id}`}>
          <figure className="image is-4by5">
            <img src={product.image} alt={product.name} />
          </figure>
        </Link>
        <p className="pt-4 has-text-weight-bold">{product.name}</p>
        <p className="pt-2 has-text-weight-semibold">${product.price}</p>
      </div>
    ));

  return (
    <div className="container">
      <Toolbar setSearchTerm={setSearchTerm} />
      <div className="columns is-mobile is-multiline is-variable is-7">
        {products.length > 0 ? products : <Hero title="No plants found!" />}
      </div>
    </div>
  );
};
export default Products;

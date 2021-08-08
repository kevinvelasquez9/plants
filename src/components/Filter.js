import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { categoryData } from '../data/CategoryData';

const Filter = () => {
  const { filter } = useParams();
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  return (
    <div className="is-flex is-align-items-center mb-6">
      <p className="pr-2">FILTER:</p>
      <div
        className={`dropdown dropdown-menu-min-width-10 ${
          dropdownIsActive ? 'is-active' : ''
        }`}
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            onClick={() => {
              setDropdownIsActive(!dropdownIsActive);
            }}
          >
            <span>
              {categoryData.find((category) => category.id === filter).name}
            </span>
            <FontAwesomeIcon className="icon is-small" icon={faAngleDown} />
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {categoryData.map((category) => (
              <Link
                to={`/products/${category.id}`}
                className={`dropdown-item ${
                  filter === category.id ? 'has-background-success-light' : ''
                }`}
              >
                <p>{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer has-background-black">
      <div className="content has-text-centered has-text-white">
        <p>
          <strong className="has-text-white">kevin's plants</strong> by{' '}
          <a
            className="has-text-success"
            href="https://github.com/kevinvelasquez9"
          >
            Kevin Velasquez
          </a>
          . This is a completely fake website and only meant to be a fun side
          project :)
        </p>
      </div>
    </footer>
  );
};

export default Footer;

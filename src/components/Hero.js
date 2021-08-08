import React from 'react';

const Hero = ({ title, subtitle }) => {
  return (
    <>
      <section class="column hero is-large is-hidden-mobile is-12">
        <div class="hero-body">
          <div class="">
            <p class="title has-text-centered">{title}</p>
          </div>
        </div>
      </section>
      <section class="column hero is-large is-hidden-tablet is-12">
        <div class="hero-body">
          <div class="">
            <p class="title has-text-centered">{title}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

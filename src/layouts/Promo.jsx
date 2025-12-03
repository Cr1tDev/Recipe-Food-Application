import React from 'react';
import Tag from '../components/common/Tag';
import Button from '../components/common/Button';
import promoImg from '../assets/image/promoImg.webp';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container-wrapper">
        <div className="promo-container">
          <div className="promo-content">
            <Tag position="right" color="light">
              Shop my premium recipe
            </Tag>
            <h2 className="promo-heading">
              Discover and indulge in my exclusive collection of gourmet
              recipes.
            </h2>

            <Button color="light" href="#">
              Contact Me
            </Button>
          </div>
          <figure className="promo-figure">
            <img className="promo-img" src={promoImg} alt="recipe book" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Promo;

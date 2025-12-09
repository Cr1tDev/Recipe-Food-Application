import React from 'react';
import Tag from '../components/common/Tag';
import TextSpark from '../components/common/TextSpark';
import Button from '../components/common/Button';
import heroImg from '../assets/image/hero.webp';
import playIcon from '../assets/svg/playIcon.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container-wrapper">
        <div className="hero-container">
          <div className="hero-container__heading">
            <Tag position="right" color="green">
              Welcome to recipa
            </Tag>
            <h1 className="hero-heading">
              Come, let's savor the goodness of my
              <TextSpark>nutritious.</TextSpark>
            </h1>
            <p className="hero-description">
              Discover the art of cooking nutritious and mouthwatering dishes
              with me.
            </p>
            <Button color="green" href="/recipes">
              All Recipes
            </Button>
          </div>

          <div className="hero-container__image">
            <img className="hero-img" src={heroImg} alt="cooking" loading="lazy" />
            <button
              type="button"
              className="hero__play-button"
              aria-label="Play introduction video"
            >
              <img
                className="hero__play-icon"
                src={playIcon}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

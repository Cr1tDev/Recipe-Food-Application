import React from 'react';
import Tag from '../components/common/Tag';
import TextSpark from '../components/common/TextSpark';
import Button from '../components/common/Button';
import aboutBg from '../assets/image/aboutBg.webp';

const About = () => {
  return (
    <section className="about">
      <div className="container-wrapper">
        <div className="about-container">
          <div className="about-heading">
            <Tag position="right" color="green">
              Abut me
            </Tag>
            <h2 className="about-text">
              Jonamae Lazana's journey from kitchen whiz to digital culinary
              <TextSpark size="3rem">Star.</TextSpark>
            </h2>

            <Button color="green" href="#">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="about-background">
        <img className="about-img" src={aboutBg} alt="cooking" />
      </div>
    </section>
  );
};

export default About;

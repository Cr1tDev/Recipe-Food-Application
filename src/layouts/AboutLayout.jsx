import React from 'react';
import '../css/about.css';
import Tag from '../components/common/Tag';
import TextSpark from '../components/common/TextSpark';
import aboutBg from '../assets/image/aboutBg.webp';
import Featured from '../layouts/Featured';
import FollowSocials from '../components/FollowSocials';
import aboutDesign from '../assets/image/aboutDesign.jpg';

const AboutLayout = () => {
  return (
    <>
      <section className="about">
        <div className="container-wrapper">
          <div className="about-container">
            <div className="about-heading">
              <Tag position="right" color="green">
                Abut me
              </Tag>
              <h2
                className="about-text"
                style={{ width: '80%', fontSize: '4rem' }}
              >
                Jonamae Lazana's journey from kitchen whiz to digital culinary
                <TextSpark size="4rem">Star.</TextSpark>
              </h2>
            </div>
          </div>
        </div>
        <div className="about-background">
          <img className="about-img" src={aboutBg} alt="cooking" />
        </div>
      </section>
      <Featured />
      <section className="about">
        <div className="container-wrapper">
          <div className="about-container">
            <div></div>
            <div className="about-heading right">
              <p className="about-sub__heading">
                Lucia Delgado is a culinary virtuoso, renowned for melding
                traditional flavors with contemporary techniques.
                <br />
                <br />
                Her entrepreneurial spirit doesn't stop at the stove; she's also
                the driving force behind several innovative gastronomic
                ventures, making her a recognized name in both online and
                offline culinary circles.
              </p>
              <FollowSocials />
            </div>
          </div>
        </div>
        <div className="about-background__img">
          <img className="about__img" src={aboutDesign} alt="cooking" />
        </div>
      </section>
    </>
  );
};

export default AboutLayout;

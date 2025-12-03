import React from 'react';
import Tag from '../components/common/Tag';
import appleBadge from '../assets/image/appleBadge.png';
import googlePlayBadge from '../assets/image/googlePlayBadge.png';
import mobileMockup from '../assets/image/mobileMockup.jpg';

const AppDownload = () => {
  return (
    <section className="download">
      <div className="container-wrapper">
        <div className="download-container">
          <div className="download-content">
            <Tag position="right" color="green">
              Download app
            </Tag>
            <h2 className="download-header">
              Get it on your iPhone or Android and dive into a world of culinary
              adventures, anytime, anywhere.
            </h2>
            <div className="donwload-buttons">
              <a href="#" className="app-download__link">
                <img src={appleBadge} alt="Download on the App Store" />
              </a>
              <a href="#" className="app-download__link">
                <img src={googlePlayBadge} alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <div className="download-figure">
            <img src={mobileMockup} alt="Mobile app" className="download-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

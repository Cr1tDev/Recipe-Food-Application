import React from 'react';
import instaIcon from '../assets/icons/instaIcon.png';

const images = [
  'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/65042c4a2dc3c15cdd271d43_insta-4.jpg',
  'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/65042c0dda5ee049389e83b5_insta-3-p-500.jpg',
  'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/65042c0ccf2de05165003a1a_insta-2-p-500.jpg',
  'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/65042c0c869cc9c0d2bdbaaa_insta-1-p-500.jpg',
  'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/65042c49c7145b13706fd220_insta-5-p-500.jpg',
];

const InstaFeed = () => {
  return (
    <section className="instagram">
      <div className="container-wrapper">
        <div className="instagram-container">
          <div className="instagram-label">
            <img
              className="instagram-feed__icon"
              src={instaIcon}
              alt="Instagram Icon"
            />
            <span className="instagram-feed__title">Instagram</span>
          </div>
          {/* <!-- Insert content dynamicly --> */}
          <div className="instagram-feed">
            {images.map((img, i) => (
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="instagram-feed__item"
                key={i}
              >
                <img
                  className="instagram-feed__image"
                  src={img}
                  alt="Instagram post"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaFeed;

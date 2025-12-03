import React from 'react';
import Tag from '../components/common/Tag';

const Featured = () => {
  return (
    <section className="featured">
      <div className="container-wrapper">
        <div className="featured-container">
          <Tag position="right" color="green">
            Featured on
          </Tag>

          <div className="featured-logos">
            <img
              className="featured__logo"
              src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6554e9936483aff6a6fb2495_logo-3.svg"
              alt="Media partner 1 logo"
              loading="lazy"
            />

            <img
              className="featured__logo"
              src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6554e993ba9b6474c62e713e_logo-5.svg"
              alt="Media partner 2 logo"
              loading="lazy"
            />

            <img
              className="featured__logo"
              src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6554e997d16ce48b7668f9f7_logo-1.svg"
              alt="Media partner 3 logo"
              loading="lazy"
            />

            <img
              className="featured__logo"
              src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6554e9958709782214641d0d_logo-9.svg"
              alt="Media partner 4 logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;

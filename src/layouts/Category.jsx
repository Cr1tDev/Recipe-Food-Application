import React from 'react';
import Tag from '../components/common/Tag';
import TextSpark from '../components/common/TextSpark';

const Category = () => {
  const categories = ['breakfast', 'lunch', 'dessert', 'side'];

  const categoryIcons = {
    breakfast:
      'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2d1ff8db94df5297188_icons8-bread-240.png',
    lunch:
      'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
    side: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e314a55677b935bd3113_icons8-the-toast-240.png',
    dessert:
      'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e33c6ae3d69baf126f5a_icons8-cake-240.png',
  };

  return (
    <section className="category">
      <div className="container-wrapper">
        <div className="category-container">
          <Tag position="center" color="green">
            Browse recipes by category
          </Tag>
          <h2 className="category-heading">
            Recipes<TextSpark>categories.</TextSpark>
          </h2>
        </div>
        <div className="category-content">
          <div className="categories">
            {categories.map((cat, i) => (
              <article key={i} className="category-card">
                <a href="#" className="category-card__link" data-link>
                  <img
                    className="category-card__icon"
                    src={categoryIcons[cat.toLowerCase()]}
                    alt={cat}
                  />
                  <h3 className="category-card__title">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </h3>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

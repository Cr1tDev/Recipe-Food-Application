import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Tag from '../components/common/Tag';
import TextSpark from '../components/common/TextSpark';

const CATEGORIES = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2d1ff8db94df5297188_icons8-bread-240.png',
    link: '/recipe-category/breakfast',
  },
  {
    id: 'lunch',
    name: 'Lunch',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
    link: '/recipe-category/lunch',
  },
  {
    id: 'side',
    name: 'Side',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e314a55677b935bd3113_icons8-the-toast-240.png',
    link: '/recipe-category/side',
  },
  {
    id: 'dessert',
    name: 'Dessert',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e33c6ae3d69baf126f5a_icons8-cake-240.png',
    link: '/recipe-category/dessert',
  },
];

const CategoryCard = ({ category }) => (
  <a href={category.link}>
    <article className="category-card">
      <div
        className="category-card__link"
        aria-label={`View ${category.name} recipes`}
      >
        <img
          className="category-card__icon"
          src={category.icon}
          alt={category.name}
          loading="lazy"
        />
        <h3 className="category-card__title">{category.name}</h3>
      </div>
    </article>
  </a>
);

const Category = () => {
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
            {CATEGORIES.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

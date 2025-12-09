import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../components/common/Tag';
import TextSpark from '../components/common/TextSpark';
import { CATEGORIES } from '../utils/constants';

const CategoryCard = ({ category }) => (
  <Link to={category.link}>
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
  </Link>
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
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

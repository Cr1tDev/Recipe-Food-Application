import React from 'react';
import { Link } from 'react-router-dom'; // For client-side navigation
import RecipeCardStats from './common/RecipeCardStats';
import RecipeBadge from './common/RecipeBadge';

// Category mapping configuration
const CATEGORY_CONFIG = {
  breakfast: {
    name: 'Breakfast',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2d1ff8db94df5297188_icons8-bread-240.png',
    url: '/recipe-categories/breakfast',
  },
  lunch: {
    name: 'Lunch',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
    url: '/recipe-categories/lunch',
  },
  dessert: {
    name: 'Dessert',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e33c6ae3d69baf126f5a_icons8-cake-240.png',
    url: '/recipe-categories/dessert',
  },
  side: {
    name: 'Side',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e314a55677b935bd3113_icons8-the-toast-240.png',
    url: '/recipe-categories/drink',
  },
  default: {
    name: 'Lunch',
    icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
    url: '/recipes',
  },
};

// Helper function to get category info
const getCategoryInfo = categoryString => {
  if (!categoryString) return CATEGORY_CONFIG.default;

  const normalizedCategory = categoryString;

  if (normalizedCategory.includes('breakfast'))
    return CATEGORY_CONFIG.breakfast;
  if (
    normalizedCategory.includes('lunch') ||
    normalizedCategory.includes('main course')
  )
    return CATEGORY_CONFIG.lunch;
  if (normalizedCategory.includes('dessert')) return CATEGORY_CONFIG.dessert;
  if (
    normalizedCategory.includes('side') ||
    normalizedCategory.includes('drink')
  )
    return CATEGORY_CONFIG.side;

  return CATEGORY_CONFIG.default;
};

// Helper function to determine difficulty
const getDifficulty = minutes => {
  if (minutes <= 20) return 'Easy';
  if (minutes <= 45) return 'Medium';
  return 'Hard';
};

// Helper function to format description
const formatDescription = summary => {
  if (!summary) return "A delicious and nutritious recipe you'll love.";
  return summary.replace(/<[^>]*>/g, '').substring(0, 100) + '...';
};

const RecipeCard = ({ recipe }) => {
  const category = getCategoryInfo(recipe.category);
  const readyInMinutes = recipe.readyInMinutes || 30;
  const servings = recipe.servings || 4;
  const difficulty = getDifficulty(readyInMinutes);
  const title = recipe.title || 'Delicious Recipe';
  const description = formatDescription(recipe.summary);

  return (
    <article className="recipe-card" data-recipe-id={recipe.id}>
      <div className="recipe-card__badge">
        <Link to={category.url} className="recipe-card__link">
          <RecipeBadge icon={category.icon} name={category.name} />
        </Link>
      </div>

      <Link to={`/recipe/${recipe.id}`} className="recipe-card__link">
        <div className="recipe-card__image-wrapper">
          <img
            className="recipe-card__image"
            src={recipe.image}
            alt={title}
            loading="lazy"
          />

          <div className="recipe-card__info">
            <RecipeCardStats
              readyInMinutes={readyInMinutes}
              servings={servings}
              difficulty={difficulty}
            />
          </div>
        </div>

        <div className="recipe-card__content">
          <h3 className="recipe-card__title">{title}</h3>
          <p className="recipe-card__description">{description}</p>
          <div className="link-underline">
            <span className="link-underline__text">View Recipe</span>
            <span className="link-underline__line"></span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RecipeCard;

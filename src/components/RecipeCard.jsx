import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipeCardStats from './common/RecipeCardStats';
import RecipeBadge from './common/RecipeBadge';
import { CATEGORY_CONFIG } from '../utils/constants';
import { getDifficulty, formatDescription } from '../utils/helpers';

/**
 * Gets category info from category string
 * @param {string} categoryString - Category string
 * @returns {Object} Category configuration object
 */
const getCategoryInfo = (categoryString) => {
  if (!categoryString) return CATEGORY_CONFIG.default;

  const normalizedCategory = categoryString.toLowerCase();

  if (normalizedCategory.includes('breakfast')) {
    return CATEGORY_CONFIG.breakfast;
  }
  if (
    normalizedCategory.includes('lunch') ||
    normalizedCategory.includes('main course') ||
    normalizedCategory.includes('beef')
  ) {
    return CATEGORY_CONFIG.lunch;
  }
  if (normalizedCategory.includes('dessert')) {
    return CATEGORY_CONFIG.dessert;
  }
  if (
    normalizedCategory.includes('side') ||
    normalizedCategory.includes('drink')
  ) {
    return CATEGORY_CONFIG.side;
  }

  return CATEGORY_CONFIG.default;
};

const RecipeCard = ({ recipe }) => {
  const location = useLocation();
  const category = useMemo(
    () => getCategoryInfo(recipe.category),
    [recipe.category]
  );

  const readyInMinutes = recipe.readyInMinutes || 30;
  const servings = recipe.servings || 4;
  const difficulty = useMemo(
    () => getDifficulty(readyInMinutes),
    [readyInMinutes]
  );
  const title = recipe.title || 'Delicious Recipe';
  const description = useMemo(
    () => formatDescription(recipe.summary),
    [recipe.summary]
  );

  // Pass current location as state so back button knows where to return
  const recipeLinkState = {
    from: location.pathname,
  };

  return (
    <article className="recipe-card" data-recipe-id={recipe.id}>
      <div className="recipe-card__badge">
        <Link to={category.url} className="recipe-card__link">
          <RecipeBadge icon={category.icon} name={category.name} />
        </Link>
      </div>

      <Link
        to={`/recipe/${recipe.id}`}
        state={recipeLinkState}
        className="recipe-card__link"
      >
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

export default React.memo(RecipeCard);

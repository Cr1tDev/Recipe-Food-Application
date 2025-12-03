import React from 'react';

const RecipeCard = ({ recipe }) => {
  const getCategoryInfo = () => {
    if (recipe.category?.includes('breakfast'))
      return {
        name: 'Breakfast',
        icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2d1ff8db94df5297188_icons8-bread-240.png',
        url: '/recipe-categories/breakfast',
      };
    if (
      recipe.category?.includes('lunch') ||
      recipe.category?.includes('main course')
    )
      return {
        name: 'Lunch',
        icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
        url: '/recipe-categories/lunch',
      };
    if (recipe.category?.includes('dessert'))
      return {
        name: 'Dessert',
        icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e33c6ae3d69baf126f5a_icons8-cake-240.png',
        url: '/recipe-categories/dessert',
      };
    if (recipe.category?.includes('side') || recipe.category?.includes('drink'))
      return {
        name: 'Side',
        icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e314a55677b935bd3113_icons8-the-toast-240.png',
        url: '/recipe-categories/drink',
      };
    return {
      name: 'Lunch',
      icon: 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c089/6502e2f3fbcadab05d250a8b_icons8-pizza-240.png',
      url: '/recipes',
    };
  };

  const category = getCategoryInfo();
  const readyInMinutes = recipe.readyInMinutes || 30;
  const servings = recipe.servings || 4;
  const difficulty =
    readyInMinutes <= 20 ? 'Easy' : readyInMinutes <= 45 ? 'Medium' : 'Hard';
  const title = recipe.title || 'Delicious Recipe';
  const description = recipe.summary
    ? recipe.summary.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
    : "A delicious and nutritious recipe you'll love.";

  return (
    <article className="recipe-card" data-recipe-id={recipe.id}>
      <div className="recipe-card__badge">
        <a href={category.url} className="badge">
          <img
            className="badge__icon"
            src={category.icon}
            alt={category.name}
          />
          <span className="badge__text">{category.name}</span>
        </a>
      </div>

      <a href={`/recipe/${recipe.id}`} className="recipe-card__link">
        <div className="recipe-card__image-wrapper">
          <img
            className="recipe-card__image"
            src={recipe.image}
            alt={title}
            loading="lazy"
          />

          <div className="recipe-card__info">
            <div className="recipe-meta">
              <img
                className="recipe-meta__icon"
                src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/650300cba3d8f08049ff6aed_schedule_FILL0_wght300_GRAD0_opsz24.svg"
              />
              <span className="recipe-meta__text">{readyInMinutes} Min</span>
            </div>

            <div className="recipe-meta">
              <img
                className="recipe-meta__icon"
                src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/65030090282cb8dc8d551130_account_circle_FILL0_wght300_GRAD0_opsz24.svg"
              />
              <span className="recipe-meta__text">{servings} Servings</span>
            </div>

            <div className="recipe-meta">
              <img
                className="recipe-meta__icon"
                src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/65030140cda3526d9edcd88b_signal_cellular_alt_FILL0_wght300_GRAD0_opsz24.svg"
              />
              <span className="recipe-meta__text">{difficulty}</span>
            </div>
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
      </a>
    </article>
  );
};

export default RecipeCard;

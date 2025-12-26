import React from 'react';
import TextSpark from '../components/common/TextSpark';
import Button from '../components/common/Button';
import RecipeCard from '../components/RecipeCard';
import BookmarkIcon from '../assets/icons/bookmarkIcon.png';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import useRandomRecipes from '../hooks/useRandomRecipes';

const Recipes = () => {
  const { recipes, isLoading, error } = useRandomRecipes(6);

  return (
    <section className="recipes">
      <div className="container-wrapper">
        <div className="recipes-container">
          <h2 className="recipes-header">
            Latest<TextSpark>recipes.</TextSpark>
          </h2>
          <Button color="green" href="/recipes">
            All Recipes
          </Button>
        </div>
        <div className="recipes-content">
          <div className="recipe-tabs">
            <button
              className="tabs__button tabs__button--active"
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="latest-recipes"
            >
              Latest Recipes
            </button>

            <button
              className="tabs__button"
              type="button"
              aria-selected="false"
              aria-controls="featured-recipes"
            >
              <img
                className="tabs__icon"
                src={BookmarkIcon}
                alt=""
                aria-hidden="true"
              />
              Featured Recipes
            </button>
          </div>
          <div className="recipe-container__card">
            {isLoading && <Loader />}
            {!isLoading && !error && recipes.length > 0 && (
              <div className="container__card">
                {recipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}
            {!isLoading && !error && recipes.length === 0 && (
              <p>No recipes available at the moment.</p>
            )}
            {error && <ErrorMessage message={error} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;

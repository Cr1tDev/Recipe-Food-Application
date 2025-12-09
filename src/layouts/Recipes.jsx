import React from 'react';
import TextSpark from '../components/common/TextSpark';
import Button from '../components/common/Button';
import RecipeCard from '../components/RecipeCard';
import BookmarkIcon from '../assets/icons/BookmarkIcon.png';
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
          <Button color="green" href="#">
            All Recipes
          </Button>
        </div>
        <div className="recipes-content">
          <div className="recipe-tabs">
            <button
              className="tabs__button tabs__button--active"
              role="tab"
              aria-selected="true"
              aria-controls="latest-recipes"
            >
              Latest Recipes
            </button>

            <button
              className="tabs__button"
              aria-selected="false"
              aria-controls="featured-recipes"
            >
              <img
                className="tabs__icon"
                src={BookmarkIcon}
                alt="Featured Icon"
              />
              Featured Recipes
            </button>
          </div>
          <div className="recipe-container__card">
            {isLoading && <Loader />}
            {!isLoading && !error && (
              <div className="container__card">
                {recipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}
            {error && <ErrorMessage message={error} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;

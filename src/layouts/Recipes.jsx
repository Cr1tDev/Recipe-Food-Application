import React, { useState, useEffect } from 'react';
import TextSpark from '../components/common/TextSpark';
import Button from '../components/common/Button';
import RecipeCard from '../components/RecipeCard';
import BookmarkIcon from '../assets/icons/BookmarkIcon.png';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const promises = Array.from({ length: 6 }, async function () {
          const res = await fetch(
            'https://www.themealdb.com/api/json/v1/1/random.php'
          );
          return await res.json();
        });

        const data = await Promise.all(promises);
        console.log(data);

        // Map TheMealDB data to the expected recipe format
        const mappedRecipes = data.map(result => {
          const meal = result.meals[0];

          return {
            id: meal.idMeal,
            title: meal.strMeal,
            image: meal.strMealThumb,
            category: [meal.strCategory.toLowerCase()],
            summary:
              'A delicious and nutritious recipe you ll love. Food is any nourishing substance, usually of plant',
            readyInMinutes: 30,
            servings: 4,
          };
        });

        setRecipes(mappedRecipes);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again later.');
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

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

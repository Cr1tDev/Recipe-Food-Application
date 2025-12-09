import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import TextSpark from '../components/common/TextSpark';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import {
  fetchRecipesByCategory,
  fetchRecipeById,
  mapMealToRecipe,
} from '../utils/api';
import { CATEGORY_MAP, DEFAULT_CATEGORY } from '../utils/constants';

const CategoryPage = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Get the API category name from our mapping
      const dbCategory = CATEGORY_MAP[category] || DEFAULT_CATEGORY;

      // Step 1: Get filtered recipes
      const meals = await fetchRecipesByCategory(dbCategory);

      if (!meals || meals.length === 0) {
        setRecipes([]);
        return;
      }

      // Step 2: Get details for first 3 recipes (limit to avoid too many API calls)
      const recipeDetails = await Promise.all(
        meals.slice(0, 3).map((meal) => fetchRecipeById(meal.idMeal))
      );

      // Step 3: Map data and set state
      const mappedRecipes = recipeDetails
        .map(mapMealToRecipe)
        .filter(Boolean);

      setRecipes(mappedRecipes);
    } catch (err) {
      setError(err.message || 'Failed to fetch recipes');
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  // Handle case when category is not in our mapping
  const displayCategory = CATEGORY_MAP[category] || category;

  return (
    <section className="recipes">
      <div className="container-wrapper">
        <div className="recipes-container">
          <h2 className="recipes-header">
            Latest recipe<TextSpark>{displayCategory}.</TextSpark>
          </h2>
        </div>
        <div className="recipes-content">
          <div className="recipe-container__card">
            {isLoading && <Loader />}

            {!isLoading && !error && recipes.length > 0 && (
              <div className="container__card">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}

            {!isLoading && !error && recipes.length === 0 && (
              <div className="no-recipes">
                <p>No recipes found in the {displayCategory} category.</p>
                <Link to="/" className="back-link">
                  ← Browse other categories
                </Link>
              </div>
            )}

            {error && <ErrorMessage message={error} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;

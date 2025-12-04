import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TextSpark from '../components/common/TextSpark';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

// Category mapping configuration
const CATEGORY_MAP = {
  breakfast: 'Breakfast',
  lunch: 'Beef',
  dessert: 'Dessert',
  side: 'Side',
};

// Default fallback category
const DEFAULT_CATEGORY = 'Seafood';

// API service for fetching recipes
const recipeApi = {
  // Get filtered recipes by category
  getRecipesByCategory: async category => {
    const dbCategory = CATEGORY_MAP[category] || DEFAULT_CATEGORY;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${dbCategory}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recipes: ${response.status}`);
    }

    return response.json();
  },

  // Get detailed recipe by ID
  getRecipeDetails: async id => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recipe details: ${response.status}`);
    }

    return response.json();
  },

  // Map TheMealDB data to our recipe format
  mapRecipeData: meal => ({
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
    category: meal.strCategory.toLowerCase(),
    summary:
      'A delicious and nutritious recipe you ll love. Food is any nourishing substance, usually of plant',
    readyInMinutes: 30,
    servings: 4,
  }),
};

const CategoryPage = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Step 1: Get filtered recipes
        const { meals } = await recipeApi.getRecipesByCategory(category);

        if (!meals || meals.length === 0) {
          setRecipes([]);
          return;
        }

        // Step 2: Get details for first 3 recipes
        const recipeDetails = await Promise.all(
          meals.slice(0, 3).map(meal => recipeApi.getRecipeDetails(meal.idMeal))
        );

        // Step 3: Map data and set state
        const mappedRecipes = recipeDetails
          .map(detail => detail.meals[0])
          .filter(Boolean)
          .map(recipeApi.mapRecipeData);

        setRecipes(mappedRecipes);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [category]);

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
                {recipes.map(recipe => (
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

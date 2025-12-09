import { useState, useEffect, useCallback } from 'react';

const useSearchRecipes = (initialQuery = '') => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(initialQuery);

  const fetchRecipes = useCallback(async searchTerm => {
    const cleanedTerm = searchTerm.trim();

    // Reset search if empty
    if (!cleanedTerm) {
      setRecipes([]);
      setError(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          cleanedTerm
        )}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const { meals } = await response.json();

      const mappedRecipes = meals.map(result => {
        const meal = result;

        return {
          id: meal.idMeal,
          title: meal.strMeal,
          image: meal.strMealThumb,
          category: meal.strCategory.toLowerCase(),
          summary:
            'A delicious and nutritious recipe you’ll love. Food is any nourishing substance, usually of plant',
          readyInMinutes: 30,
          servings: 4,
        };
      });

      setRecipes(mappedRecipes || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch recipes');
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Trigger search whenever query changes
  useEffect(() => {
    fetchRecipes(query);
  }, [query, fetchRecipes]);

  // Exposed function for components
  const handleSearch = value => {
    setQuery(value);
    console.log(value.length);
  };

  return {
    recipes,
    isLoading,
    error,
    query,
    handleSearch,
  };
};

export default useSearchRecipes;

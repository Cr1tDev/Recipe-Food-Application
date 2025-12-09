import { useEffect, useState, useCallback } from 'react';
import { fetchRandomRecipe, mapMealToRecipe } from '../utils/api';

/**
 * Custom hook to fetch random recipes
 * @param {number} count - Number of random recipes to fetch (default: 6)
 * @returns {Object} Object containing recipes, isLoading, and error
 */
export default function useRandomRecipes(count = 6) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch all random recipes in parallel
      const promises = Array.from({ length: count }, () => fetchRandomRecipe());
      const meals = await Promise.all(promises);

      // Filter out null values and map to recipe format
      const mappedRecipes = meals
        .filter(Boolean)
        .map(mapMealToRecipe)
        .filter(Boolean);

      setRecipes(mappedRecipes);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch recipes. Please try again later.');
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  }, [count]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return { recipes, isLoading, error };
}

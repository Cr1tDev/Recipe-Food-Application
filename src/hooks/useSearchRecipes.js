import { useState, useEffect, useCallback, useRef } from 'react';
import { searchRecipes, mapMealToRecipe } from '../utils/api';

/**
 * Custom hook for searching recipes with debouncing
 * @param {string} initialQuery - Initial search query (default: '')
 * @returns {Object} Object containing recipes, isLoading, error, query, and handleSearch
 */
const useSearchRecipes = (initialQuery = '') => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(initialQuery);
  const debounceTimeoutRef = useRef(null);

  const fetchRecipes = useCallback(async (searchTerm) => {
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

      const meals = await searchRecipes(cleanedTerm);

      // Map meals to recipe format
      const mappedRecipes = meals.map(mapMealToRecipe).filter(Boolean);

      setRecipes(mappedRecipes);
    } catch (err) {
      setError(err.message || 'Failed to fetch recipes');
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Trigger search with debouncing whenever query changes
  useEffect(() => {
    // Clear previous timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set new timeout for debounced search
    debounceTimeoutRef.current = setTimeout(() => {
      fetchRecipes(query);
    }, 300);

    // Cleanup function
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [query, fetchRecipes]);

  // Exposed function for components
  const handleSearch = useCallback((value) => {
    setQuery(value);
  }, []);

  return {
    recipes,
    isLoading,
    error,
    query,
    handleSearch,
  };
};

export default useSearchRecipes;

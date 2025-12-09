/**
 * Centralized API service for TheMealDB
 * Handles all recipe-related API calls
 */

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Fetches a random recipe from TheMealDB
 * @returns {Promise<Object>} Recipe data
 */
export const fetchRandomRecipe = async () => {
  const response = await fetch(`${API_BASE_URL}/random.php`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch random recipe: ${response.status}`);
  }
  
  const data = await response.json();
  return data.meals?.[0] || null;
};

/**
 * Searches recipes by name
 * @param {string} searchTerm - Search query
 * @returns {Promise<Array>} Array of recipe objects
 */
export const searchRecipes = async (searchTerm) => {
  const cleanedTerm = searchTerm.trim();
  
  if (!cleanedTerm) {
    return [];
  }
  
  const response = await fetch(
    `${API_BASE_URL}/search.php?s=${encodeURIComponent(cleanedTerm)}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to search recipes: ${response.status}`);
  }
  
  const data = await response.json();
  return data.meals || [];
};

/**
 * Fetches recipes by category
 * @param {string} category - Category name
 * @returns {Promise<Array>} Array of recipe objects
 */
export const fetchRecipesByCategory = async (category) => {
  const response = await fetch(
    `${API_BASE_URL}/filter.php?c=${encodeURIComponent(category)}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch recipes by category: ${response.status}`);
  }
  
  const data = await response.json();
  return data.meals || [];
};

/**
 * Fetches detailed recipe by ID
 * @param {string} id - Recipe ID
 * @returns {Promise<Object>} Detailed recipe object
 */
export const fetchRecipeById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch recipe: ${response.status}`);
  }
  
  const data = await response.json();
  
  if (!data.meals || data.meals.length === 0) {
    throw new Error('Recipe not found');
  }
  
  return data.meals[0];
};

/**
 * Maps TheMealDB meal object to our application's recipe format
 * @param {Object} meal - TheMealDB meal object
 * @returns {Object} Formatted recipe object
 */
export const mapMealToRecipe = (meal) => {
  if (!meal) return null;
  
  return {
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
    category: meal.strCategory?.toLowerCase() || 'other',
    summary: 'A delicious and nutritious recipe you\'ll love. Food is any nourishing substance, usually of plant',
    readyInMinutes: 30,
    servings: 4,
  };
};


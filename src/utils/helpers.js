/**
 * Helper functions for recipe data processing
 */

/**
 * Builds ingredients array from TheMealDB meal object
 * @param {Object} meal - TheMealDB meal object
 * @returns {Array} Array of ingredient objects with ingredient and measure
 */
export const buildIngredients = (meal) => {
  const ingredients = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || '',
      });
    }
  }
  
  return ingredients;
};

/**
 * Parses instructions string into step objects
 * @param {string} instructions - Instructions text
 * @returns {Array} Array of step objects with number and text
 */
export const parseInstructions = (instructions) => {
  if (!instructions) return [];
  
  const parts = instructions
    .split(/\r?\n\r?\n/) // Split on double newlines
    .map((p) => p.trim())
    .filter(Boolean); // Remove empty lines

  const steps = [];

  for (let i = 0; i < parts.length; i += 2) {
    const number = parseInt(parts[i], 10);
    const text = parts[i + 1] || '';

    if (!isNaN(number) && text) {
      steps.push({
        number,
        text,
      });
    }
  }

  return steps;
};

/**
 * Determines recipe difficulty based on cooking time
 * @param {number} minutes - Cooking time in minutes
 * @returns {string} Difficulty level: 'Easy', 'Medium', or 'Hard'
 */
export const getDifficulty = (minutes) => {
  if (minutes <= 20) return 'Easy';
  if (minutes <= 45) return 'Medium';
  return 'Hard';
};

/**
 * Formats recipe description/summary
 * @param {string} summary - Recipe summary text
 * @param {number} maxLength - Maximum length (default: 100)
 * @returns {string} Formatted description
 */
export const formatDescription = (summary, maxLength = 100) => {
  if (!summary) return "A delicious and nutritious recipe you'll love.";
  
  const cleaned = summary.replace(/<[^>]*>/g, '').trim();
  
  if (cleaned.length <= maxLength) return cleaned;
  
  return cleaned.substring(0, maxLength) + '...';
};

// Note: getCategoryInfo is now implemented directly in RecipeCard component
// to avoid circular dependencies. This export is kept for backward compatibility
// but the function logic has been moved to the component.



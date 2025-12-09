import { useEffect, useState } from 'react';

export default function useRandomRecipes(count = 6) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);

        const promises = Array.from({ length: count }, async () => {
          const res = await fetch(
            'https://www.themealdb.com/api/json/v1/1/random.php'
          );
          return await res.json();
        });

        const data = await Promise.all(promises);

        const mappedRecipes = data.map(result => {
          const meal = result.meals[0];

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

        setRecipes(mappedRecipes);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [count]);

  return { recipes, isLoading, error };
}

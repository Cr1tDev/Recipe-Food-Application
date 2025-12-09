import React, { useEffect, useState } from 'react';
import '../css/recipes.css';
import { useParams } from 'react-router-dom';
import RecipeCardStats from '../components/common/RecipeCardStats';
import Button from '../components/common/Button';

// ------------------
// Helper
// ------------------
function buildIngredients(meal) {
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
}

function parseInstructions(instructions) {
  // Split by blank lines
  const parts = instructions
    .split(/\r?\n\r?\n/) // split on double newlines
    .map(p => p.trim())
    .filter(Boolean); // remove empty lines

  const steps = [];

  for (let i = 0; i < parts.length; i += 2) {
    const number = parseInt(parts[i], 10); // "1" → 1
    const text = parts[i + 1] || '';

    steps.push({
      number,
      text,
    });
  }

  return steps;
}

const RecipeView = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadRecipe = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!res.ok) throw new Error('Failed to load recipe');

        const { meals } = await res.json();
        if (!meals) throw new Error('Recipe not found');

        const meal = meals[0];

        const correctedMeal = {
          id: meal.idMeal,
          title: meal.strMeal,
          category: meal.strCategory,
          area: meal.strArea,
          instructions: parseInstructions(meal.strInstructions),
          image: meal.strMealThumb,
          youtube: meal.strYoutube,
          ingredients: buildIngredients(meal),
        };
        console.log(correctedMeal);

        setRecipe(correctedMeal);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [id]);

  if (loading)
    return (
      <div className="container-wrapper">
        <p>Loading recipe...</p>
      </div>
    );

  if (error)
    return (
      <div className="container-wrapper">
        <p className="error">{error}</p>
      </div>
    );

  return (
    <section className="recipe-section">
      <div className="container-wrapper">
        {/* BACK BUTTON */}
        <button onClick={() => window.history.back()} className="back-button">
          ← Back
        </button>

        {/* HERO CARD */}
        <div className="main-card">
          {/* IMAGE */}
          <div className="main-card__image">
            <img src={recipe.image} alt={recipe.title} />
          </div>

          {/* CONTENT */}
          <div className="main-card__content">
            <div className="min-stats__card">
              <RecipeCardStats
                readyInMinutes="10"
                servings="1"
                difficulty="Easy"
              />
            </div>

            <h2 className="main-card__title">{recipe.title}</h2>

            <p className="main-card__description">
              {recipe.category} • {recipe.area}
            </p>

            <div className="main-card__button">
              <Button color="green">View Full Recipe</Button>
            </div>
          </div>
        </div>

        {/* INSTRUCTIONS SECTION */}
        <div className="instruction-container">
          {/* INGREDIENTS */}
          <div className="ingredients-container">
            <h4 className="recipe-heading">Ingredients</h4>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              maiores recusandae dolore corporis nulla incidunt, voluptatum
              commodi nihil ipsum eligendi veritatis, vitae nostrum placeat! Aut
              qui assumenda officiis nam tempore!
            </p>

            <ol className="ingredients-list">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>
                  {item.measure} {item.ingredient}
                </li>
              ))}
            </ol>
          </div>

          {/* PREPARATION */}
          <div className="preparation-container">
            <h4 className="recipe-heading">Preparation</h4>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              maiores recusandae dolore corporis nulla incidunt, voluptatum
              commodi nihil ipsum eligendi veritatis, vitae nostrum placeat! Aut
              qui assumenda officiis nam tempore!
            </p>

            <ul className="preparation-list">
              {recipe.instructions.map(step => (
                <li key={step.number}>
                  <span className="step-number">{step.number}.</span>{' '}
                  {step.text}
                </li>
              ))}
            </ul>
          </div>

          {/* HISTORY (OPTIONAL) */}
          <div className="history-container">
            <h4 className="recipe-heading">History</h4>
            <p>
              This dish is part of the {recipe.area} cuisine. More historical
              details can be added here if available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeView;

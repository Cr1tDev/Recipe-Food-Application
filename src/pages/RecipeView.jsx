import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import '../css/recipes.css';
import RecipeCardStats from '../components/common/RecipeCardStats';
import Button from '../components/common/Button';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { fetchRecipeById } from '../utils/api';
import { buildIngredients, parseInstructions } from '../utils/helpers';

const RecipeView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRecipe = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const meal = await fetchRecipeById(id);

      const formattedRecipe = {
        id: meal.idMeal,
        title: meal.strMeal,
        category: meal.strCategory,
        area: meal.strArea,
        instructions: parseInstructions(meal.strInstructions),
        image: meal.strMealThumb,
        youtube: meal.strYoutube,
        ingredients: buildIngredients(meal),
      };

      setRecipe(formattedRecipe);
    } catch (err) {
      setError(err.message || 'Failed to load recipe');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadRecipe();
  }, [loadRecipe]);

  const handleBack = useCallback(() => {
    // Check if there's history to go back to
    // If state.from exists (set when navigating from a list), go back
    // Otherwise, navigate to recipes page as fallback
    if (location.state?.from || window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/recipes', { replace: true });
    }
  }, [navigate, location.state]);

  if (loading) {
    return (
      <div className="container-wrapper">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-wrapper">
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container-wrapper">
        <ErrorMessage message="Recipe not found" />
      </div>
    );
  }

  return (
    <section className="recipe-section">
      <div className="container-wrapper">
        {/* BACK BUTTON */}
        <button onClick={handleBack} className="back-button" type="button">
          ← Back
        </button>

        {/* HERO CARD */}
        <div className="main-card">
          {/* IMAGE */}
          <div className="main-card__image">
            <img src={recipe.image} alt={recipe.title} loading="lazy" />
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
                <li key={`${item.ingredient}-${index}`}>
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

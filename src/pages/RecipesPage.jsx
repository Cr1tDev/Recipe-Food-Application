import React from 'react';
import TextSpark from '../components/common/TextSpark';
import sampleRecipe from '../assets/image/sample.jpg';
import Button from '../components/common/Button';
import RecipeCardStats from '../components/common/RecipeCardStats';
import '../css/recipes.css';

const RecipesPage = () => {
  return (
    <section className="recipe-section">
      <div className="container-wrapper">
        <h3 className="main-card__heading">
          Featured<TextSpark size="3rem">recipes.</TextSpark>
        </h3>

        <div className="main-card">
          {/* IMAGE */}
          <div className="main-card__image">
            <img src={sampleRecipe} alt="Recipe" />
          </div>

          {/* TEXT CONTENT */}
          <div className="main-card__content">
            <div className="main-card__stats">
              <RecipeCardStats
                readyInMinutes="5"
                servings="2"
                difficulty="Easy"
              />
            </div>

            <h2 className="main-card__title">Tropical sunset margarita</h2>

            <p className="main-card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <div className="main-card__button">
              <Button color="green" href="#">
                View Recipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesPage;

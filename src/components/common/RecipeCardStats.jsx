import React from 'react';

import minIcon from '../../assets/svg/timer.svg';
import servingsIcon from '../../assets/svg/person.svg';
import diffIcon from '../../assets/svg/difficulty.svg';

const RecipeCardStats = ({ readyInMinutes, servings, difficulty }) => {
  return (
    <>
      <div className="recipe-meta">
        <img className="recipe-meta__icon" src={minIcon} alt="Minutes" />
        <span className="recipe-meta__text">{readyInMinutes} Min</span>
      </div>

      <div className="recipe-meta">
        <img className="recipe-meta__icon" src={servingsIcon} alt="Servings" />
        <span className="recipe-meta__text">{servings} Servings</span>
      </div>

      <div className="recipe-meta">
        <img className="recipe-meta__icon" src={diffIcon} alt="Difficulty" />
        <span className="recipe-meta__text">{difficulty}</span>
      </div>
    </>
  );
};

export default RecipeCardStats;

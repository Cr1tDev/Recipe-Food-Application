import React from 'react';

const CategoryLayout = () => {
  return (
    <section className="recipes">
      <div className="container-wrapper">
        <div className="recipes-container">
          <h2 className="recipes-header">Latestrecipes.</h2>
        </div>
        <div className="recipes-content">
          <div className="recipe-container__card"></div>
        </div>
      </div>
    </section>
  );
};

export default CategoryLayout;

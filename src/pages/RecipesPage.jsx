import React, { useState } from 'react';
import TextSpark from '../components/common/TextSpark';
import sampleRecipe from '../assets/image/sample.jpg';
import Button from '../components/common/Button';
import RecipeCardStats from '../components/common/RecipeCardStats';
import Loader from '../components/Loader';
import '../css/recipes.css';

import useRandomRecipes from '../hooks/useRandomRecipes';
import useSearchRecipes from '../hooks/useSearchRecipes';
import RecipeCard from '../components/RecipeCard';
import ErrorMessage from '../components/ErrorMessage';

const RecipesPage = () => {
  // --- Data Hooks ---
  const {
    recipes: randomRecipes,
    isLoading: isRandomLoading,
    error: randomError,
  } = useRandomRecipes(11);

  const {
    recipes: searchResults,
    isLoading: isSearchLoading,
    error: searchError,
    handleSearch,
    query,
  } = useSearchRecipes();

  // --- Local State ---
  const [searchInput, setSearchInput] = useState('');
  // --- Handle Search ---
  const handleSearchSubmit = e => {
    e.preventDefault();

    const trimmed = searchInput.trim();

    // If search input is empty → reset search and show random recipes
    if (!trimmed) {
      handleSearch('');
      return;
    }

    handleSearch(trimmed);
  };

  // --- Derived UI State ---
  const isSearching = searchInput.trim().length > 0;
  const recipesToShow = isSearching ? searchResults : randomRecipes;

  const isLoadingToShow = isSearching ? isSearchLoading : isRandomLoading;
  const errorToShow = isSearching ? searchError : randomError;

  const showNoResults =
    isSearching &&
    !isSearchLoading &&
    searchResults.length === 0 &&
    !searchError;

  return (
    <>
      <section className="recipe-section">
        <div className="container-wrapper">
          <h3 className="main-card__heading">
            Featured<TextSpark size="3rem">recipes.</TextSpark>
          </h3>

          <div className="main-card">
            <div className="main-card__image">
              <img src={sampleRecipe} alt="Recipe" />
            </div>

            <div className="main-card__content">
              <div className="min-stats__card">
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
                <Button color="green">View Recipe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recipes">
        <div className="container-wrapper">
          <div className="recipes-container">
            <h2 className="recipes-header">
              Latest<TextSpark>recipes.</TextSpark>
            </h2>

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="searchbar-container">
              <input
                type="search"
                placeholder="Search recipes..."
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="recipes-content">
            <div className="recipe-container__card">
              {/* Loading */}
              {isLoadingToShow && <Loader />}

              {/* No Search Results */}
              {showNoResults && (
                <div className="no-results-message">
                  No recipes found for "{query}". Try another search term.
                </div>
              )}

              {/* Recipe List */}
              {!isLoadingToShow && !errorToShow && !showNoResults && (
                <div className="container__card">
                  {recipesToShow.map(recipe => (
                    <RecipeCard
                      key={recipe.idMeal || recipe.id}
                      recipe={recipe}
                    />
                  ))}
                </div>
              )}

              {/* Error */}
              {errorToShow && <ErrorMessage message={errorToShow} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipesPage;

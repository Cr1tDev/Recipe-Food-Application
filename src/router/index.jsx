import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import RecipesPage from '../pages/RecipesPage';
import CategoryPage from '../pages/CategoryPage';
import RecipeView from '../pages/RecipeView';

/**
 * Application router configuration
 */
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipe-category/:category" element={<CategoryPage />} />
      <Route path="/recipe/:id" element={<RecipeView />} />
    </Route>
  )
);


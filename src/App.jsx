import React from 'react';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MainLayout from './layouts/MainLayout';
import RecipesPage from './pages/RecipesPage';
import CategoryPage from './pages/CategoryPage';
import RecipeView from './pages/RecipeView';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipe-category/:category" element={<CategoryPage />} />
      <Route path="/recipe/:id" element={<RecipeView />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

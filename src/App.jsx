import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

/**
 * Main App component
 * Sets up the router provider for the application
 */
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

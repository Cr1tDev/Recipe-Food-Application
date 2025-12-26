import React from 'react';
import Hero from '../layouts/Hero';
import Featured from '../layouts/Featured';
import Category from '../layouts/Category';
import Recipes from '../layouts/Recipes';
import Promo from '../layouts/Promo';
import About from '../layouts/About';
import Insight from '../layouts/Insight';
import AppDownload from '../layouts/AppDownload';

const HomePage = () => {
  return (
    <div className="app">
      <Hero />
      <Featured />
      <Category />
      <Recipes />
      <Promo />
      <About />
      <Insight />
      <AppDownload />
    </div>
  );
};

export default HomePage;

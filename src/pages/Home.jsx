import React from 'react';
import Navbar from '../layouts/Navbar';
import Hero from '../layouts/Hero';
import Featured from '../layouts/Featured';
import Category from '../layouts/category';
import Recipes from '../layouts/Recipes';
import Promo from '../layouts/Promo';
import About from '../layouts/About';
import Insight from '../layouts/Insight';
import AppDownload from '../layouts/AppDownload';
import InstaFeed from '../layouts/InstaFeed';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Featured />
      <Category />
      <Recipes />
      <Promo />
      <About />
      <Insight />
      <AppDownload />
      <InstaFeed />
      <Footer />
    </div>
  );
};

export default Home;

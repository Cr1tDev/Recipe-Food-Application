import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InstaFeed from '../components/InstaFeed';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <InstaFeed />
      <Footer />
    </>
  );
};

export default MainLayout;

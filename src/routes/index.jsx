import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import TermsLayout from '../layouts/layoutssimple'; // Add this import

// Import pages
import Home from '../pages/Home';
import Product from '../pages/Product';
import Pricing from '../pages/Pricing';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Careers from '../pages/Careers';
import PrivacyPolicy from '../pages/policy';
import Terms from '../pages/Terms'; // Assuming you have a Terms page component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout showStars={true}><Home /></MainLayout>} />
      <Route path="/fusionsuite" element={<MainLayout showBackground={true}><Product /></MainLayout>} />
      <Route path="/pricing" element={<MainLayout showBackground={true}><Pricing /></MainLayout>} />
      <Route path="/about" element={<MainLayout showBackground={true}><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout showBackground={true}><Contact /></MainLayout>} />
      <Route path="/careers" element={<MainLayout showBackground={true}><Careers /></MainLayout>} />
      <Route path="/aboutus" element={<MainLayout showBackground={true}><About /></MainLayout>} />
      <Route path="/terms" element={<MainLayout showBackground={false}><Terms /></MainLayout>} />
      <Route path="/policy" element={<MainLayout showBackground={false}><PrivacyPolicy /></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;
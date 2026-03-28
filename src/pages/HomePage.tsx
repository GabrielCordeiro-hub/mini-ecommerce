import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/layout/Hero';
import { ProductGrid } from '../components/product/ProductGrid';
import { CartDrawer } from '../components/cart/CartDrawer';

export const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setTimeout(() => {
      const section = document.getElementById('products');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductGrid activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </main>
      <Footer onCategorySelect={handleCategorySelect} />
      <CartDrawer />
    </div>
  );
};

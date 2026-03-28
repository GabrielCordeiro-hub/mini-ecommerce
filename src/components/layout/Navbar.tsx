import React, { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar: React.FC = () => {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 premium-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-display font-bold tracking-tighter">AURA</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-medium text-sm text-foreground/80 hover:text-foreground transition-colors">Home</button>
            <a href="#products" className="font-medium text-sm text-foreground/80 hover:text-foreground transition-colors">Products</a>
            <a href="#categories" className="font-medium text-sm text-foreground/80 hover:text-foreground transition-colors">Categories</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-foreground hover:bg-black/5 rounded-full transition-colors button-hover"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-foreground hover:bg-black/5 rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

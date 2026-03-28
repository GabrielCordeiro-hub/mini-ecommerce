import React, { useState } from 'react';
import { products, Product } from '../../data/products';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Audio', 'Computers', 'Accessories'];

interface ProductGridProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ activeCategory, setActiveCategory }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-foreground">Featured Collection</h2>
            <p className="text-muted-foreground text-lg">Curated technology designed for professionals who demand both aesthetics and performance.</p>
          </div>
          
          <div id="categories" className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-white text-muted-foreground border border-border hover:border-black/20 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} onClick={setSelectedProduct} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

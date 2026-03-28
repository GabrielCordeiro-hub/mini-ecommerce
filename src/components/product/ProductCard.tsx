import React from 'react';
import { Product } from '../../data/products';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group cursor-pointer bg-white rounded-premium border border-border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-black/5"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 flex items-center gap-1 rounded-full shadow-sm text-xs font-medium">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span>{product.rating}</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">{product.category}</p>
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-display font-medium">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors button-hover"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5 flex-shrink-0" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

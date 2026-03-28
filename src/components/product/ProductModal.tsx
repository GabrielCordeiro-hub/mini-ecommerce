import React, { useState } from 'react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingCart, Star } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Add multiple quantities by calling addToCart directly with logic, 
    // or just assume addToCart handles 1, but we need to pass quantity.
    // Our CartContext `addToCart` only takes a product. We should add a quantity parameter or loop.
    for(let i = 0; i < quantity; i++){
       addToCart(product);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full md:w-1/2 bg-muted relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover aspect-square md:aspect-auto"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-3">{product.category}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{product.name}</h2>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>
          
          <p className="text-xl font-display font-medium mb-6">${product.price.toFixed(2)}</p>
          
          <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
            {product.description}
            <br/><br/>
            Engineered for professionals, this product delivers uncompromising quality and minimalist aesthetics perfectly suited for modern environments.
          </p>

          <div className="mt-auto border-t border-border pt-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantity</span>
              <div className="flex items-center border border-border rounded-full p-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted text-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors button-hover flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

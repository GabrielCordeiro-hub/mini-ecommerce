import React from 'react';
import { Twitter, Instagram, Github } from 'lucide-react';

interface FooterProps {
  onCategorySelect: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onCategorySelect }) => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-display font-bold tracking-tighter mb-4 block">AURA</span>
            <p className="text-muted-foreground text-sm max-w-sm">
              We provide high-end, professionally designed technology products that blend performance with minimalist aesthetics.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Store</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => onCategorySelect('All')} className="hover:text-foreground transition-colors">All Products</button></li>
              <li><button onClick={() => onCategorySelect('Audio')} className="hover:text-foreground transition-colors">Audio</button></li>
              <li><button onClick={() => onCategorySelect('Computers')} className="hover:text-foreground transition-colors">Computers</button></li>
              <li><button onClick={() => onCategorySelect('Accessories')} className="hover:text-foreground transition-colors">Accessories</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <button onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AURA Technologies. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <button onClick={(e) => e.preventDefault()} className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button onClick={(e) => e.preventDefault()} className="hover:text-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

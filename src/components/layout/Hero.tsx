import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Design meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
              Technology
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Discover our curated collection of premium tech products. Minimalist design, uncompromising performance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors button-hover w-full sm:w-auto"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#categories" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white border border-border rounded-full hover:bg-gray-50 transition-colors button-hover w-full sm:w-auto"
            >
              Explore Categories
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
    </div>
  );
};

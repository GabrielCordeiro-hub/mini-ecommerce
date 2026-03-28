export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Audio' | 'Computers' | 'Accessories';
  rating: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Aura Studio Headphones",
    price: 349.00,
    category: "Audio",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    description: "Premium wireless over-ear headphones with active noise cancellation and minimalist design."
  },
  {
    id: "prod-2",
    name: "Minimalist Mechanical Keyboard",
    price: 159.00,
    category: "Accessories",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    description: "Compact 65% wireless mechanical keyboard with tactile switches and a clean matte aluminum finish."
  },
  {
    id: "prod-3",
    name: "Ergonomic Concept Mouse",
    price: 89.00,
    category: "Accessories",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    description: "High-precision ergonomic mouse designed to reduce wrist strain during long hours of use."
  },
  {
    id: "prod-4",
    name: "Pro Streamer Mic X",
    price: 199.00,
    category: "Audio",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    description: "Studio-quality USB condenser microphone for professional streaming and podcasting."
  },
  {
    id: "prod-5",
    name: "Horizon Ultra Laptop",
    price: 1299.00,
    category: "Computers",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    description: "Ultra-thin laptop with an incredible edge-to-edge display and all-day battery life."
  },
  {
    id: "prod-6",
    name: "Smart Desk Assistant",
    price: 129.00,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80",
    description: "Voice-controlled smart speaker with an elegant mesh design that blends into any workspace."
  }
];

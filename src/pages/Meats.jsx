import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import bf from '../assets/beef.jpg';
import fs from '../assets/fish.jpg';
import ch from '../assets/chicken.jpg';

// Swap/extend with your real product data (or map over an API response).
const MEATS = [
  { id: 1, name: 'Beef Fillet', category: 'Meats', image: bf, oldPrice: 900, newPrice: 750, unit: '1 kg' },
  { id: 2, name: 'Tilapia Fish', category: 'Meats', image: fs, oldPrice: 600, newPrice: 480, unit: '1 kg' },
  { id: 3, name: 'Whole Chicken', category: 'Meats', image: ch, oldPrice: 700, newPrice: 580, unit: '1 pc' },
  { id: 4, name: 'Beef Ribs', category: 'Meats', image: bf, oldPrice: 850, newPrice: 700, unit: '1 kg' },
  { id: 5, name: 'Nile Perch', category: 'Meats', image: fs, oldPrice: 750, newPrice: 620, unit: '1 kg' },
  { id: 6, name: 'Chicken Breast', category: 'Meats', image: ch, oldPrice: 500, newPrice: 420, unit: '1 kg' },
  { id: 7, name: 'Minced Beef', category: 'Meats', image: bf, oldPrice: 650, newPrice: 540, unit: '1 kg' },
  { id: 8, name: 'Smoked Fish', category: 'Meats', image: fs, oldPrice: 550, newPrice: 460, unit: '1 kg' },
];

const formatPrice = (value) => `KSh ${value.toLocaleString()}`;

const Meats = () => {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-emerald-950 mb-6 sm:mb-8">
          Meats
        </h1>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {MEATS.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col rounded-2xl bg-white ring-1 ring-emerald-100 overflow-hidden transition-shadow hover:shadow-lg"
            >
              {/* Clickable area: image + details, takes you to the product page */}
              <Link to={`/product/${product.id}`} state={{ product }} className="flex flex-1 flex-col">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-3 sm:p-4 pb-0">
                  <p className="text-[11px] sm:text-xs font-medium text-emerald-900/40 uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="mt-0.5 text-sm sm:text-base font-semibold text-emerald-950 leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-emerald-900/50">{product.unit}</p>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-base sm:text-lg font-bold text-emerald-700">
                      {formatPrice(product.newPrice)}
                    </span>
                    <span className="text-xs sm:text-sm text-emerald-900/40 line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Add to cart: kept outside the Link so it doesn't trigger navigation */}
              <div className="p-3 sm:p-4 pt-3">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 hover:bg-orange-600 px-3 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors active:scale-95 group-hover:animate-bounce [animation-duration:0.8s]"
                >
                  <ShoppingCart size={15} />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meats;
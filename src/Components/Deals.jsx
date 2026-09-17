import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

// Swap these with your real product photos + data (or map over an API response).
const DEALS = [
  {
    id: 1,
    name: 'Organic Carrots',
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=600&auto=format&fit=crop',
    oldPrice: 250,
    newPrice: 180,
    unit: '1 kg',
  },
  {
    id: 2,
    name: 'Fresh Bananas',
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=600&auto=format&fit=crop',
    oldPrice: 150,
    newPrice: 110,
    unit: 'Bunch',
  },
  {
    id: 3,
    name: 'Beef Fillet',
    category: 'Meats',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=600&auto=format&fit=crop',
    oldPrice: 900,
    newPrice: 750,
    unit: '1 kg',
  },
  {
    id: 4,
    name: 'Basmati Rice',
    category: 'Pantry Staples',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop',
    oldPrice: 480,
    newPrice: 399,
    unit: '2 kg bag',
  },
];

const formatPrice = (value) => `KSh ${value.toLocaleString()}`;

const Deals = () => {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-emerald-950 mb-6 sm:mb-8">
          Today's deals
        </h1>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DEALS.map((product) => (
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

export default Deals;
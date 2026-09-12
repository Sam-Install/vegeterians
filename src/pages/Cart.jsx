import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../Context/CartContext';

const formatPrice = (value) => `KSh ${value.toLocaleString()}`;

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="bg-white py-20 text-center">
        <ShoppingBag className="mx-auto text-emerald-900/30" size={40} />
        <p className="mt-4 text-emerald-900/70">Your cart is empty.</p>
        <Link
          to="/"
          className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-emerald-950 mb-8">
          Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
        </h1>

        <ul className="divide-y divide-emerald-100">
          {items.map(({ product, quantity }) => (
            <li key={product.id} className="flex items-center gap-4 py-5">
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded-lg bg-emerald-50 object-contain p-2"
              />

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-emerald-950 truncate">{product.name}</p>
                <p className="text-sm text-emerald-900/50">{product.unit}</p>
                <p className="text-sm font-semibold text-emerald-700 mt-1">
                  {formatPrice(product.newPrice)}
                </p>
              </div>

              <div className="inline-flex items-center rounded-full ring-1 ring-emerald-200">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-l-full transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-semibold text-emerald-950">
                  {quantity}
                </span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-r-full transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <p className="w-24 text-right text-sm font-semibold text-emerald-950">
                {formatPrice(product.newPrice * quantity)}
              </p>

              <button
                onClick={() => removeFromCart(product.id)}
                className="text-emerald-900/30 hover:text-red-600 transition-colors"
                aria-label={`Remove ${product.name}`}
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center justify-between border-t border-emerald-100 pt-6">
          <span className="text-base font-semibold text-emerald-950">Total</span>
          <span className="text-xl font-bold text-emerald-700">{formatPrice(totalPrice)}</span>
        </div>

        <button className="mt-8 w-full rounded-full bg-red-600 hover:bg-red-700 px-8 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors active:scale-95">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
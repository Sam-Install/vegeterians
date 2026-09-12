import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight, ArrowLeft, Minus, Plus, LogIn } from 'lucide-react';
import { useCart } from '../Context/CartContext';

const formatPrice = (value) => `KSh ${value.toLocaleString()}`;

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const { addToCart } = useCart();

  // Fallback gallery: reuse the main image for the extra slots until
  // your product data includes a real `images` array per product.
  const gallery = product?.images?.length
    ? product.images
    : [product?.image, product?.image, product?.image];

  const [activeImage, setActiveImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [showSignIn, setShowSignIn] = useState(false);
  const [added, setAdded] = useState(false);

  // TODO: swap this for your real auth state once auth is wired up
  const isSignedIn = false;

  if (!product) {
    return (
      <section className="bg-white py-20 text-center">
        <p className="text-emerald-900/70">
          We couldn't find that product — it may have come from a direct link or a page refresh.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          <ArrowLeft size={16} />
          Back to shop
        </Link>
      </section>
    );
  }

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => Math.min(99, q + 1));

  const handleAddToCart = () => {
    if (!isSignedIn) {
      setShowSignIn(true);
      return;
    }
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const totalPrice = product.newPrice * quantity;

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-emerald-900/50">
            <li>
              <Link to="/" className="hover:text-emerald-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight size={14} />
              <button
                onClick={() => navigate(-1)}
                className="hover:text-emerald-700 transition-colors"
              >
                {product.category}
              </button>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight size={14} />
              <span className="font-semibold text-emerald-700">{product.name}</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: main image + two additional images below it */}
          <div>
            <div className="aspect-square w-full overflow-hidden rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
              <img
                src={activeImage}
                alt={product.name}
                className="h-full w-full object-contain p-6"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {gallery.slice(0, 2).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square overflow-hidden rounded-xl bg-emerald-50 ring-1 transition-colors ${
                    activeImage === img ? 'ring-emerald-600' : 'ring-emerald-100 hover:ring-emerald-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${i + 2}`}
                    className="h-full w-full object-contain p-4"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: description + quantity + add to cart */}
          <div className="flex flex-col">
            <p className="text-xs sm:text-sm font-medium text-emerald-900/40 uppercase tracking-wide">
              {product.category}
            </p>
            <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-emerald-950">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-emerald-900/50">{product.unit}</p>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-emerald-700">
                {formatPrice(product.newPrice)}
              </span>
              {product.oldPrice > product.newPrice && (
                <span className="text-base sm:text-lg text-emerald-900/40 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
              <span className="text-xs sm:text-sm text-emerald-900/40">/ {product.unit}</span>
            </div>

            <p className="mt-6 text-sm sm:text-base text-emerald-900/70 leading-relaxed max-w-md">
              {product.description ||
                `Freshly sourced and hand-picked for quality. Every order of ${product.name.toLowerCase()} is checked before it's packed, so what reaches your door is as fresh as what you'd pick yourself.`}
            </p>

            {/* Quantity selector — counts in units of whatever this product is sold by (kg, bunch, pc, bag, etc.) */}
            <div className="mt-8">
              <p className="text-xs sm:text-sm font-medium text-emerald-950 mb-2">
                Quantity ({product.unit} each)
              </p>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-full ring-1 ring-emerald-200">
                  <button
                    type="button"
                    onClick={decreaseQty}
                    disabled={quantity <= 1}
                    className="p-2.5 sm:p-3 text-emerald-700 hover:bg-emerald-50 rounded-l-full disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                    aria-label={`Decrease quantity`}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm sm:text-base font-semibold text-emerald-950">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={increaseQty}
                    className="p-2.5 sm:p-3 text-emerald-700 hover:bg-emerald-50 rounded-r-full transition-colors"
                    aria-label={`Increase quantity`}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="text-sm text-emerald-900/60">
                  {quantity} × {product.unit} = {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 px-8 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors active:scale-95"
            >
              <ShoppingCart size={18} />
              {added ? 'Added!' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>

      {/* Sign-in gate: shown when a signed-out user tries to add to cart */}
      {showSignIn && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/50 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 sm:p-8 text-center shadow-xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <LogIn size={22} />
            </div>
            <h2 className="mt-4 text-lg font-bold text-emerald-950">Sign in to continue</h2>
            <p className="mt-2 text-sm text-emerald-900/60">
              Please sign in to your account before adding items to your cart and placing an order.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/signin"
                state={{ from: location }}
                className="inline-flex w-full items-center justify-center rounded-full bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold text-white transition-colors active:scale-95"
              >
                Sign In
              </Link>
              <button
                type="button"
                onClick={() => setShowSignIn(false)}
                className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-emerald-900/60 hover:bg-emerald-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Truck,
  User,
  ShoppingCart,
  Home,
  Apple,
  Carrot,
  Beef,
  Package,
  ChevronRight,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const LINKS = [
  { label: 'Home', icon: Home, path: '/' },
  { label: 'Fruits', icon: Apple, path: '/fruits' },
  { label: 'Vegetables', icon: Carrot, path: '/vegetables' },
  { label: 'Meats', icon: Beef, path: '/meats' },
  { label: 'Pantry Staples', icon: Package, path: '/pantrystaples' },
];

const navLinkClasses = ({ isActive }) =>
  `flex items-center gap-1.5 text-sm font-medium border-b-2 pb-1 transition-colors ${
    isActive
      ? 'text-emerald-700 border-amber-400'
      : 'text-emerald-950 border-transparent hover:text-emerald-700 hover:border-emerald-200'
  }`;

const mobileNavLinkClasses = ({ isActive }) =>
  `flex items-center justify-between py-3 border-b border-emerald-100 text-sm font-medium ${
    isActive ? 'text-emerald-700' : 'text-emerald-950'
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="font-sans text-emerald-950">
      {/* ===== Top utility bar ===== */}
      <div className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 truncate">
            <Truck size={14} className="shrink-0 text-amber-400" />
            <span className="truncate">
              <span className="hidden xs:inline">Same-day delivery in </span>Ukunda
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            
            <a  href="tel:+254757854333"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone size={14} className="text-amber-400" />
              <span className="hidden sm:inline">+254 757 854 333</span>
            </a>
            <Link
              to="/signin"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors border-l border-emerald-700 pl-4"
            >
              <User size={14} />
              <span>Sign in</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Main navbar ===== */}
      <header className="sticky top-0 z-50 bg-white border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <span className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center">
                <Carrot size={18} className="text-white" />
              </span>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-emerald-900">
                Soko<span className="text-emerald-500">Fresh</span>
              </span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-8">
              {LINKS.map(({ label, icon: Icon, path }) => (
                <NavLink key={label} to={path} end={path === '/'} className={navLinkClasses}>
                  <Icon size={15} />
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Right side: cart + mobile toggle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                to="/cart"
                className="relative flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 pl-3 pr-4 py-2 text-white text-sm font-semibold transition-colors active:scale-95"
              >
                <ShoppingCart size={17} />
                <span className="hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 text-emerald-900 text-[11px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md border border-emerald-100 text-emerald-900"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* ===== Mobile menu panel ===== */}
        <div
          className={`lg:hidden overflow-hidden bg-emerald-50 transition-[max-height,opacity] duration-300 ease-in-out ${
            menuOpen
              ? 'max-h-[520px] opacity-100 border-t border-emerald-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 sm:px-6 py-3 flex flex-col">
            {LINKS.map(({ label, icon: Icon, path }) => (
              <NavLink
                key={label}
                to={path}
                end={path === '/'}
                onClick={closeMenu}
                className={mobileNavLinkClasses}
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} />
                  {label}
                </span>
                <ChevronRight size={16} className="opacity-40" />
              </NavLink>
            ))}

            <div className="flex items-center justify-between pt-4 mt-1 text-sm">
              <a href="tel:+254757854333" className="flex items-center gap-2 font-medium text-emerald-900">
                <Phone size={15} />
                +254 757 854 333
              </a>
              <Link to="/signin" onClick={closeMenu} className="flex items-center gap-2 font-medium text-emerald-900">
                <User size={15} />
                Sign in
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
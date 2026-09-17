import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBasket } from 'lucide-react';
import h1 from '../assets/H1.jpg';
import h2 from '../assets/H2.jpg';
import h3 from '../assets/H3.jpg';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: h1,
    eyebrow: 'Farm to doorstep',
    heading: 'Fresh groceries, delivered the same day',
    subheading: 'Fruits, vegetables, meats and pantry staples',
    body: 'Hand-picked from local farms every morning and on your doorstep in Mombasa before dinner.',
  },
  {
    image: h2,
    eyebrow: 'Butchery counter',
    heading: 'Meats cut fresh, never frozen twice',
    subheading: 'Beef, goat, chicken and fish',
    body: 'Every order is cut to size and vacuum-packed the moment you check out.',
  },
  {
    image: h3,
    eyebrow: 'Everyday essentials',
    heading: 'Pantry staples that never run out',
    subheading: 'Rice, flour, oil and spices',
    body: 'Stock up once and set a reorder schedule so your kitchen is never caught short.',
  },
];

const AUTO_SLIDE_INTERVAL = 6000;

const Herox = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-emerald-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.heading}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
          />
          {/* Dark overlay so text stays readable on any photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-end sm:items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-0">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-300">
              <ShoppingBasket size={14} />
              {SLIDES[index].eyebrow}
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {SLIDES[index].heading}
            </h1>

            <h2 className="mt-3 text-base sm:text-lg font-medium text-emerald-300">
              {SLIDES[index].subheading}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
              {SLIDES[index].body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">

               <Link  to="/contact"
                className="rounded-full bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors"
              >
                Contact Us
              </Link>

              <Link to="/about"
                className="rounded-full border border-white/30 hover:bg-white/10 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / next arrows */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.heading}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-amber-400' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Herox;
import React from 'react';
import { ArrowRight, Leaf, Truck, ShieldCheck } from 'lucide-react';
import on from '../assets/onions.jpg';

const FEATURES = [
  { icon: Leaf, label: 'Farm-fresh, always' },
  { icon: Truck, label: 'Same-day delivery' },
  { icon: ShieldCheck, label: 'Quality guaranteed' },
];

const Abs = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Floating image side */}
          <div className="relative flex justify-center order-1 lg:order-none">
            {/* Decorative backdrop */}
            <div className="absolute -inset-6 sm:-inset-10 rounded-[3rem] bg-emerald-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-amber-100/60 blur-2xl" />

            {/* Floating carrots image */}
            <img
              src={on}
              alt="Fresh carrots"
              className="relative z-10 w-56 sm:w-72 lg:w-80 drop-shadow-2xl animate-bounce [animation-duration:5s]"
            />

            {/* Floating stat badge */}
            <div className="absolute z-20 bottom-2 left-2 sm:bottom-6 sm:left-0 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-emerald-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Leaf size={18} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-emerald-950">100% Organic</p>
                <p className="text-xs text-emerald-700">Sourced locally</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="max-w-xl">
            <span className="text-xs sm:text-sm font-semibold text-emerald-700">
              About SokoFresh
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-emerald-950">
              We've embarked on a journey to bring you value and good health
            </h2>

            <p className="mt-4 text-sm sm:text-base text-emerald-900/70 leading-relaxed">
              What started as a single stall at the local market has grown into a
              trusted grocery partner for homes across Mombasa. We work directly with
              farmers to cut out the middlemen, so what lands on your plate is fresher,
              fairer and better for you.
            </p>

            
             <a href="#learn-more"
              className="group mt-6 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Learn more
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <div className="mt-10 grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-4">
              {FEATURES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl bg-emerald-50/60 px-3 py-3 sm:flex-col sm:items-start sm:gap-3 sm:px-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm">
                    <Icon size={16} />
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-emerald-950">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abs;
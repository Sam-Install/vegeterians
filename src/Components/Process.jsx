import React from 'react';
import { Sprout, PackageCheck, Truck, ChefHat } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: Sprout,
    title: 'Sourcing',
    description:
      'We source directly from trusted farms across Kenya, cutting out middlemen so every product reaches you fresher and fairer.',
  },
  {
    number: '02',
    icon: PackageCheck,
    title: 'Packaging',
    description:
      'Every order is carefully sorted and packaged to lock in freshness and keep quality intact until it reaches your door.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Delivery',
    description:
      'Once packed, your order is out for delivery and lands on your doorstep the same day you order.',
  },
  {
    number: '04',
    icon: ChefHat,
    title: 'You Prepare',
    description:
      'From our basket to your kitchen — turn every fresh pick into sumptuous, delicious meals for your family.',
  },
];

const Process = () => {
  return (
    <section className="bg-stone-100 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-emerald-950 text-center">
          How we work
        </h1>

        <div className="relative mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Connecting line, desktop only */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-emerald-200" />

          {STEPS.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                <Icon size={26} />
              </div>
              <span className="mt-3 text-xs font-bold tracking-wide text-emerald-300">
                {number}
              </span>
              <h3 className="mt-1 text-base sm:text-lg font-semibold text-emerald-950">
                {title}
              </h3>
              <p className="mt-2 text-sm text-emerald-900/70 leading-relaxed max-w-xs">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
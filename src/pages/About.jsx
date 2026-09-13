import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import abt from '../assets/AboutImg.jpg';

const About = () => {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex items-center gap-1.5 text-sm text-emerald-900/50">
            <li>
              <Link to="/" className="hover:text-emerald-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight size={14} />
              <span className="font-semibold text-emerald-700">About</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-emerald-50 hidden sm:block" />
            <img
              src={abt}
              alt="Inside SokoFresh"
              className="w-full h-72 sm:h-96 lg:h-[26rem] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700">
              <MapPin size={13} />
              Ukunda, Kenya
            </span>

            <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-emerald-950">
              About SokoFresh
            </h1>

            <p className="mt-4 text-sm sm:text-base text-emerald-900/70 leading-relaxed">
              SokoFresh started right here in Ukunda with a simple idea: groceries
              should be fresh, fairly priced, and easy to get. We work directly with
              farmers along the South Coast to source fruits, vegetables, meats and
              pantry staples, then get them to your door the same day you order —
              no middlemen, no stale shelves, just honest, good food from a team
              that calls this town home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Sprout, Truck, ShieldCheck, Users } from 'lucide-react';
import abt from '../assets/AboutImg.jpg';

const STATS = [
  { value: '3+', label: 'Years serving Ukunda' },
  { value: '40+', label: 'Partner farms' },
  { value: '2,500+', label: 'Happy customers' },
  { value: 'Same-day', label: 'Delivery, every order' },
];

const VALUES = [
  {
    icon: Sprout,
    title: 'Farm-fresh, always',
    body: 'We buy directly from growers along the South Coast every morning, so nothing sits in a warehouse before it reaches you.',
  },
  {
    icon: Truck,
    title: 'Same-day delivery',
    body: 'Order before mid-afternoon and it lands on your doorstep the same day — no waiting around for a delivery window.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality guaranteed',
    body: "Not happy with what arrives? We'll replace or refund it, no long forms or waiting on hold.",
  },
  {
    icon: Users,
    title: 'Rooted in the community',
    body: "We're a Ukunda-based team working with Ukunda-based farmers — your order supports people down the road, not a warehouse chain.",
  },
];

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

            <p className="mt-4 text-sm sm:text-base text-emerald-900/70 leading-relaxed">
              What began as a single stall at the local market has grown into a
              trusted grocery partner for homes across Mombasa and the South Coast
              — but the goal hasn't changed: put real, farm-fresh food on your
              table without the markup or the wait.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 rounded-3xl bg-emerald-50 px-6 py-8 sm:px-10 sm:py-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-950">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-emerald-900/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-950 text-center">
            What we stand for
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl ring-1 ring-emerald-100 p-6 hover:shadow-lg transition-shadow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-sm sm:text-base font-semibold text-emerald-950">
                  {title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-emerald-900/60 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
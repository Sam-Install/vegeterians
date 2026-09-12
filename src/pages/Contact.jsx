import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@sokofresh.co.ke',
    href: 'mailto:hello@sokofresh.co.ke',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 757 854 333',
    href: 'tel:+254757854333',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Ukunda, Kwale County, Kenya',
    href: null,
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Monday – Sunday, 9:00 AM – 8:00 PM',
    href: null,
  },
];

const Contact = () => {
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
              <span className="font-semibold text-emerald-700">Contact</span>
            </li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-emerald-950">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-emerald-900/70 leading-relaxed">
            Have a question about an order, a delivery, or just want to say hi?
            Reach us any of the ways below — we're around every day of the week.
          </p>
        </div>

        {/* Info grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? 'a' : 'div';
            return (
              <Wrapper
                key={label}
                {...(href ? { href } : {})}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-emerald-100 transition-shadow hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-900/40">
                    {label}
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-emerald-950">
                    {value}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
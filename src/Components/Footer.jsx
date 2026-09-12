import React from 'react';
import { Carrot, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const STORE_LINKS = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Get In Touch', href: '/contact' },
];

const SOCIALS = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
];

const Footer = () => {
  return (
    <section className="bg-stone-300 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center shrink-0">
                <Carrot size={18} className="text-white" />
              </span>
              <span className="text-lg font-bold tracking-tight text-emerald-950">
                Soko<span className="text-emerald-600">Fresh</span>
              </span>
            </a>
            <p className="mt-3 text-sm text-emerald-900/60 leading-relaxed max-w-xs">
              Farm-fresh groceries sourced across Kenya, delivered to your door
              the same day you order.
            </p>

            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-700 hover:bg-emerald-700 hover:text-white transition-colors"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Our Store */}
          <div>
            <h1 className="text-sm font-bold uppercase tracking-wide text-emerald-950">
              Our Store
            </h1>
            <ul className="mt-3 space-y-2">
              {STORE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link to
                    href={href}
                    className="text-sm text-emerald-900/70 hover:text-emerald-700 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h1 className="text-sm font-bold uppercase tracking-wide text-emerald-950">
              Contact Us
            </h1>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="tel:+254757854333"
                  className="flex items-center gap-2 text-sm text-emerald-900/70 hover:text-emerald-700 transition-colors"
                >
                  <Phone size={14} />
                  +254 757 854 333
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@sokofresh.co.ke"
                  className="flex items-center gap-2 text-sm text-emerald-900/70 hover:text-emerald-700 transition-colors"
                >
                  <Mail size={14} />
                  hello@sokofresh.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-emerald-900/10">
          <p className="text-xs text-emerald-900/50 text-center">
            Web crafted by SamCodes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
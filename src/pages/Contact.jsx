import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ChevronRight, Send, CheckCircle2 } from 'lucide-react';

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

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: null }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email.';
    }
    if (!form.message.trim()) next.message = 'Please add a short message.';
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      // TODO: wire this up to your backend / email service (e.g. Formspree,
      // EmailJS, or a serverless function) once one is available.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setSubmitted(true);
      setForm(INITIAL_FORM);
    } finally {
      setSubmitting(false);
    }
  };

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

        {/* Form + Map */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Form */}
          <div className="rounded-2xl ring-1 ring-emerald-100 p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-emerald-950">
              Send us a message
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-emerald-900/60">
              We usually reply within a few hours during opening times.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center text-center gap-3 py-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={26} />
                </span>
                <p className="text-sm sm:text-base font-semibold text-emerald-950">
                  Message sent — thank you!
                </p>
                <p className="text-xs sm:text-sm text-emerald-900/60 max-w-xs">
                  We've got your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-emerald-900/50">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`mt-2 w-full rounded-xl border px-4 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.name ? 'border-red-400' : 'border-emerald-100'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-emerald-900/50">
                      Phone <span className="normal-case text-emerald-900/30">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+254 7xx xxx xxx"
                      className="mt-2 w-full rounded-xl border border-emerald-100 px-4 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-emerald-900/50">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`mt-2 w-full rounded-xl border px-4 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.email ? 'border-red-400' : 'border-emerald-100'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wide text-emerald-900/50">
                    Subject <span className="normal-case text-emerald-900/30">(optional)</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="mt-2 w-full rounded-xl border border-emerald-100 px-4 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-emerald-900/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`mt-2 w-full rounded-xl border px-4 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none ${
                      errors.message ? 'border-red-400' : 'border-emerald-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors"
                >
                  <Send size={16} />
                  {submitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden ring-1 ring-emerald-100 h-80 sm:h-96 lg:h-full lg:min-h-[28rem]">
            <iframe
              title="SokoFresh location — Ukunda, Kwale County, Kenya"
              src="https://www.google.com/maps?q=Ukunda,Kwale+County,Kenya&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
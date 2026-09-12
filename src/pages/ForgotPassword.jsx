import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, KeyRound, ArrowLeft, CheckCircle2 } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter the email address on your account.');
      return;
    }

    setSubmitting(true);
    try {
      // TODO: replace with your real password-reset call, e.g.
      // await sendPasswordResetEmail(email);
      setSent(true);
    } catch (err) {
      setError("We couldn't send the reset link. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="rounded-2xl ring-1 ring-emerald-100 p-6 sm:p-8 shadow-sm">
          {sent ? (
            /* Success state */
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <CheckCircle2 size={22} />
              </div>
              <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-emerald-950">
                Check your email
              </h1>
              <p className="mt-2 text-sm text-emerald-900/60 max-w-xs">
                If an account exists for <span className="font-semibold text-emerald-900">{email}</span>,
                we've sent a link to reset your password.
              </p>

              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Didn't get it? Try another email
              </button>

              <Link
                to="/signin"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900/60 hover:text-emerald-800"
              >
                <ArrowLeft size={16} />
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <KeyRound size={22} />
                </div>
                <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-emerald-950">
                  Forgot your password?
                </h1>
                <p className="mt-2 text-sm text-emerald-900/60">
                  Enter your email and we'll send you a link to reset it
                </p>
              </div>

              {/* Error message */}
              {error && (
                <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-950 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-900/40"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-full ring-1 ring-emerald-200 pl-10 pr-4 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 outline-none focus:ring-2 focus:ring-emerald-600 transition-shadow"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-red-600 hover:bg-red-700 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors active:scale-95 disabled:opacity-60"
                >
                  {submitting ? 'Sending link…' : 'Send Reset Link'}
                </button>
              </form>

              <Link
                to="/signin"
                className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-900/60 hover:text-emerald-800"
              >
                <ArrowLeft size={16} />
                Back to sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
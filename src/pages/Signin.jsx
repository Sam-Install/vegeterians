import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || '/';

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please enter your email and password.');
      return;
    }

    setSubmitting(true);
    try {
      // TODO: replace with your real auth call, e.g.
      // await signIn(formData.email, formData.password);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError('Incorrect email or password. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="rounded-2xl ring-1 ring-emerald-100 p-6 sm:p-8 shadow-sm">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <LogIn size={22} />
            </div>
            <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-emerald-950">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-emerald-900/60">
              Sign in to continue to your account
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-full ring-1 ring-emerald-200 pl-10 pr-4 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 outline-none focus:ring-2 focus:ring-emerald-600 transition-shadow"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-emerald-950">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-900/40"
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-full ring-1 ring-emerald-200 pl-10 pr-11 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 outline-none focus:ring-2 focus:ring-emerald-600 transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-900/40 hover:text-emerald-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-emerald-900/60">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
              />
              Remember me
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-red-600 hover:bg-red-700 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors active:scale-95 disabled:opacity-60"
            >
              {submitting ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-emerald-900/60">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-emerald-700 hover:text-emerald-800">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signin;
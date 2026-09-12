import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in every field.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitting(true);
    try {
      // TODO: replace with your real registration call, e.g.
      // await registerUser({ fullName, email, password });
      navigate('/signin', { replace: true });
    } catch (err) {
      setError('Something went wrong creating your account. Please try again.');
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
              <UserPlus size={22} />
            </div>
            <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-emerald-950">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-emerald-900/60">
              Sign up to start ordering fresh groceries
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
              <label htmlFor="fullName" className="block text-sm font-medium text-emerald-950 mb-1.5">
                Full name
              </label>
              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-900/40"
                />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-full ring-1 ring-emerald-200 pl-10 pr-4 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 outline-none focus:ring-2 focus:ring-emerald-600 transition-shadow"
                />
              </div>
            </div>

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
              <label htmlFor="password" className="block text-sm font-medium text-emerald-950 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-900/40"
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-emerald-950 mb-1.5">
                Confirm password
              </label>
              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-900/40"
                />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full rounded-full ring-1 ring-emerald-200 pl-10 pr-11 py-2.5 text-sm text-emerald-950 placeholder:text-emerald-900/30 outline-none focus:ring-2 focus:ring-emerald-600 transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-900/40 hover:text-emerald-700"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-red-600 hover:bg-red-700 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors active:scale-95 disabled:opacity-60"
            >
              {submitting ? 'Creating account…' : 'Create Account'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-emerald-900/60">
            Already have an account?{' '}
            <Link to="/signin" className="font-semibold text-emerald-700 hover:text-emerald-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
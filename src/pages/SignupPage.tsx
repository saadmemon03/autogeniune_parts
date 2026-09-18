import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      const user = await signup(name, email, password);
      if (user) {
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    }
  };

  return (
    <div className="min-h-[70vh] bg-neutral-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-black text-neutral-900 uppercase tracking-tight">
          Create an account
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-600">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-primary-500 hover:text-primary-600 transition-colors">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-neutral-0 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-neutral-200">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="name">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-neutral-300 rounded-sm shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="email">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-neutral-300 rounded-sm shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="password">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-neutral-300 rounded-sm shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-neutral-900"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-bold uppercase tracking-widest text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

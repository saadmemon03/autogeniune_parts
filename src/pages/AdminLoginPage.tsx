import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || data.error || 'Login failed');
      }

      // Check if the user is actually an admin
      if (data.user && data.user.role === 'admin') {
        // Save admin token to localStorage
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        throw new Error("You do not have Admin privileges!");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <ShieldCheck className="h-16 w-16 text-primary-500 mb-4" />
        <h2 className="text-center text-3xl font-black text-white uppercase tracking-tight">
          Admin Portal
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-400">
          Authorized personnel only
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-sm text-sm font-bold border border-red-200">
                {error}
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="email">
                Admin Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-neutral-900"
                placeholder="admin@autogenuine.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-neutral-900"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-bold uppercase tracking-widest text-white bg-primary-500 hover:bg-primary-600 focus:outline-none transition-colors"
            >
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// File: src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import { User, Lock } from 'lucide-react';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(username, password);
      // --- THIS IS THE FIX ---
      // Redirect to the homepage at the root path "/"
      navigate('/'); 
    } catch (err) {
      setError('Login failed. Please check your username and password.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      {/* Form Section */}
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-2xl shadow-xl">
          <div>
            <h1 className="text-3xl font-bold text-center text-blue-700">
              Asia48
            </h1>
            <h2 className="mt-2 text-center text-xl font-semibold text-gray-800">Welcome Back!</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to continue your journey. ✈️
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 transition-colors transform hover:scale-105"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1887&q=80')" }}>
        <div className="flex items-end h-full p-12 bg-gradient-to-t from-black/60 to-transparent">
            <div className="text-white">
                <h2 className="text-4xl font-bold leading-tight">Your Gateway to Asia.</h2>
                <p className="mt-2 text-lg opacity-80">Expert guidance for your travel, work, and study visas.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

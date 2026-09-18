import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string) => Promise<any>;
  signup: (name: string, email: string, password?: string) => Promise<any>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Check if user is saved in localStorage on load
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email: string, password?: string): Promise<any> => {
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

      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token); 
      if (data.user.role === 'admin') {
        localStorage.setItem('adminToken', data.token);
      }
      return data.user;
    } catch (err: any) {
      alert(err.message);
      return null;
    }
  };

  const signup = async (name: string, email: string, password?: string): Promise<any> => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || data.error || 'Signup failed');
      }

      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      if (data.user.role === 'admin') {
        localStorage.setItem('adminToken', data.token);
      }
      return data.user;
    } catch (err: any) {
      alert(err.message);
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};


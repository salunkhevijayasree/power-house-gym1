import React, { useState } from 'react';
import { X, Dumbbell, Lock, Mail, User as UserIcon, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authMode, login, register } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>(authMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await register(fullName, email, password, phone);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-gymCard border border-gymBorder rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in">
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 text-textMuted hover:text-white rounded-lg bg-gymDark"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amberPrimary/20 text-amberPrimary flex items-center justify-center">
            <Dumbbell className="w-5 h-5 transform -rotate-12" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold text-white">
              {mode === 'login' ? 'MEMBER SIGN IN' : 'CREATE MEMBER ACCOUNT'}
            </h3>
            <p className="text-xs text-textMuted font-medium">
              Power House Gym Bhadrachalam Portal
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="bg-red-950/40 border border-red-500/40 text-red-400 p-3 rounded-xl text-xs mb-4">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-textMuted absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-textMuted absolute left-3.5 top-3" />
              <input
                type="email"
                required
                placeholder="member@powerhousegym.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-textMuted absolute left-3.5 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-textMuted absolute left-3.5 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-amberPrimary font-subheading font-extrabold text-white text-sm shadow-glow-amber hover:bg-amber-600 transition-all uppercase tracking-wider mt-2"
          >
            {loading
              ? 'Authenticating...'
              : mode === 'login'
              ? 'Sign In to Portal'
              : 'Register Member Account'}
          </button>
        </form>

        <div className="pt-6 mt-6 border-t border-gymBorder/40 text-center text-xs text-textMuted">
          {mode === 'login' ? (
            <span>
              Don't have a member account?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-amberPrimary font-bold hover:underline"
              >
                Register Here
              </button>
            </span>
          ) : (
            <span>
              Already a member?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-amberPrimary font-bold hover:underline"
              >
                Sign In Here
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

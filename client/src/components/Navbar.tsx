import React, { useState } from 'react';
import { Menu, X, User as UserIcon, LogOut, ShieldAlert } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenDashboard: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDashboard, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { label: 'Facility', href: '#facility' },
    { label: 'Programs', href: '#programs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-gymDark/95 backdrop-blur-md border-b border-gymBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="POWERHOUSE GYM Official Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-amberPrimary group-hover:scale-105 transition-transform shadow-glow-amber"
            />
            <div>
              <span className="font-display text-2xl md:text-3xl font-extrabold tracking-wider text-white flex items-center gap-1">
                POWER HOUSE <span className="text-amberPrimary">GYM</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-subheading text-textMuted block -mt-1 font-semibold">
                BHADRACHALAM • TELANGANA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-subheading font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-textPrimary hover:text-amberPrimary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amberPrimary hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logged in User Portal (if authenticated) */}
          <div className="hidden md:flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-3">
                {user.role === 'admin' && (
                  <button
                    onClick={onOpenAdmin}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30 text-xs font-semibold hover:bg-purple-600/30"
                  >
                    <ShieldAlert className="w-4 h-4" />
                    Admin Panel
                  </button>
                )}
                <button
                  onClick={onOpenDashboard}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gymCard border border-gymBorder text-white text-sm font-semibold hover:border-amberPrimary transition-all"
                >
                  <UserIcon className="w-4 h-4 text-amberPrimary" />
                  <span>{user.fullName.split(' ')[0]}</span>
                </button>
                <button
                  onClick={logout}
                  title="Logout"
                  className="p-2 text-textMuted hover:text-red-400 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-textPrimary hover:text-amberPrimary focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gymCard border-b border-gymBorder px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 font-subheading font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-textPrimary hover:text-amberPrimary py-2 text-base border-b border-gymBorder/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          {user && (
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDashboard();
                }}
                className="w-full text-center py-2.5 rounded-lg bg-gymDark border border-gymBorder text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <UserIcon className="w-4 h-4 text-amberPrimary" />
                My Member Portal ({user.fullName})
              </button>
              {user.role === 'admin' && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full text-center py-2.5 rounded-lg bg-purple-900/30 text-purple-300 border border-purple-500/30 font-semibold text-sm"
                >
                  Admin Dashboard
                </button>
              )}
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2 text-red-400 text-sm font-semibold"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

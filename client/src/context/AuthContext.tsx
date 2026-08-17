import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, MemberProfile } from '../types';
import { api } from '../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  profile: MemberProfile | null;
  isAuthModalOpen: boolean;
  isTrialModalOpen: boolean;
  selectedPlanMessage: string | null;
  openAuthModal: (mode?: 'login' | 'register') => void;
  closeAuthModal: () => void;
  openTrialModal: (planMsg?: string) => void;
  closeTrialModal: () => void;
  login: (email: string, pass: string) => Promise<void>;
  register: (fullName: string, email: string, pass: string, phone: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<MemberProfile>) => Promise<void>;
  authMode: 'login' | 'register';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const savedUser = localStorage.getItem('phg_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem('phg_token');
    } catch (e) {
      return null;
    }
  });

  const [profile, setProfile] = useState<MemberProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlanMessage, setSelectedPlanMessage] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      api.getMemberProfile(token).then((data) => {
        if (data && data.profile) {
          setProfile(data.profile);
        }
      }).catch(() => {});
    }
  }, [token]);

  const openAuthModal = (mode: 'login' | 'register' = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  const openTrialModal = (planMsg?: string) => {
    if (planMsg) setSelectedPlanMessage(planMsg);
    setIsTrialModalOpen(true);
  };

  const closeTrialModal = () => {
    setSelectedPlanMessage(null);
    setIsTrialModalOpen(false);
  };

  const login = async (email: string, pass: string) => {
    const res = await api.login(email, pass);
    setUser(res.user);
    setToken(res.token);
    try {
      localStorage.setItem('phg_user', JSON.stringify(res.user));
      localStorage.setItem('phg_token', res.token);
    } catch (e) {}
    closeAuthModal();
  };

  const register = async (fullName: string, email: string, pass: string, phone: string) => {
    const res = await api.register(fullName, email, pass, phone);
    setUser(res.user);
    setToken(res.token);
    try {
      localStorage.setItem('phg_user', JSON.stringify(res.user));
      localStorage.setItem('phg_token', res.token);
    } catch (e) {}
    closeAuthModal();
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setProfile(null);
    try {
      localStorage.removeItem('phg_user');
      localStorage.removeItem('phg_token');
    } catch (e) {}
  };

  const updateProfile = async (data: Partial<MemberProfile>) => {
    if (!token) return;
    await api.updateMemberProfile(token, data);
    setProfile((prev) => (prev ? { ...prev, ...data } : null));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        profile,
        isAuthModalOpen,
        isTrialModalOpen,
        selectedPlanMessage,
        openAuthModal,
        closeAuthModal,
        openTrialModal,
        closeTrialModal,
        login,
        register,
        logout,
        updateProfile,
        authMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

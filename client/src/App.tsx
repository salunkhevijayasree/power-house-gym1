import React, { useState, Component, ErrorInfo, ReactNode } from 'react';
import { AuthProvider } from './context/AuthContext';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Programs } from './components/Programs';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { ScheduleLocation } from './components/ScheduleLocation';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { TrialModal } from './components/TrialModal';
import { AuthModal } from './components/AuthModal';
import { MemberDashboard } from './components/MemberDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { SEOHead } from './components/SEOHead';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in App:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0C0D10] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-amberPrimary/20 text-amberPrimary flex items-center justify-center mb-4">
            ⚠️
          </div>
          <h2 className="text-3xl font-bold mb-2">POWER HOUSE GYM</h2>
          <p className="text-sm text-gray-400 max-w-md mb-6">
            Something went wrong while loading the page. Click below to reload.
          </p>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="px-6 py-3 rounded-xl bg-[#FF6B00] text-white font-bold text-sm shadow-lg hover:bg-orange-600 transition-all"
          >
            Clear Cache & Reload Site
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const MainContent: React.FC = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gymDark text-textPrimary flex flex-col">
      <SEOHead />
      <TopBar />
      <Navbar
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />
      
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <Programs />
        <Gallery />
        <Pricing />
        <Reviews />
        <ScheduleLocation />
        <FAQ />
      </main>

      <Footer />
      <MobileBottomBar />

      {/* Modals */}
      <TrialModal />
      <AuthModal />
      <MemberDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

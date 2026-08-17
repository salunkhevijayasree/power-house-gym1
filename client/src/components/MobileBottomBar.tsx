import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const MobileBottomBar: React.FC = () => {
  const { openTrialModal } = useAuth();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gymDark/95 backdrop-blur-md border-t border-gymBorder p-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+919347539453"
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-gymCard border border-gymBorder text-white text-xs font-subheading font-bold hover:border-amberPrimary active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-amberPrimary mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919347539453?text=Hi%20Powerhouse%20Gym!%20I%20want%20to%20inquire%20about%20membership."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-subheading font-bold active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => openTrialModal()}
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-amberPrimary text-white text-xs font-subheading font-extrabold shadow-glow-amber active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4 text-goldSecondary mb-0.5" />
          <span>Free Trial</span>
        </button>
      </div>
    </div>
  );
};

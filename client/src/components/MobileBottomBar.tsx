import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
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

        <a
          href="https://www.instagram.com/power_house_gym_bhadrachalam?igsh=Znk3emoyeHc0dWs3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-pink-500/40 text-pink-300 text-xs font-subheading font-extrabold active:scale-95 transition-all"
        >
          <Instagram className="w-4 h-4 text-pink-400 mb-0.5" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

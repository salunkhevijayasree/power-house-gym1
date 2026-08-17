import React from 'react';
import { Clock, Phone, MapPin, MessageCircle } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#08090C] border-b border-gymBorder text-xs text-textMuted py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Operating Hours */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
          <Clock className="w-3.5 h-3.5 text-amberPrimary animate-pulse" />
          <span className="font-semibold text-textPrimary">Operating Split Hours:</span>
          <span>Morning: <strong className="text-white">5:00 AM – 11:00 AM</strong></span>
          <span className="text-gymBorder">|</span>
          <span>Evening: <strong className="text-white">5:00 PM – 9:00 PM</strong> (Mon–Sat)</span>
          <span className="bg-amberPrimary/20 text-amberPrimary px-1.5 py-0.5 rounded font-bold text-[10px]">
            SUNDAYS CLOSED
          </span>
        </div>

        {/* Location & Contact Quick Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://maps.app.goo.gl/yZtfCPxRXGqiZn1E6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-amberPrimary transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-goldSecondary" />
            <span>1st Floor TVS Showroom, Charla Rd, Bhadrachalam</span>
          </a>
          <a
            href="tel:+919347539453"
            className="flex items-center gap-1 hover:text-amberPrimary transition-colors font-medium text-white"
          >
            <Phone className="w-3.5 h-3.5 text-amberPrimary" />
            <span>+91 93475 39453</span>
          </a>
          <a
            href="https://wa.me/919347539453?text=Hi%20Power%20House%20Gym!%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

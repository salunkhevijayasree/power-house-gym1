import React from 'react';
import { Dumbbell, MapPin, Phone, MessageCircle, Navigation, ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const mapLink = "https://maps.app.goo.gl/yZtfCPxRXGqiZn1E6";
  const instaLink = "https://www.instagram.com/power_house_gym_bhadrachalam?igsh=Znk3emoyeHc0dWs3";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#060709] border-t border-gymBorder text-textMuted pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="POWERHOUSE GYM Official Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-amberPrimary shadow-glow-amber"
              />
              <span className="font-display text-2xl font-extrabold text-white">
                POWER HOUSE <span className="text-amberPrimary">GYM</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-textMuted">
              Bhadrachalam's premier 2,000 sq. ft. fitness center featuring imported modern bio-mechanical equipment, certified trainers, bodybuilding & fat loss programs.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919347539453"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Support"
                className="w-8 h-8 rounded-lg bg-gymCard border border-gymBorder flex items-center justify-center text-emerald-400 hover:border-emerald-500 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+919347539453"
                title="Call Desk"
                className="w-8 h-8 rounded-lg bg-gymCard border border-gymBorder flex items-center justify-center text-amberPrimary hover:border-amberPrimary hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={instaLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Page"
                className="w-8 h-8 rounded-lg bg-gymCard border border-gymBorder flex items-center justify-center text-pink-400 hover:border-pink-500 hover:scale-105 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Google Maps Location"
                className="w-8 h-8 rounded-lg bg-gymCard border border-gymBorder flex items-center justify-center text-goldSecondary hover:border-goldSecondary hover:scale-105 transition-all"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-subheading text-xs font-extrabold text-white uppercase tracking-widest mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-subheading">
              <li>
                <a href="#facility" className="hover:text-amberPrimary transition-colors">
                  Facility Overview
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amberPrimary transition-colors">
                  Training Zones & Programs
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amberPrimary transition-colors">
                  Membership Rates Menu
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-amberPrimary transition-colors">
                  Split Operating Hours
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amberPrimary transition-colors">
                  Member Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* NAP Local Business Info */}
          <div>
            <h4 className="font-subheading text-xs font-extrabold text-white uppercase tracking-widest mb-4">
              LOCATION & ADDRESS
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amberPrimary shrink-0 mt-0.5" />
                <span className="text-textPrimary">
                  1st Floor TVS Showroom, Charla Road, Korrajula Gutta, Bhadrachalam, Telangana 507111
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amberPrimary shrink-0" />
                <div className="flex flex-col text-white">
                  <a href="tel:+919347539453" className="hover:text-amberPrimary">
                    +91 93475 39453
                  </a>
                  <a href="tel:+919963655193" className="hover:text-amberPrimary">
                    +91 99636 55193
                  </a>
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-1.5">
                <a
                  href={instaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-subheading font-bold text-xs"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@power_house_gym_bhadrachalam</span>
                </a>

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-goldSecondary hover:text-amberPrimary font-subheading font-bold text-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Google Maps Pin</span>
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Box */}
          <div>
            <h4 className="font-subheading text-xs font-extrabold text-white uppercase tracking-widest mb-4">
              GYM TIMINGS
            </h4>
            <div className="bg-gymCard p-4 rounded-xl border border-gymBorder text-xs space-y-2">
              <div className="flex justify-between text-textPrimary font-semibold">
                <span>Morning Shift:</span>
                <span className="text-amberPrimary">5:00 AM – 11:00 AM</span>
              </div>
              <div className="flex justify-between text-textPrimary font-semibold">
                <span>Evening Shift:</span>
                <span className="text-amberPrimary">5:00 PM – 9:00 PM</span>
              </div>
              <div className="pt-2 border-t border-gymBorder/40 flex justify-between text-[11px]">
                <span>Days:</span>
                <span className="text-white">Monday – Saturday</span>
              </div>
              <div className="flex justify-between text-[11px] text-red-400 font-bold">
                <span>Sundays:</span>
                <span>CLOSED</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Banner */}
        <div className="pt-8 border-t border-gymBorder/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} POWER HOUSE GYM Bhadrachalam. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-gymCard border border-gymBorder flex items-center justify-center text-textMuted hover:text-amberPrimary hover:border-amberPrimary transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

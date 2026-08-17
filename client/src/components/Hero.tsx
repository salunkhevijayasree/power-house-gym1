import React from 'react';
import { Star, Flame, ShieldCheck, Phone, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const phonePrimary = "9347539453";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gymDark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Power House Gym Bhadrachalam Interior"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gymDark via-gymDark/90 to-gymDark/70" />
        <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberPrimary/10 border border-amberPrimary/30 text-amberPrimary text-xs font-subheading font-bold uppercase tracking-wider mb-6">
            <Flame className="w-4 h-4 fill-amberPrimary text-amberPrimary" />
            <span>Bhadrachalam's #1 Fitness Destination</span>
          </div>

          {/* Main High-Impact Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95] mb-6">
            TRAIN HARDER. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amberPrimary via-amber-500 to-goldSecondary gym-glow-text">
              GET STRONGER.
            </span> <br />
            TRANSFORM YOUR BODY.
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base sm:text-lg lg:text-xl text-textMuted max-w-2xl leading-relaxed mb-8">
            Bhadrachalam's premier fitness center featuring imported modern equipment, dedicated free-weight zones, and certified personal trainers.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={`https://wa.me/91${phonePrimary}?text=Hi%20Powerhouse%20Gym!%20I%20want%20to%20inquire%20about%20membership%20rates%20and%20timings.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-subheading font-extrabold text-base text-white shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>WhatsApp Inquiry</span>
            </a>

            <a
              href={`tel:+91${phonePrimary}`}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amberPrimary to-amber-600 font-subheading font-extrabold text-base text-white shadow-glow-amber hover:from-amber-600 hover:to-amberPrimary transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <Phone className="w-5 h-5" />
              <span>Call Gym Desk (+91 {phonePrimary})</span>
            </a>
          </div>

          {/* Trust Highlights Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gymBorder/60">
            <div className="flex items-center gap-3 bg-gymCard/60 backdrop-blur-sm p-3.5 rounded-xl border border-gymBorder">
              <div className="w-10 h-10 rounded-lg bg-goldSecondary/20 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-goldSecondary fill-goldSecondary" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white leading-none">5.0 ★ Rating</div>
                <div className="text-xs text-textMuted font-medium">128+ Local Members</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gymCard/60 backdrop-blur-sm p-3.5 rounded-xl border border-gymBorder">
              <div className="w-10 h-10 rounded-lg bg-amberPrimary/20 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-amberPrimary" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white leading-none">Spacious Floor</div>
                <div className="text-xs text-textMuted font-medium font-subheading">A/C Gym Layout</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gymCard/60 backdrop-blur-sm p-3.5 rounded-xl border border-gymBorder">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white leading-none">Imported Gear</div>
                <div className="text-xs text-textMuted font-medium">Modern Machinery</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

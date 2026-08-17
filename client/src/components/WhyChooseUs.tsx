import React from 'react';
import { Cpu, Maximize2, Award, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Imported Bio-Mechanical Machinery',
      subtitle: 'Engineered Ergonomics',
      description:
        'State-of-the-art plate-loaded machines, cable crossover towers, and bio-mechanically aligned stations built for maximum muscle activation and minimal joint strain.',
      tag: 'MODERN TECH',
    },
    {
      icon: Maximize2,
      title: 'Spacious & Uncrowded Floor',
      subtitle: '2,000 Sq. Ft. Training Area',
      description:
        'Zero waiting time for machines. Enjoy an open-concept training floor with designated free-weight, cardio, and functional movement zones.',
      tag: 'OPTIMAL SPACE',
    },
    {
      icon: Award,
      title: 'Hands-on Expert Trainers',
      subtitle: 'Certified Guidance Every Step',
      description:
        'Our certified trainers provide personal form correction, progressive overload strategies, and tailored workout plans for all fitness levels.',
      tag: '100% HANDS-ON',
    },
    {
      icon: Sparkles,
      title: 'Spotless Cleanliness & Hygiene',
      subtitle: 'Sanitized Hourly',
      description:
        'Continuous sanitation protocols, high-efficiency air ventilation, clean washrooms, and pristine locker amenities for a healthy workout environment.',
      tag: 'HYGIENE GUARANTEED',
    },
  ];

  return (
    <section id="facility" className="py-20 bg-gymDark border-b border-gymBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amberPrimary/10 border border-amberPrimary/30 text-amberPrimary text-xs font-subheading font-bold uppercase tracking-wider mb-3">
            WHY POWER HOUSE GYM
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            BUILT FOR <span className="text-amberPrimary">SERIOUS RESULTS</span>
          </h2>
          <p className="font-body text-textMuted text-base sm:text-lg mt-3">
            Discover why fitness enthusiasts across Bhadrachalam choose Power House Gym for their strength and transformation journey.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="gym-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glowing corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amberPrimary/5 rounded-bl-full group-hover:bg-amberPrimary/20 transition-colors" />
                
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amberPrimary/15 border border-amberPrimary/30 flex items-center justify-center text-amberPrimary group-hover:bg-amberPrimary group-hover:text-white transition-all shadow-glow-amber">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-subheading font-extrabold px-2.5 py-1 rounded bg-gymDark border border-gymBorder text-goldSecondary">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-amberPrimary transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-subheading font-semibold text-amberPrimary mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="font-body text-sm text-textMuted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gymBorder/40 flex items-center text-xs font-subheading font-bold text-textMuted group-hover:text-white transition-colors">
                  <span>Explore Equipment</span>
                  <span className="ml-auto text-amberPrimary">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

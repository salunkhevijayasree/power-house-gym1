import React from 'react';
import { Dumbbell, Activity, Scale, UserCheck, CheckCircle2, Phone, Instagram, MessageCircle } from 'lucide-react';

export const Programs: React.FC = () => {
  const coaches = [
    {
      role: 'Head Coach',
      name: 'Bablu Gummadi',
      phone: '9347539453',
      phoneFormatted: '+91 93475 39453',
      instaUrl: 'https://www.instagram.com/_bablu____?igsh=N2trZTc1eTZjbzA3',
      instaHandle: '@_bablu____',
    },
    {
      role: 'Personal Trainer',
      name: 'Likith Easakonu',
      phone: '9948668501',
      phoneFormatted: '+91 99486 68501',
      instaUrl: 'https://www.instagram.com/likhith__naidu_14?igsh=MXU5MzVvaWF6aG0ycg==',
      instaHandle: '@likhith__naidu_14',
    },
  ];

  const programs = [
    {
      id: 'strength',
      title: 'Strength & Hypertrophy',
      icon: Dumbbell,
      image: '/images/real_squatrack.jpg',
      badge: 'POPULAR ZONE',
      subtitle: 'Heavy Weightlifting & Muscle Building',
      description:
        'Equipped with heavy-duty power squat racks, Maxfit plate-loaded machines, cable crossover towers, and solid dumbbell racks up to heavy weights.',
      features: [
        'Maxfit dumbbell racks & rubber flooring',
        'Plate-loaded ISO-lateral chest & shoulder press',
        'Red power squat rack & Olympic barbell bench',
        'Bio-mechanical cable crossovers & lat pulldown'
      ],
    },
    {
      id: 'cardio',
      title: 'Cardio & Conditioning',
      icon: Activity,
      image: '/images/real_cardio.jpg',
      badge: 'HIGH STAMINA',
      subtitle: 'Endurance, Heart Health & Aerobics',
      description:
        'Modern commercial treadmills with shock absorption, digital consoles, and aerobics conditioning engineered to burn calories and boost cardiovascular endurance.',
      features: [
        'Commercial treadmills with incline & speed controls',
        'High-intensity aerobics & conditioning circuits',
        'Heart rate monitoring & stamina building',
        'Dedicated warm-up & foam-rolling turf zone'
      ],
    },
    {
      id: 'weightloss',
      title: 'Weight Loss & Toning',
      icon: Scale,
      image: '/images/real_row.jpg',
      badge: 'FAT BURN',
      subtitle: 'Targeted Body Recomposition',
      description:
        'Structured HIIT workouts, core strengthening routines, and fat-loss protocols combined with personalized body fat analysis to shape and tone your physique.',
      features: [
        'Customized weekly fat-burn HIIT circuits',
        'Core strengthening & abdominal workout gear',
        'Body composition & progress measurement',
        'Targeted dietary guidance & calorie deficit tracking'
      ],
    },
    {
      id: 'personaltraining',
      title: '1-on-1 Personal Training',
      icon: UserCheck,
      image: '/images/real_smith.jpg',
      badge: 'PREMIUM GUIDANCE',
      subtitle: 'Tailored Fitness Architecture',
      description:
        'Dedicated 1-on-1 coaching with Coach Bablu Gummadi & Trainer Likith Easakonu. Customized exercise programming, form correction, meal plans, and daily accountability.',
      features: [
        'Dedicated certified trainer every workout session',
        'Custom workout plan tailored to your schedule',
        'Complete diet & macro nutrition blueprint',
        'Bi-weekly physical measurement audits'
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-[#0A0B0E] border-b border-gymBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amberPrimary/10 border border-amberPrimary/30 text-amberPrimary text-xs font-subheading font-bold uppercase tracking-wider mb-3">
            TRAINING ZONES & CERTIFIED COACHES
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            SPECIALIZED <span className="text-amberPrimary">FITNESS PROGRAMS</span>
          </h2>
          <p className="font-body text-textMuted text-base sm:text-lg mt-3">
            Guided by Head Coach Bablu Gummadi & Personal Trainer Likith Easakonu.
          </p>
        </div>

        {/* Certified Trainers Banner */}
        <div className="bg-gymCard border border-amberPrimary/40 rounded-2xl p-6 mb-12 shadow-glow-amber">
          <h3 className="font-display text-2xl font-extrabold text-white uppercase mb-4 flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-amberPrimary" />
            <span>MEET OUR EXPERT COACHES & TRAINERS</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coaches.map((c, idx) => (
              <div key={idx} className="bg-gymDark p-5 rounded-xl border border-gymBorder flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-subheading font-extrabold px-2.5 py-0.5 rounded bg-amberPrimary/20 text-amberPrimary border border-amberPrimary/30 uppercase">
                      {c.role}
                    </span>
                    <span className="text-xs text-goldSecondary font-bold">POWERHOUSE GYM</span>
                  </div>

                  <h4 className="font-display text-2xl font-bold text-white mb-1">
                    {c.name}
                  </h4>
                  <div className="text-xs text-textMuted mb-4">
                    Direct Contact: <strong className="text-white">{c.phoneFormatted}</strong>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-gymBorder/40">
                  <a
                    href={`tel:+91${c.phone}`}
                    className="flex-1 px-3 py-2 rounded-lg bg-gymCard border border-gymBorder hover:border-amberPrimary text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-amberPrimary" />
                    <span>Call Coach</span>
                  </a>

                  <a
                    href={`https://wa.me/91${c.phone}?text=Hi%20${encodeURIComponent(c.name)},%20I%20want%20to%20inquire%20about%20gym%20training!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/50 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={c.instaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-pink-500/40 text-pink-300 text-xs font-semibold hover:border-pink-400 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>{c.instaHandle}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="gym-card rounded-2xl overflow-hidden group flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gymCard via-gymCard/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-amberPrimary text-white font-subheading text-[10px] font-extrabold tracking-wider uppercase shadow-glow-amber">
                      {program.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gymDark/90 border border-gymBorder flex items-center justify-center text-amberPrimary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white leading-tight group-hover:text-amberPrimary transition-colors">
                        {program.title}
                      </h3>
                      <div className="text-xs text-textMuted font-subheading font-medium">
                        {program.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="font-body text-sm text-textMuted mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2">
                    {program.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-textPrimary">
                        <CheckCircle2 className="w-4 h-4 text-amberPrimary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

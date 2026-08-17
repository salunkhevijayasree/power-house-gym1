import React, { useState } from 'react';
import { Check, Flame, MessageCircle, ShieldCheck, Dumbbell, Zap, Gift, Eye, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Pricing: React.FC = () => {
  const { openTrialModal } = useAuth();
  const [category, setCategory] = useState<'strength' | 'cardio'>('strength');
  const [showFlyerModal, setShowFlyerModal] = useState(false);

  const phonePrimary = "9347539453";
  const phoneSecondary = "9963655193";

  const plans = [
    {
      id: '1-month',
      name: '1 Month Starter',
      duration: '30 Days Membership',
      price: category === 'strength' ? 1299 : 1800,
      badge: 'STARTER PLAN',
      popular: false,
      whatsappMsg: `Hi! I want to join the 1 Month ${category === 'strength' ? 'Strength (₹1,299)' : 'Cardio (₹1,800)'} plan at Power House Gym Bhadrachalam.`,
      features: [
        category === 'strength' ? 'Full Access to Strength & Weightlifting Zone' : 'Full Access to Cardio Deck + Strength Floor',
        'Imported Bio-Mechanical Equipment',
        'Floor Trainer Form Correction',
        'Clean Locker Room & Shower Access',
        'Starter Workout Chart',
      ],
    },
    {
      id: '3-months',
      name: '3 Months Transformation',
      duration: '90 Days Complete Package',
      price: category === 'strength' ? 2999 : 3999,
      savings: category === 'strength' ? 'Save ₹900' : 'Save ₹1,400',
      badge: 'MOST POPULAR',
      popular: true,
      whatsappMsg: `Hi! I want to enroll in the 3 Months ${category === 'strength' ? 'Strength (₹2,999)' : 'Cardio (₹3,999)'} Transformation Plan at Power House Gym.`,
      features: [
        'All 1-Month Plan Benefits Included',
        'Personalized Diet & Macro Nutrition Plan',
        'Fat Loss & Bodybuilding Guidance',
        'Body Fat & Composition Tracking',
        'Supplement Guidance',
      ],
    },
    {
      id: '6-months',
      name: '6 Months Muscle Pass',
      duration: '180 Days Membership',
      price: category === 'strength' ? 5999 : 7999,
      savings: category === 'strength' ? 'Save ₹1,800' : 'Save ₹2,800',
      badge: 'PRO VALUE',
      popular: false,
      whatsappMsg: `Hi! I want to enroll in the 6 Months ${category === 'strength' ? 'Strength (₹5,999)' : 'Cardio (₹7,999)'} plan at Power House Gym.`,
      features: [
        'All 3-Month Plan Benefits Included',
        'Aerobics & Stamina Conditioning',
        'Dedicated Trainer Progression Audits',
        'Custom Diet Plan Adjustments',
        'Priority Locker Allocation',
      ],
    },
    {
      id: '12-months',
      name: '12 Months VIP Pass',
      duration: '365 Days + 1 Month FREE Bonus!',
      price: 12999,
      bonus: '+ 1 MONTH FREE',
      badge: 'BEST VALUE',
      popular: false,
      whatsappMsg: `Hi! I want to lock in the 12 Months VIP Pass (₹12,999 + 1 Month Free) at Power House Gym.`,
      features: [
        '13 MONTHS TOTAL ACCESS (1 Month Free)',
        'Full Strength & Cardio All-Access',
        'Complete Bodybuilding & Fat Loss Blueprint',
        'Personalized Diet & Supplement Coaching',
        'Lowest Monthly Cost (~₹999/mo)',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0A0B0E] border-b border-gymBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amberPrimary/10 border border-amberPrimary/30 text-amberPrimary text-xs font-subheading font-bold uppercase tracking-wider mb-3">
            OFFICIAL MEMBERSHIP RATES
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            POWER HOUSE GYM <span className="text-amberPrimary">MEMBERSHIP MENU</span>
          </h2>
          <p className="font-body text-textMuted text-base sm:text-lg mt-3">
            Transparent pricing for Men & Women at 1st Floor TVS Showroom, Charla Road, Bhadrachalam.
          </p>

          {/* Action to view original rate card flyer */}
          <div className="mt-4">
            <button
              onClick={() => setShowFlyerModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gymCard border border-amberPrimary/40 text-amberPrimary hover:bg-amberPrimary hover:text-white font-subheading font-bold text-xs transition-all shadow-md"
            >
              <Eye className="w-4 h-4" />
              <span>View Official Rate Card Menu Flyer</span>
            </button>
          </div>

          {/* Category Selector Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-gymCard border border-gymBorder">
            <button
              onClick={() => setCategory('strength')}
              className={`px-6 py-2.5 rounded-xl text-xs font-subheading font-extrabold transition-all flex items-center gap-2 ${
                category === 'strength'
                  ? 'bg-amberPrimary text-white shadow-glow-amber'
                  : 'text-textMuted hover:text-white'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>Strength Training</span>
            </button>

            <button
              onClick={() => setCategory('cardio')}
              className={`px-6 py-2.5 rounded-xl text-xs font-subheading font-extrabold transition-all flex items-center gap-2 ${
                category === 'cardio'
                  ? 'bg-amberPrimary text-white shadow-glow-amber'
                  : 'text-textMuted hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Cardio & All-Access</span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`gym-card rounded-2xl p-6 flex flex-col justify-between relative transition-all ${
                plan.popular
                  ? 'border-2 border-amberPrimary shadow-glow-amber bg-gradient-to-b from-[#1E222B] to-gymCard transform lg:-translate-y-2'
                  : 'border border-gymBorder'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-amberPrimary text-white font-subheading text-[10px] font-extrabold tracking-widest uppercase shadow-glow-amber flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {!plan.popular && (
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block text-[10px] font-subheading font-bold px-2.5 py-0.5 rounded bg-gymDark border border-gymBorder text-goldSecondary">
                      {plan.badge}
                    </span>
                    {plan.bonus && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-subheading font-extrabold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
                        <Gift className="w-3 h-3" />
                        {plan.bonus}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="font-display text-2xl font-extrabold text-white mb-1">
                  {plan.name}
                </h3>
                <div className="text-xs text-textMuted font-medium mb-4">
                  {plan.duration}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="font-display text-4xl font-extrabold text-white">
                    ₹{plan.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-textMuted font-medium">/-</span>
                  {plan.savings && (
                    <span className="ml-auto text-[11px] font-subheading font-bold text-emerald-400">
                      {plan.savings}
                    </span>
                  )}
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 mb-6 border-t border-gymBorder/50 pt-4">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-textPrimary">
                      <div className="w-4 h-4 rounded-full bg-amberPrimary/20 text-amberPrimary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Official Rate Card Menu Lightbox Modal */}
      {showFlyerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-2xl w-full bg-gymCard border border-gymBorder rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowFlyerModal(false)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-amberPrimary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-h-[80vh] flex items-center justify-center bg-black p-2">
              <img
                src="/images/official_rate_card.jpg"
                alt="POWERHOUSE GYM Official Rate Card Flyer Menu"
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="p-4 bg-gymDark flex items-center justify-between text-xs">
              <div>
                <span className="text-amberPrimary font-subheading font-bold">
                  POWERHOUSE GYM A/C OFFICIAL MENU
                </span>
                <div className="text-textMuted">1st Floor TVS Showroom, Charla Road, Bhadrachalam</div>
              </div>
              <a
                href={`https://wa.me/91${phonePrimary}?text=Hi!%20I%20saw%20the%20official%20POWERHOUSE%20GYM%20rate%20card.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-subheading font-bold flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Desk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

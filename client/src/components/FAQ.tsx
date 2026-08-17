import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are the operating timings of Power House Gym?',
      answer:
        'Power House Gym operates on a split shift schedule from Monday to Saturday: Morning shift is 5:00 AM to 11:00 AM, and Evening shift is 5:00 PM to 9:00 PM. The gym is closed on Sundays for deep sanitization and maintenance.',
    },
    {
      question: 'What are the official membership rates for Strength & Cardio?',
      answer:
        'Strength membership rates: 1 Month (₹1,299), 3 Months (₹2,999), 6 Months (₹5,999), 12 Months (₹12,999 + 1 Month Free). Cardio membership rates: 1 Month (₹1,800), 3 Months (₹3,999), 6 Months (₹7,999), 12 Months (₹12,999 + 1 Month Free).',
    },
    {
      question: 'Can absolute beginners join without prior fitness experience?',
      answer:
        'Yes! Absolutely. Our certified trainers provide personal form correction, machine guidance, diet plans, and supplement guidance for all new members.',
    },
    {
      question: 'What programs and facilities are included?',
      answer:
        'We feature Bodybuilding, Fat Loss, Personalized Diet Plans, Supplement Guidance, Aerobics, and imported premium equipment across our modern A/C facility.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gymDark border-b border-gymBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amberPrimary/10 border border-amberPrimary/30 text-amberPrimary text-xs font-subheading font-bold uppercase tracking-wider mb-3">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            GOT QUESTIONS? <span className="text-amberPrimary">WE HAVE ANSWERS</span>
          </h2>
          <p className="font-body text-textMuted text-base mt-2">
            Everything you need to know about joining Power House Gym Bhadrachalam.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="gym-card rounded-2xl border border-gymBorder overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-subheading font-bold text-base text-white hover:text-amberPrimary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amberPrimary shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-textMuted transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-amberPrimary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 font-body text-sm text-textMuted leading-relaxed border-t border-gymBorder/40">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

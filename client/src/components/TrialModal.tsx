import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

export const TrialModal: React.FC = () => {
  const { isTrialModalOpen, closeTrialModal, selectedPlanMessage } = useAuth();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (5:00 AM - 10:00 AM)');
  const [fitnessGoal, setFitnessGoal] = useState('Muscle Building & Strength');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isTrialModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await api.submitTrialInquiry({
      name,
      phone,
      preferredSlot,
      fitnessGoal,
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    closeTrialModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-gymCard border border-gymBorder rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in">
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-textMuted hover:text-white rounded-lg bg-gymDark"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-subheading font-bold text-amberPrimary uppercase mb-2">
              <Sparkles className="w-4 h-4 text-goldSecondary" />
              <span>FREE 1-DAY PASS ACCESS</span>
            </div>

            <h3 className="font-display text-3xl font-extrabold text-white mb-2">
              CLAIM YOUR FREE TRIAL PASS
            </h3>

            <p className="font-body text-xs text-textMuted mb-6 leading-relaxed">
              Experience Bhadrachalam's premier 2,000 sq. ft. gym with imported machinery and certified trainer guidance.
            </p>

            {selectedPlanMessage && (
              <div className="bg-amberPrimary/10 border border-amberPrimary/30 rounded-xl p-3 mb-4 text-xs text-amberPrimary font-medium">
                {selectedPlanMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  Preferred Split Shift
                </label>
                <select
                  value={preferredSlot}
                  onChange={(e) => setPreferredSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                >
                  <option>Morning (5:00 AM – 10:00 AM)</option>
                  <option>Evening (5:00 PM – 9:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  Primary Fitness Goal
                </label>
                <select
                  value={fitnessGoal}
                  onChange={(e) => setFitnessGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                >
                  <option>Muscle Building & Strength</option>
                  <option>Weight Loss & Fat Burn</option>
                  <option>General Body Toning & Fitness</option>
                  <option>1-on-1 Personal Training</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-amberPrimary font-subheading font-extrabold text-white text-sm shadow-glow-amber hover:bg-amber-600 transition-all uppercase tracking-wider mt-2"
              >
                {isSubmitting ? 'Generating Trial Pass...' : 'Get Instant Trial Pass'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-3xl font-extrabold text-white mb-2">
              TRIAL PASS CLAIMED!
            </h3>
            <p className="text-xs text-textMuted mb-6 leading-relaxed">
              Welcome, <strong className="text-white">{name}</strong>! Your 1-day pass for{' '}
              <strong className="text-amberPrimary">{preferredSlot}</strong> has been registered.
            </p>
            <div className="bg-gymDark p-4 rounded-xl border border-gymBorder text-xs text-left mb-6 space-y-2">
              <div className="text-textMuted">
                📍 Location: <span className="text-white">Charla Rd, Korrajula Gutta, Bhadrachalam</span>
              </div>
              <div className="text-textMuted">
                📞 Desk Support: <span className="text-white">+91 98765 43210</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-3 rounded-xl bg-amberPrimary text-white font-subheading font-bold text-xs"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

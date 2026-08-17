import React, { useState } from 'react';
import { X, User as UserIcon, Activity, Calendar, ShieldCheck, Dumbbell, Award, Edit3, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface MemberDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemberDashboard: React.FC<MemberDashboardProps> = ({ isOpen, onClose }) => {
  const { user, profile, updateProfile, openTrialModal } = useAuth();

  const [weightKg, setWeightKg] = useState<number>(profile?.weightKg || 74);
  const [heightCm, setHeightCm] = useState<number>(profile?.heightCm || 178);
  const [fitnessGoal, setFitnessGoal] = useState<string>(profile?.fitnessGoal || 'Muscle Building & Hypertrophy');
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'advanced'>(
    profile?.experienceLevel || 'intermediate'
  );
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen || !user) return null;

  // Calculate BMI
  const heightMeters = heightCm / 100;
  const bmi = heightMeters > 0 ? (weightKg / (heightMeters * heightMeters)).toFixed(1) : '0.0';

  let bmiCategory = 'Normal Weight';
  let bmiColor = 'text-emerald-400';
  const bmiValue = parseFloat(bmi);
  if (bmiValue < 18.5) {
    bmiCategory = 'Underweight';
    bmiColor = 'text-amber-400';
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    bmiCategory = 'Overweight';
    bmiColor = 'text-amberPrimary';
  } else if (bmiValue >= 30) {
    bmiCategory = 'Obese';
    bmiColor = 'text-red-400';
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({
      weightKg,
      heightCm,
      fitnessGoal,
      experienceLevel,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-gymCard border border-gymBorder rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-textMuted hover:text-white rounded-lg bg-gymDark"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amberPrimary/20 border border-amberPrimary/40 flex items-center justify-center text-amberPrimary font-display text-2xl font-bold">
            {user.fullName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-3xl font-extrabold text-white">
                {user.fullName}
              </h3>
              <span className="px-2.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-subheading text-[10px] font-bold">
                ACTIVE MEMBER
              </span>
            </div>
            <p className="text-xs text-textMuted">{user.email} • {user.phone || '+91 98765 43210'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Membership Status Card */}
          <div className="bg-gymDark p-5 rounded-xl border border-gymBorder flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-subheading font-bold text-amberPrimary uppercase">
                  CURRENT MEMBERSHIP
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="font-display text-2xl font-extrabold text-white">
                3 Months Transformation Pass
              </h4>
              <p className="text-xs text-textMuted mt-1">
                Valid until: <strong className="text-white">60 Days Remaining</strong>
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gymBorder/40 flex items-center justify-between">
              <span className="text-[11px] text-goldSecondary font-semibold">
                Perk: Diet & Macro Plan Active
              </span>
              <button
                onClick={() => {
                  onClose();
                  openTrialModal('Hi! I want to renew my Power House Gym membership.');
                }}
                className="text-xs font-subheading font-bold text-amberPrimary hover:underline"
              >
                Renew Pass
              </button>
            </div>
          </div>

          {/* Interactive BMI & Body Metrics Card */}
          <div className="bg-gymDark p-5 rounded-xl border border-gymBorder flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-subheading font-bold text-goldSecondary uppercase">
                  BODY MASS INDEX (BMI)
                </span>
                <Activity className="w-4 h-4 text-goldSecondary" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold text-white">
                  {bmi}
                </span>
                <span className={`text-xs font-bold ${bmiColor}`}>
                  {bmiCategory}
                </span>
              </div>
              <p className="text-xs text-textMuted mt-2">
                Calculated from <strong className="text-white">{weightKg} kg</strong> and{' '}
                <strong className="text-white">{heightCm} cm</strong>.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gymBorder/40 text-[11px] text-textMuted">
              Recommended: Progress overload with 1.6g protein per kg.
            </div>
          </div>

        </div>

        {/* Edit Fitness Metrics & Profile Form */}
        <div className="bg-gymDark p-6 rounded-xl border border-gymBorder">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-subheading text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-amberPrimary" />
              Update Fitness Metrics
            </h4>
            {isSaved && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> Profile Updated!
              </span>
            )}
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  Current Weight (kg)
                </label>
                <input
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-gymCard border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-gymCard border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                Primary Goal
              </label>
              <select
                value={fitnessGoal}
                onChange={(e) => setFitnessGoal(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-gymCard border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
              >
                <option>Muscle Building & Hypertrophy</option>
                <option>Fat Loss & Body Toning</option>
                <option>Strength & Powerlifting</option>
                <option>Endurance & General Health</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                Experience Level
              </label>
              <select
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-gymCard border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
              >
                <option value="beginner">Beginner (0 - 6 Months)</option>
                <option value="intermediate">Intermediate (6 Months - 2 Years)</option>
                <option value="advanced">Advanced (2+ Years)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-amberPrimary text-white font-subheading font-bold text-xs shadow-glow-amber hover:bg-amber-600 transition-all uppercase"
            >
              Save Fitness Profile
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

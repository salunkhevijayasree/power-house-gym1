import React, { useState } from 'react';
import { X, ShieldAlert, Users, Phone, CheckCircle, Clock } from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState([
    {
      id: '1',
      name: 'Ramesh Naidu',
      phone: '+91 98480 12345',
      slot: 'Morning (5:00 AM - 10:00 AM)',
      goal: 'Muscle Building',
      status: 'pending',
      date: 'Today',
    },
    {
      id: '2',
      name: 'Sravani K.',
      phone: '+91 94401 56789',
      slot: 'Evening (5:00 PM - 9:00 PM)',
      goal: 'Weight Loss & Toning',
      status: 'contacted',
      date: 'Yesterday',
    },
    {
      id: '3',
      name: 'Venkatesh M.',
      phone: '+91 99890 11223',
      slot: 'Morning (5:00 AM - 10:00 AM)',
      goal: '1-on-1 PT',
      status: 'converted',
      date: '3 days ago',
    },
  ]);

  if (!isOpen) return null;

  const toggleStatus = (id: string) => {
    setInquiries(
      inquiries.map((inq) => {
        if (inq.id === id) {
          const nextStatus =
            inq.status === 'pending'
              ? 'contacted'
              : inq.status === 'contacted'
              ? 'converted'
              : 'pending';
          return { ...inq, status: nextStatus };
        }
        return inq;
      })
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-gymCard border border-gymBorder rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-textMuted hover:text-white rounded-lg bg-gymDark"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/40 text-purple-400 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold text-white">
              ADMIN CONTROL PANEL
            </h3>
            <p className="text-xs text-textMuted">
              Manage Trial Pass Leads & Gym Inquiries • Power House Gym
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-subheading text-xs font-bold text-white uppercase tracking-wider">
            Trial Pass Inquiries ({inquiries.length})
          </h4>

          <div className="space-y-3">
            {inquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-gymDark p-4 rounded-xl border border-gymBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-subheading font-bold text-white text-sm">
                      {inq.name}
                    </span>
                    <span className="text-xs text-amberPrimary font-medium">
                      ({inq.phone})
                    </span>
                  </div>
                  <div className="text-xs text-textMuted mt-1">
                    Slot: <strong className="text-white">{inq.slot}</strong> • Goal:{' '}
                    <span className="text-goldSecondary">{inq.goal}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(
                      inq.name
                    )},%20this%20is%20Power%20House%20Gym%20Bhadrachalam!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/50"
                  >
                    WhatsApp Lead
                  </a>

                  <button
                    onClick={() => toggleStatus(inq.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      inq.status === 'converted'
                        ? 'bg-emerald-500 text-gymDark'
                        : inq.status === 'contacted'
                        ? 'bg-amberPrimary text-white'
                        : 'bg-gymCard text-textMuted border border-gymBorder'
                    }`}
                  >
                    {inq.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

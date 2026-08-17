import React from 'react';
import { Clock, MapPin, Navigation, Phone, MessageCircle, Instagram } from 'lucide-react';

export const ScheduleLocation: React.FC = () => {
  const mapLink = "https://maps.app.goo.gl/yZtfCPxRXGqiZn1E6";

  const scheduleMatrix = [
    {
      shift: 'Morning Shift',
      hours: '5:00 AM – 11:00 AM',
      days: 'Monday to Saturday',
      highlight: 'Ideal for early risers & pre-work workouts',
      status: 'Open Daily',
    },
    {
      shift: 'Evening Shift',
      hours: '5:00 PM – 9:00 PM',
      days: 'Monday to Saturday',
      highlight: 'High energy post-work strength & cardio sessions',
      status: 'Open Daily',
    },
    {
      shift: 'Sunday Rest Day',
      hours: 'Closed',
      days: 'Sundays',
      highlight: 'Equipment maintenance & deep sanitization',
      status: 'Closed',
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-[#0A0B0E] border-b border-gymBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amberPrimary/10 border border-amberPrimary/30 text-amberPrimary text-xs font-subheading font-bold uppercase tracking-wider mb-3">
            OPERATING HOURS & LOCATION
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            FIND US IN <span className="text-amberPrimary">BHADRACHALAM</span>
          </h2>
          <p className="font-body text-textMuted text-base sm:text-lg mt-3">
            Located at 1st Floor TVS Showroom, Charla Road, Korrajula Gutta, Bhadrachalam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Schedule Matrix Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="gym-card rounded-2xl p-6 border border-gymBorder">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amberPrimary/20 text-amberPrimary flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    SPLIT SHIFT SCHEDULE MATRIX
                  </h3>
                  <p className="text-xs text-textMuted font-medium">
                    Monday to Saturday • Closed Sundays
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {scheduleMatrix.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      item.status === 'Closed'
                        ? 'bg-gymDark/60 border-gymBorder/40 text-textMuted'
                        : 'bg-gymDark border-gymBorder hover:border-amberPrimary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-subheading font-bold text-white text-base">
                        {item.shift}
                      </span>
                      <span
                        className={`text-[10px] font-subheading font-extrabold px-2 py-0.5 rounded ${
                          item.status === 'Closed'
                            ? 'bg-red-950/40 text-red-400 border border-red-900/50'
                            : 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-display text-2xl font-extrabold text-amberPrimary mb-1">
                      <span>{item.hours}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-textMuted">
                      <span>{item.days}</span>
                      <span className="italic text-[11px]">{item.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Direction Card */}
            <div className="gym-card rounded-2xl p-6 border border-gymBorder">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-goldSecondary/20 text-goldSecondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-xl font-bold text-white">
                    POWERHOUSE GYM ADDRESS & CONTACT
                  </h4>
                  <p className="text-sm text-textPrimary leading-snug font-semibold">
                    1st Floor TVS Showroom, Charla Road, Korrajula Gutta, Bhadrachalam, Telangana 507111
                  </p>
                  <div className="text-xs text-amberPrimary font-bold space-x-3 pt-1">
                    <span>📞 93475 39453</span>
                    <span>•</span>
                    <span>📞 99636 55193</span>
                  </div>

                  <div className="pt-3 flex flex-wrap gap-3">
                    <a
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-amberPrimary font-subheading font-bold text-xs text-white shadow-glow-amber hover:bg-amber-600 flex items-center gap-2 transition-all"
                    >
                      <Navigation className="w-4 h-4 fill-white" />
                      <span>Get Directions on Google Maps</span>
                    </a>

                    <a
                      href="https://wa.me/919347539453?text=Hi%20Powerhouse%20Gym!%20I%20want%20to%20inquire%20about%20timings."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/50 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Desk</span>
                    </a>

                    <a
                      href="https://www.instagram.com/power_house_gym_bhadrachalam?igsh=Znk3emoyeHc0dWs3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-pink-500/40 text-pink-300 text-xs font-semibold hover:border-pink-400 flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Frame Column */}
          <div className="lg:col-span-6">
            <div className="gym-card rounded-2xl overflow-hidden border border-gymBorder relative h-[520px] group">
              <iframe
                title="Power House Gym Bhadrachalam Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15234.789210985!2d80.8850000!3d17.6680000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36746816655555%3A0x123456789abcdef!2sBhadrachalam%2C%20Telangana%20507111!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-gymDark/90 backdrop-blur-md p-4 rounded-xl border border-gymBorder flex items-center justify-between">
                <div>
                  <div className="text-xs font-subheading font-bold text-amberPrimary">
                    POWERHOUSE GYM A/C
                  </div>
                  <div className="text-xs text-white">1st Floor TVS Showroom, Charla Road</div>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-amberPrimary text-white font-subheading text-xs font-bold shadow-glow-amber flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

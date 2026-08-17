import React, { useState } from 'react';
import { Maximize2, X, Sparkles, Instagram, ExternalLink, Play } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<any | null>(null);

  const reelUrl = "https://www.instagram.com/reel/DR9i4gpE-Fx/?igsh=MWFveWVsbWc0ZXB1OQ==";
  const reelEmbedUrl = "https://www.instagram.com/p/DR9i4gpE-Fx/embed";

  const galleryItems = [
    {
      id: 1,
      title: 'Main Workout Floor & Free Weight Zone',
      category: 'strength',
      image: '/images/real_floor.jpg',
      caption: 'Spacious 2,000 sq. ft. main training floor featuring incline bench stations, dumbbell racks, and warm gold LED backlighting.',
    },
    {
      id: 2,
      title: 'Maxfit Dumbbell Rack & Mirror Wall',
      category: 'strength',
      image: '/images/real_dumbbells.jpg',
      caption: 'Full multi-tier Maxfit dumbbell rack setup with full-length mirror wall and ambient ceiling strip lighting.',
    },
    {
      id: 3,
      title: 'Red Heavy Squat Rack & Barbell Station',
      category: 'strength',
      image: '/images/real_squatrack.jpg',
      caption: 'Dedicated red power squat rack equipped with Olympic barbell and Maxfit blue rubber bumper plates.',
    },
    {
      id: 4,
      title: 'Maxfit Smith Machine & Cable Cage',
      category: 'machinery',
      image: '/images/real_smith.jpg',
      caption: 'Commercial Maxfit multi-functional Smith machine and cable tower station with flat bench.',
    },
    {
      id: 5,
      title: 'ISO-Lateral Row & Back Station',
      category: 'machinery',
      image: '/images/real_row.jpg',
      caption: 'Biomechanically aligned Maxfit ISO-lateral leverage rowing machine with yellow 15kg bumper plates.',
    },
    {
      id: 6,
      title: 'Super Squat Plate-Loaded Machine',
      category: 'machinery',
      image: '/images/real_squat.jpg',
      caption: 'Heavy-duty Maxfit Super Squat leg station for maximum quad and glute strength development.',
    },
    {
      id: 7,
      title: 'Dual Cable Crossover & Mirror Station',
      category: 'machinery',
      image: '/images/real_cable.jpg',
      caption: 'Bio-mechanical cable crossover machine with full-length mirror wall and ambient warm LED strip lighting.',
    },
    {
      id: 8,
      title: 'High-Tech Treadmills & Cardio Deck',
      category: 'cardio',
      image: '/images/real_cardio.jpg',
      caption: 'Commercial shock-absorbing treadmills with digital consoles and recessed ceiling spotlights.',
    },
    {
      id: 9,
      title: 'Member Community & Group Vibe',
      category: 'community',
      image: '/images/real_group.jpg',
      caption: 'Motivating and friendly atmosphere with dedicated female member groups and certified coach support.',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gymDark border-b border-gymBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amberPrimary/10 border border-amberPrimary/30 text-amberPrimary text-xs font-subheading font-bold uppercase tracking-wider mb-3">
            ACTUAL FACILITY TOUR & GALLERY
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            INSIDE <span className="text-amberPrimary">POWER HOUSE GYM</span>
          </h2>
          <p className="font-body text-textMuted text-base sm:text-lg mt-3">
            Explore our video tour & 9 authentic facility photos on Charla Rd, Korrajula Gutta, Bhadrachalam.
          </p>
        </div>

        {/* Featured Instagram Reel Video Banner */}
        <div className="mb-16 gym-card rounded-3xl p-6 sm:p-8 border border-amberPrimary/40 shadow-glow-amber bg-gradient-to-r from-gymDark via-gymCard to-gymDark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-pink-500/40 text-pink-300 text-xs font-subheading font-bold uppercase tracking-wider">
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>OFFICIAL INSTAGRAM REEL TOUR</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-tight">
                EXPERIENCE THE REAL <span className="text-amberPrimary">POWERHOUSE GYM VIBE</span>
              </h3>

              <p className="font-body text-textMuted text-base leading-relaxed">
                Step inside Bhadrachalam's premier 2,000 sq. ft. fitness hub! Watch our live workout floor, imported Maxfit machines, heavy power racks, and high-energy workout atmosphere in our official video reel.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amberPrimary text-white font-subheading font-extrabold text-xs tracking-wider uppercase shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Video Reel on Instagram</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/power_house_gym_bhadrachalam?igsh=Znk3emoyeHc0dWs3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-gymDark border border-gymBorder hover:border-pink-500/50 text-white font-subheading font-bold text-xs flex items-center gap-2 transition-all"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Follow @power_house_gym_bhadrachalam</span>
                </a>
              </div>
            </div>

            {/* Right Video Embed Container */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] h-[520px] rounded-2xl overflow-hidden border-2 border-amberPrimary/50 bg-black shadow-2xl relative group">
                <iframe
                  src={reelEmbedUrl}
                  title="POWERHOUSE GYM Bhadrachalam Instagram Reel Tour"
                  className="w-full h-full border-0"
                  allowTransparency={true}
                  allow="encrypted-media"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { id: 'all', label: 'All 9 Photos' },
            { id: 'strength', label: 'Free Weights & Racks' },
            { id: 'machinery', label: 'Imported Machinery' },
            { id: 'cardio', label: 'Cardio Deck' },
            { id: 'community', label: 'Member Community' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-subheading font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amberPrimary text-white shadow-glow-amber'
                  : 'bg-gymCard border border-gymBorder text-textMuted hover:text-white hover:border-amberPrimary/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="gym-card rounded-2xl overflow-hidden group relative cursor-pointer h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gymDark via-gymDark/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gymDark/80 backdrop-blur-md flex items-center justify-center text-amberPrimary opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[10px] font-subheading font-bold uppercase tracking-widest text-amberPrimary mb-1">
                  {item.category}
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-amberPrimary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-textMuted line-clamp-2 mt-0.5 leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-gymCard border border-gymBorder rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-amberPrimary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-gymDark">
              <div className="flex items-center gap-2 text-xs text-amberPrimary font-subheading font-bold uppercase mb-1">
                <Sparkles className="w-4 h-4" />
                <span>POWER HOUSE GYM • BHADRACHALAM FACILITY</span>
              </div>
              <h3 className="font-display text-3xl font-extrabold text-white">
                {lightboxImage.title}
              </h3>
              <p className="text-sm text-textMuted mt-1">
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

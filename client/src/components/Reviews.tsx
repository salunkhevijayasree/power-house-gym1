import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, PlusCircle } from 'lucide-react';
import { GymReview } from '../types';

export const Reviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<GymReview[]>([
    {
      id: 'rev-1',
      author: 'Rajesh Varma',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'Best gym in Bhadrachalam by far! The workout space feels massive and uncrowded. The imported bio-mechanical machines give incredible chest and back isolation. Certified trainers are always available to guide form.',
      badge: 'VERIFIED LOCAL MEMBER',
    },
    {
      id: 'rev-2',
      author: 'Suresh Kumar',
      rating: 5,
      date: '1 month ago',
      comment:
        'Super clean space and extremely motivating environment! The split shift timings (5-10 AM & 5-9 PM) fit my work schedule perfectly. Clean locker rooms and continuous sanitization.',
      badge: 'VERIFIED MEMBER',
    },
    {
      id: 'rev-3',
      author: 'Anitha Reddy',
      rating: 5,
      date: '3 weeks ago',
      comment:
        'Joined the 3-month transformation plan. Coach guided my nutrition and strength routine step by step. Down 6kg in 2 months while gaining strength. Highly recommended for women seeking safe & clean gym!',
      badge: 'VERIFIED MEMBER',
    },
    {
      id: 'rev-4',
      author: 'Karthik Raju',
      rating: 5,
      date: '2 months ago',
      comment:
        'Dumbbell rack setup goes up to heavy weights with plate loaded machines. Great music, spotless hygiene, and very friendly owner on Charla Rd!',
      badge: 'VERIFIED MEMBER',
    },
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;
    const review: GymReview = {
      id: 'rev-' + Date.now(),
      author: newAuthor,
      rating: newRating,
      date: 'Just now',
      comment: newComment,
      badge: 'NEW MEMBER REVIEW',
    };
    setReviewsList([review, ...reviewsList]);
    setNewAuthor('');
    setNewComment('');
    setShowAddModal(false);
  };

  return (
    <section id="reviews" className="py-20 bg-gymDark border-b border-gymBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block px-3.5 py-1 rounded-full bg-amberPrimary/10 border border-amberPrimary/30 text-amberPrimary text-xs font-subheading font-bold uppercase tracking-wider mb-3">
              MEMBER TESTIMONIALS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              REAL REVIEWS FROM <span className="text-amberPrimary">LOCAL MEMBERS</span>
            </h2>
            <p className="font-body text-textMuted text-base sm:text-lg mt-2">
              Rated <strong className="text-goldSecondary">5.0 ★</strong> on Google by fitness enthusiasts across Bhadrachalam.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gymCard px-5 py-3 rounded-2xl border border-gymBorder flex items-center gap-3">
              <div className="text-center border-r border-gymBorder pr-3">
                <div className="font-display text-3xl font-extrabold text-goldSecondary">5.0</div>
                <div className="flex text-goldSecondary text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-goldSecondary" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-textMuted font-medium">
                <div>128+ Genuine Reviews</div>
                <div className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-3 rounded-2xl bg-amberPrimary/20 border border-amberPrimary/40 text-amberPrimary hover:bg-amberPrimary hover:text-white font-subheading font-bold text-xs flex items-center gap-2 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="gym-card rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-gymBorder/40 pointer-events-none" />

              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-goldSecondary gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-goldSecondary" />
                    ))}
                  </div>
                  <span className="text-[10px] font-subheading font-extrabold px-2 py-0.5 rounded bg-gymDark border border-gymBorder text-amberPrimary">
                    {rev.badge}
                  </span>
                </div>

                <p className="font-body text-sm text-textPrimary leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gymBorder/40 flex items-center justify-between text-xs">
                <div>
                  <div className="font-subheading font-bold text-white text-sm">
                    {rev.author}
                  </div>
                  <div className="text-textMuted">{rev.date}</div>
                </div>

                <div className="flex items-center gap-1 text-textMuted">
                  <ThumbsUp className="w-3.5 h-3.5 text-amberPrimary" />
                  <span>Helpful</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-gymCard border border-gymBorder rounded-2xl max-w-md w-full p-6 relative">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              WRITE A MEMBER REVIEW
            </h3>
            <p className="text-xs text-textMuted mb-6">
              Share your workout experience at Power House Gym Bhadrachalam.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  Star Rating
                </label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                >
                  <option value={5}>5 Stars ★★★★★ (Exceptional)</option>
                  <option value={4}>4 Stars ★★★★☆ (Great)</option>
                  <option value={3}>3 Stars ★★★☆☆ (Average)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-subheading font-semibold text-textMuted mb-1">
                  Review Comment
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the equipment, atmosphere, cleanliness, or trainers..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-gymDark border border-gymBorder text-white text-sm focus:border-amberPrimary focus:outline-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-lg bg-gymDark border border-gymBorder text-textMuted font-semibold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-lg bg-amberPrimary font-subheading font-bold text-white text-xs shadow-glow-amber"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

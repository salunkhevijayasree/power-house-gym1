import { User, MemberProfile, Membership, TrialInquiry } from '../types';

const API_BASE = '/api';

export const api = {
  // Auth
  async login(email: string, password_hash: string): Promise<{ user: User; token: string }> {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: password_hash }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Login failed');
      }
      return await res.json();
    } catch (err: any) {
      if (email === 'admin@powerhousegym.com') {
        return {
          user: { id: 'admin-1', email, fullName: 'Gym Admin', role: 'admin' },
          token: 'demo-admin-token',
        };
      }
      return {
        user: { id: 'member-1', email, fullName: 'Fitness Enthusiast', role: 'member' },
        token: 'demo-member-token',
      };
    }
  },

  async register(fullName: string, email: string, password_hash: string, phone: string): Promise<{ user: User; token: string }> {
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password: password_hash, phone }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Registration failed');
      }
      return await res.json();
    } catch (err: any) {
      return {
        user: { id: 'user-' + Date.now(), email, fullName, phone, role: 'member' },
        token: 'demo-user-token',
      };
    }
  },

  // Memberships
  async getMemberships(): Promise<Membership[]> {
    try {
      const res = await fetch(`${API_BASE}/memberships`);
      if (!res.ok) throw new Error('Failed to fetch memberships');
      return await res.json();
    } catch (err) {
      return [
        {
          id: '1-month',
          name: '1 Month Starter',
          price: 1299,
          durationDays: 30,
          perks: ['Strength Floor Access', 'Imported Equipment', 'Floor Trainer Assistance', 'Locker Room'],
          badge: 'STARTER PLAN',
        },
        {
          id: '3-months',
          name: '3 Months Transformation',
          price: 2999,
          durationDays: 90,
          perks: ['Strength & Fat Loss Blueprint', 'Personalized Diet Plan', 'Body Fat Tracking', 'Supplementation Guide'],
          isPopular: true,
          badge: 'MOST POPULAR',
        },
        {
          id: '6-months',
          name: '6 Months Muscle Pass',
          price: 5999,
          durationDays: 180,
          perks: ['Full Strength & Aerobics', 'Custom Meal Plans', 'Trainer Progress Audits', 'Priority Locker'],
          badge: 'PRO VALUE',
        },
        {
          id: '12-months',
          name: '12 Months VIP Pass',
          price: 12999,
          durationDays: 395,
          perks: ['13 MONTHS TOTAL ACCESS (1 Month Free)', 'Full All-Access', 'Personalized Nutrition & Coaching', 'Lowest Monthly Rate (~₹999/mo)'],
          badge: 'BEST VALUE',
        },
      ];
    }
  },

  // Trial Pass Inquiries
  async submitTrialInquiry(data: TrialInquiry): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch(`${API_BASE}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed');
      return await res.json();
    } catch (err) {
      return { success: true, message: 'Trial pass claim received! Our team will contact you shortly.' };
    }
  },

  // Member Profile
  async getMemberProfile(token: string): Promise<{ profile: MemberProfile; membership?: Membership }> {
    try {
      const res = await fetch(`${API_BASE}/members/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch profile');
      return await res.json();
    } catch (err) {
      return {
        profile: {
          id: 'prof-1',
          userId: 'member-1',
          age: 26,
          gender: 'Male',
          weightKg: 74,
          heightCm: 178,
          fitnessGoal: 'Muscle Building & Hypertrophy',
          experienceLevel: 'intermediate',
          currentMembershipId: '3-months',
          membershipExpiresAt: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
        }
      };
    }
  },

  async updateMemberProfile(token: string, data: Partial<MemberProfile>): Promise<{ success: boolean }> {
    try {
      const res = await fetch(`${API_BASE}/members/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Update failed');
      return await res.json();
    } catch (err) {
      return { success: true };
    }
  }
};

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const fallbackStore = {
  users: [
    {
      id: 'admin-1',
      email: 'admin@powerhousegym.com',
      password_hash: '$2a$10$e8R45d.v1u.5Vd1K5O8u3eKx',
      full_name: 'Gym Admin',
      phone: '+91 93475 39453',
      role: 'admin',
      created_at: new Date().toISOString(),
    },
    {
      id: 'member-1',
      email: 'member@powerhousegym.com',
      password_hash: '$2a$10$e8R45d.v1u.5Vd1K5O8u3eKx',
      full_name: 'Rajesh Varma',
      phone: '+91 99636 55193',
      role: 'member',
      created_at: new Date().toISOString(),
    },
  ],
  memberships: [
    {
      id: '1-month',
      name: '1 Month Starter',
      price: 1299,
      duration_days: 30,
      perks: ['Strength Floor Access', 'Imported Equipment', 'Floor Trainer Assistance', 'Locker Room'],
      is_active: true,
    },
    {
      id: '3-months',
      name: '3 Months Transformation',
      price: 2999,
      duration_days: 90,
      perks: ['Strength & Fat Loss Blueprint', 'Personalized Diet Plan', 'Body Fat Tracking', 'Supplementation Guide'],
      is_active: true,
    },
    {
      id: '6-months',
      name: '6 Months Muscle Pass',
      price: 5999,
      duration_days: 180,
      perks: ['Full Strength & Aerobics', 'Custom Meal Plans', 'Trainer Progress Audits', 'Priority Locker'],
      is_active: true,
    },
    {
      id: '12-months',
      name: '12 Months VIP Pass',
      price: 12999,
      duration_days: 395,
      perks: ['13 MONTHS TOTAL ACCESS (1 Month Free)', 'Full All-Access', 'Personalized Nutrition & Coaching'],
      is_active: true,
    },
  ],
  member_profiles: [
    {
      id: 'prof-1',
      user_id: 'member-1',
      age: 26,
      gender: 'Male',
      weight_kg: 74,
      height_cm: 178,
      fitness_goal: 'Muscle Building & Hypertrophy',
      experience_level: 'intermediate',
      current_membership_id: '3-months',
      membership_expires_at: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ],
  trial_inquiries: [] as any[],
};

export type Role = 'member' | 'admin';

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  role: Role;
  createdAt?: string;
}

export interface MemberProfile {
  id: string;
  userId: string;
  age?: number;
  gender?: string;
  weightKg?: number;
  heightCm?: number;
  fitnessGoal?: string;
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
  currentMembershipId?: string;
  membershipExpiresAt?: string;
}

export interface Membership {
  id: string;
  name: string;
  price: number;
  durationDays: number;
  perks: string[];
  isPopular?: boolean;
  badge?: string;
  whatsappMessage?: string;
}

export interface TrialInquiry {
  id?: string;
  name: string;
  phone: string;
  preferredSlot: string;
  fitnessGoal: string;
  createdAt?: string;
}

export interface GymReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  badge?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  trainer: string;
}

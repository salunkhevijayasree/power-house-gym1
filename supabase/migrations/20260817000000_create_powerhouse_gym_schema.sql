-- POWER HOUSE GYM DATABASE SCHEMA (PostgreSQL / Supabase)
-- Created for Power House Gym, Charla Rd, Korrajula Gutta, Bhadrachalam, Telangana 507111

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  role TEXT CHECK (role IN ('member', 'admin')) DEFAULT 'member',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index on email & role for quick auth lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);

-- 2. MEMBERSHIPS TABLE
CREATE TABLE IF NOT EXISTS public.memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  duration_days INTEGER NOT NULL,
  perks TEXT[] NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. MEMBER PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.member_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  age INTEGER CHECK (age >= 10 AND age <= 100),
  gender TEXT,
  weight_kg NUMERIC(5, 2),
  height_cm NUMERIC(5, 2),
  fitness_goal TEXT,
  experience_level TEXT CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')) DEFAULT 'beginner',
  current_membership_id UUID REFERENCES public.memberships(id) ON DELETE SET NULL,
  membership_expires_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Foreign key indexes
CREATE INDEX IF NOT EXISTS idx_member_profiles_user_id ON public.member_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_member_profiles_membership_id ON public.member_profiles(current_membership_id);

-- 4. TRIAL INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.trial_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_slot TEXT NOT NULL,
  fitness_goal TEXT,
  status TEXT CHECK (status IN ('pending', 'contacted', 'converted')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.member_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trial_inquiries ENABLE ROW LEVEL SECURITY;

-- Sample Policies
CREATE POLICY "Public memberships are viewable by everyone" ON public.memberships
  FOR SELECT USING (is_active = true);

CREATE POLICY "Users can view own profile" ON public.member_profiles
  FOR SELECT USING (auth.uid() = user_id);

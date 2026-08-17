-- SEED DATA FOR POWER HOUSE GYM BHADRACHALAM

-- Insert Default Membership Plans
INSERT INTO public.memberships (id, name, price, duration_days, perks, is_active)
VALUES 
  (
    '11111111-1111-1111-1111-111111111111',
    '1 Month Kickstart',
    1500.00,
    30,
    ARRAY['Unlimited Floor Access', 'Full Equipment Usage', 'Locker & Shower Access', 'Free Customized Workout Chart'],
    true
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    '3 Months Transformation',
    3800.00,
    90,
    ARRAY['All 1-Month Plan Features', 'Personalized Diet & Nutrition Plan', 'Monthly Body Composition Analysis', '1 Free Personal Training Session', 'Free Shaker Bottle'],
    true
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    'Annual Power Pass',
    12000.00,
    365,
    ARRAY['Full 1 Year VIP Access', 'Free Guest Passes (2/Month)', 'Dedicated Trainer Assistance', 'Custom Supplement & Macro Guide', 'Lowest Rate (₹1,000/mo)'],
    true
  )
ON CONFLICT DO NOTHING;

-- Insert Admin User & Sample Member User
INSERT INTO public.users (id, email, password_hash, full_name, phone, role)
VALUES 
  ('aaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'admin@powerhousegym.com', '$2a$10$X8T.vXk0xYyKzM...hash', 'Gym Admin', '+91 98765 43210', 'admin'),
  ('bbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'member@powerhousegym.com', '$2a$10$X8T.vXk0xYyKzM...hash', 'Rajesh Varma', '+91 98480 12345', 'member')
ON CONFLICT DO NOTHING;

-- Insert Sample Member Profile
INSERT INTO public.member_profiles (id, user_id, age, gender, weight_kg, height_cm, fitness_goal, experience_level, current_membership_id, membership_expires_at)
VALUES 
  ('cccccc-cccc-cccc-cccc-cccccccccccc', 'bbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 26, 'Male', 74.5, 178.0, 'Muscle Building & Hypertrophy', 'intermediate', '22222222-2222-2222-2222-222222222222', NOW() + INTERVAL '60 days')
ON CONFLICT DO NOTHING;

import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware.js';
import { supabase, fallbackStore } from '../config/database.js';

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id || 'member-1';

    if (supabase) {
      const { data, error } = await supabase
        .from('member_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      if (error && error.code !== 'PGRST116') {
        return res.status(500).json({ message: error.message });
      }
      return res.json({ profile: data || null });
    }

    const profile = fallbackStore.member_profiles.find(p => p.user_id === userId) || fallbackStore.member_profiles[0];
    return res.json({ profile });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error fetching profile' });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id || 'member-1';
    const { age, gender, weight_kg, height_cm, fitness_goal, experience_level } = req.body;

    if (supabase) {
      const { data, error } = await supabase
        .from('member_profiles')
        .upsert({
          user_id: userId,
          age,
          gender,
          weight_kg,
          height_cm,
          fitness_goal,
          experience_level,
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) return res.status(400).json({ message: error.message });
      return res.json({ success: true, profile: data });
    }

    const idx = fallbackStore.member_profiles.findIndex(p => p.user_id === userId);
    const existing = idx >= 0 ? fallbackStore.member_profiles[idx] : fallbackStore.member_profiles[0];
    const updated = {
      ...existing,
      id: existing.id || 'prof-' + Date.now(),
      user_id: userId,
      weight_kg: weight_kg || existing.weight_kg,
      height_cm: height_cm || existing.height_cm,
      fitness_goal: fitness_goal || existing.fitness_goal,
      experience_level: experience_level || existing.experience_level,
    };
    if (idx >= 0) fallbackStore.member_profiles[idx] = updated;
    else fallbackStore.member_profiles.push(updated);

    return res.json({ success: true, profile: updated });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error updating profile' });
  }
};

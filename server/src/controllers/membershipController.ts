import { Request, Response } from 'express';
import { supabase, fallbackStore } from '../config/database.js';

export const getMemberships = async (req: Request, res: Response) => {
  try {
    if (supabase) {
      const { data, error } = await supabase.from('memberships').select('*').eq('is_active', true);
      if (error) return res.status(500).json({ message: error.message });
      return res.json(data);
    }
    return res.json(fallbackStore.memberships);
  } catch (err: any) {
    return res.status(500).json({ message: 'Error fetching memberships' });
  }
};

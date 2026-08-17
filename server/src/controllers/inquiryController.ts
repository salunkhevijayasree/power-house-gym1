import { Request, Response } from 'express';
import { supabase, fallbackStore } from '../config/database.js';

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const { name, phone, preferredSlot, fitnessGoal } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ message: 'Name and phone are required' });
    }

    if (supabase) {
      const { data, error } = await supabase
        .from('trial_inquiries')
        .insert([{ name, phone, preferred_slot: preferredSlot, fitness_goal: fitnessGoal, status: 'pending' }])
        .select()
        .single();
      if (error) return res.status(400).json({ message: error.message });
      return res.json({ success: true, inquiry: data });
    }

    const inquiry = {
      id: 'inq-' + Date.now(),
      name,
      phone,
      preferredSlot,
      fitnessGoal,
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    fallbackStore.trial_inquiries.push(inquiry);
    return res.json({ success: true, inquiry });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error submitting inquiry' });
  }
};

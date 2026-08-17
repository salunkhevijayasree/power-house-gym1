import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { supabase, fallbackStore } from '../config/database.js';

const JWT_SECRET = process.env.JWT_SECRET || 'powerhousegym_secret_2026';

export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, phone } = req.body;
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: 'Full name, email and password are required' });
    }

    if (supabase) {
      const { data, error } = await supabase.from('users').insert([
        { full_name: fullName, email, password_hash: password, phone, role: 'member' }
      ]).select().single();

      if (error) return res.status(400).json({ message: error.message });
      
      const token = jwt.sign({ id: data.id, email: data.email, role: data.role }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ user: data, token });
    }

    // Fallback store
    const newUser = {
      id: 'user-' + Date.now(),
      email,
      password_hash: password,
      full_name: fullName,
      phone: phone || '',
      role: 'member' as const,
      created_at: new Date().toISOString()
    };
    fallbackStore.users.push(newUser);
    const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ user: newUser, token });
  } catch (err: any) {
    return res.status(500).json({ message: err.message || 'Registration failed' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    if (supabase) {
      const { data, error } = await supabase.from('users').select('*').eq('email', email).single();
      if (error || !data) return res.status(401).json({ message: 'Invalid credentials' });
      
      const token = jwt.sign({ id: data.id, email: data.email, role: data.role }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ user: data, token });
    }

    // Fallback lookup
    const existing = fallbackStore.users.find(u => u.email === email);
    if (!existing) {
      // Auto register for smooth demo testing
      const demoUser = {
        id: 'user-' + Date.now(),
        email,
        password_hash: password,
        full_name: email.split('@')[0],
        phone: '+91 98765 43210',
        role: email.includes('admin') ? 'admin' : 'member',
        created_at: new Date().toISOString()
      };
      fallbackStore.users.push(demoUser);
      const token = jwt.sign({ id: demoUser.id, email: demoUser.email, role: demoUser.role }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ user: demoUser, token });
    }

    const token = jwt.sign({ id: existing.id, email: existing.email, role: existing.role }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ user: existing, token });
  } catch (err: any) {
    return res.status(500).json({ message: err.message || 'Login failed' });
  }
};

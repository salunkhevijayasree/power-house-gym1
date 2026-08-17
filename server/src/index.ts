import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import membershipRoutes from './routes/membershipRoutes.js';
import memberRoutes from './routes/memberRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/memberships', membershipRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/inquiries', inquiryRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    gym: 'POWER HOUSE GYM',
    location: 'Charla Rd, Korrajula Gutta, Bhadrachalam, Telangana 507111',
    mapLink: 'https://maps.app.goo.gl/yZtfCPxRXGqiZn1E6',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Power House Gym REST API Server running on port ${PORT}`);
});

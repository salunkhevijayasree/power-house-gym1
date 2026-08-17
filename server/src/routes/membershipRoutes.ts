import { Router } from 'express';
import { getMemberships } from '../controllers/membershipController.js';

const router = Router();

router.get('/', getMemberships);

export default router;

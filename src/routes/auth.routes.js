import { Router } from 'express';
import * as auth from '../controllers/auth.controller';

const router = Router();

router.post('/signin', auth.signIn);
router.post('/signup', auth.signUp);

export default router;
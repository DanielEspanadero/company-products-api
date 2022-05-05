import { Router } from 'express';
import * as auth from '../controllers/auth.controller';
import { verifySignup } from '../middlewares';

const router = Router();

router.post('/signin', auth.signIn);
router.post('/signup', verifySignup.checkDuplicateUsernameOrEmail, auth.signUp);

export default router;
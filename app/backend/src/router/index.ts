import { Router } from 'express';
import teamsRouter from './teams.router';
import userRouter from './login.router';
import matchesRouter from './matches.router';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);
router.use('/matches', matchesRouter);

export default router;

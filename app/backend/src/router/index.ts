import { Router } from 'express';
import teamsRouter from './teams.router';
import userRouter from './login.router';
import matchesRouter from './matches.router';
import boardRouter from './leaderboard.router';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', boardRouter);

export default router;

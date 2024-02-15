import { Router } from 'express';
import teamsRouter from './teams.router';

const router = Router();

router.use('/teams', teamsRouter);

export default router;

import { Request, Response, Router } from 'express';
import MatchController from '../Controllers/Match.Controller';

const boardRouter = Router();
const newMatchesController = new MatchController();

boardRouter.get('/home', (req: Request, res:Response) => {
  newMatchesController.createLeaderboard(req, res);
});

export default boardRouter;

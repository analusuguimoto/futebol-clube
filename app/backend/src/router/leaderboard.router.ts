import { Request, Response, Router } from 'express';
import MatchController from '../Controllers/Match.Controller';

const boardRouter = Router();
const newMatchesController = new MatchController();

boardRouter.get('/home', (req: Request, res:Response) => {
  newMatchesController.homeLeaderboard(req, res);
});

boardRouter.get('/away', (req: Request, res:Response) => {
  newMatchesController.awayLeaderboard(req, res);
});

boardRouter.get('/', (req: Request, res:Response) => {
  newMatchesController.completeLeaderboard(req, res);
});

export default boardRouter;

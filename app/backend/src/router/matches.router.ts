import { Request, Response, Router } from 'express';
import MatchController from '../Controllers/Match.Controller';

const matchesRouter = Router();

const newMatchesController = new MatchController();

matchesRouter.get('/', (req: Request, res: Response) => {
  newMatchesController.getListOfMatches(req, res);
});

export default matchesRouter;

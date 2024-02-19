import { Request, Response, Router } from 'express';
import MatchController from '../Controllers/Match.Controller';
import tokenAuth from '../middlewares/tokenAuthenticator';

const matchesRouter = Router();

const newMatchesController = new MatchController();

matchesRouter.get('/', (req: Request, res: Response) => {
  newMatchesController.getListOfMatches(req, res);
});

matchesRouter.post('/', tokenAuth.validate, (req: Request, res: Response) => {
  newMatchesController.createMatch(req, res);
});

matchesRouter.patch('/:id/finish', tokenAuth.validate, (req: Request, res: Response) => {
  newMatchesController.updateStatus(req, res);
});

matchesRouter.patch('/:id', tokenAuth.validate, (req: Request, res:Response) => {
  newMatchesController.updateMatchPoints(req, res);
});

export default matchesRouter;

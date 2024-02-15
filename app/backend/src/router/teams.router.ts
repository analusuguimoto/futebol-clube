import { Request, Response, Router } from 'express';
import TeamsController from '../Controllers/Team.Controller';

const teamsRouter = Router();

const newTeamsController = new TeamsController();

teamsRouter.get('/', (req: Request, res: Response) => {
  newTeamsController.getListOfTeams(req, res);
});

export default teamsRouter;

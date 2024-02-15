import { Request, Response } from 'express';
import TeamsServices from '../Services/Team.Service';
import statushttp from '../utils/statushttp';

class TeamsController {
  private _teamService: TeamsServices;

  constructor() {
    this._teamService = new TeamsServices();
  }

  async getListOfTeams(_req: Request, res: Response) {
    const allTeams = await this._teamService.getListOfTeams();
    res.status(statushttp(allTeams.status)).json(allTeams.data);
  }

  async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const teamById = await this._teamService.getTeamById(+id);

    if (teamById.status === 'SUCCESS') {
      return res.status(statushttp(teamById.status)).json(teamById.data);
    }

    res.status(statushttp(teamById.status)).json(teamById.data);
  }
}

export default TeamsController;

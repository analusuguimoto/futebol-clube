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
}

export default TeamsController;

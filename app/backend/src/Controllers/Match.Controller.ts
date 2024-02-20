import { Request, Response } from 'express';
import MatchService from '../Services/Match.Service';
import statushttp from '../utils/statushttp';

class MatchController {
  private _service: MatchService;

  constructor() {
    this._service = new MatchService();
  }

  async getListOfMatches(req: Request, res: Response) {
    const list = await this._service.getListOfMatches();
    const { inProgress } = req.query;

    if (inProgress === 'true' && Array.isArray(list.data)) {
      const matchInProgress = list.data.filter((match) => match.inProgress === true);
      return res.status(statushttp(list.status)).json(matchInProgress);
    }

    if (inProgress === 'false' && Array.isArray(list.data)) {
      const endedMatch = list.data.filter((match) => match.inProgress === false);
      return res.status(statushttp(list.status)).json(endedMatch);
    }

    res.status(statushttp(list.status)).json(list.data);
  }

  async updateStatus(req: Request, res: Response) {
    const { id } = req.params;
    const updated = await this._service.updateStatus(+id);

    res.status(statushttp(updated.status)).json(updated.data);
  }

  async updateMatchPoints(req: Request, res:Response) {
    const { id } = req.params;
    const matchupdated = await this._service.updateMatchPoints(+id, req.body);
    res.status(statushttp(matchupdated.status)).json(matchupdated.data);
  }

  async createMatch(req: Request, res: Response) {
    const created = await this._service.createMatch(req.body);
    res.status(statushttp(created.status)).json(created.data);
  }

  async createLeaderboard(_req: Request, res: Response) {
    const board = await this._service.createLeaderboard();
    res.status(statushttp(board.status)).json(board.data);
  }
}

export default MatchController;

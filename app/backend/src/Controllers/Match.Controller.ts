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
}

export default MatchController;
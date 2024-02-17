import { Request, Response } from 'express';
import MatchService from '../Services/Match.Service';
import statushttp from '../utils/statushttp';

class MatchController {
  private _service: MatchService;

  constructor() {
    this._service = new MatchService();
  }

  async getListOfMatches(_req: Request, res: Response) {
    const list = await this._service.getListOfMatches();
    res.status(statushttp(list.status)).json(list.data);
  }
}

export default MatchController;

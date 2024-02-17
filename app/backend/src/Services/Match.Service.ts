import MatchesIf from '../Interfaces/MatchesIf';
import { ServiceResponse } from '../utils/ServiceResponse';
import MatchModel from '../model/match.model';

class MatchService {
  private _match: MatchModel;

  constructor() {
    this._match = new MatchModel();
  }

  async getListOfMatches(): Promise<ServiceResponse<MatchesIf[]>> {
    const list = await this._match.getListOfMatches();
    return {
      status: 'SUCCESS',
      data: list,
    };
  }
}

export default MatchService;

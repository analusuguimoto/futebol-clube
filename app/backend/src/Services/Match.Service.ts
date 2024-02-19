import MatchesIf from '../Interfaces/MatchesIf';
import { ServiceResponse } from '../utils/ServiceResponse';
import MatchModel from '../model/match.model';
import MatchPoints from '../Interfaces/MatchPoints';

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

  async updateStatus(id: number): Promise<ServiceResponse<{ message: string }>> {
    await this._match.updateStatus(id);
    return {
      status: 'SUCCESS',
      data: { message: 'finished' },
    };
  }

  async updateMatchPoints(id: number, points: MatchPoints):
  Promise<ServiceResponse<{ message: string }>> {
    await this._match.updateInProgress(id, points);
    return {
      status: 'SUCCESS',
      data: { message: 'update successful' },
    };
  }
}

export default MatchService;

import MatchesIf from '../Interfaces/MatchesIf';
import { ServiceResponse } from '../utils/ServiceResponse';
import MatchModel from '../model/match.model';
import MatchPoints from '../Interfaces/MatchPoints';
import GetTheTeams from '../model/team.model';

class MatchService {
  private _match: MatchModel;
  private _teams = new GetTheTeams();

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

  async createMatch(info: MatchesIf): Promise<ServiceResponse<MatchesIf>> {
    const { homeTeamId, awayTeamId } = info;
    const HT = await this._teams.getTeamById(+homeTeamId);
    const AT = await this._teams.getTeamById(+awayTeamId);

    console.log('home', HT);
    console.log('away', AT);

    if (!HT || !AT) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }

    if (HT.id === AT.id) {
      return { status: 'UNPROCESSABLE_ENTITY',
        data: { message: 'It is not possible to create a match with two equal teams' } };
    }

    const createdMatch = await this._match.createMatch(info);
    return {
      status: 'CREATED',
      data: createdMatch,
    };
  }
}

export default MatchService;

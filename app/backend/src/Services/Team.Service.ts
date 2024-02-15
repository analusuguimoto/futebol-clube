import Team from '../model/team.model';
import { ServiceResponse } from '../utils/ServiceResponse';
import TeamsIf from '../Interfaces/TeamsIf';

class TeamsServices {
  private _team: Team;

  constructor() {
    this._team = new Team();
  }

  async getListOfTeams(): Promise<ServiceResponse<TeamsIf[]>> {
    const listOfTeams = await this._team.getListOfTeams();

    return {
      status: 'SUCCESS',
      data: listOfTeams,
    };
  }

  async getTeamById(id: number): Promise<ServiceResponse<TeamsIf>> {
    const teamById = await this._team.getTeamById(id);
    if (!teamById) {
      return {
        status: 'NOT_FOUND',
        data: { message: 'Team not found' },
      };
    }

    return {
      status: 'SUCCESS',
      data: teamById,
    };
  }
}

export default TeamsServices;

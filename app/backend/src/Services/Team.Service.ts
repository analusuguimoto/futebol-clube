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
}

export default TeamsServices;

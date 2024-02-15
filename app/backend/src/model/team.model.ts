import TeamsIf from '../Interfaces/TeamsIf';
import TeamsModel from '../database/models/TeamsModel';
import AllTeamsIf from '../Interfaces/AllTeamsIf';

class getAllTeams implements AllTeamsIf {
  private _teamsModel = TeamsModel;

  async getListOfTeams(): Promise<TeamsIf[]> {
    const list = await this._teamsModel.findAll();
    return list;
  }
}

export default getAllTeams;

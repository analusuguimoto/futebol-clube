import TeamsIf from '../Interfaces/TeamsIf';
import TeamsModel from '../database/models/TeamsModel';
import AllTeamsIf from '../Interfaces/AllTeamsIf';

class getTheTeams implements AllTeamsIf {
  private _teamsModel = TeamsModel;

  async getListOfTeams(): Promise<TeamsIf[]> {
    const list = await this._teamsModel.findAll();
    return list;
  }

  async getTeamById(id: TeamsIf['id']): Promise<TeamsIf | null> {
    const teamById = await this._teamsModel.findByPk(id);

    return teamById;
  }
}

export default getTheTeams;

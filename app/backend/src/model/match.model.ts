import MatchesModel from '../database/models/MatchesModel';
import AllMatchesIf from '../Interfaces/AllMatchesIf';
import MatchesIf from '../Interfaces/MatchesIf';
import TeamsModel from '../database/models/TeamsModel';

class MatchModel implements AllMatchesIf {
  private _matchModel = MatchesModel;

  async getListOfMatches(): Promise<MatchesIf[]> {
    const list = await this._matchModel.findAll({
      include: [
        {
          association: 'homeTeam',
          model: TeamsModel,
          attributes: ['teamName'],
        },
        {
          association: 'awayTeam',
          model: TeamsModel,
          attributes: ['teamName'],
        },
      ],
    });
    return list;
  }
}

export default MatchModel;

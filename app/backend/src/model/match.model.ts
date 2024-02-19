import MatchPoints from '../Interfaces/MatchPoints';
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

  async updateStatus(id: MatchesIf['id']): Promise<MatchesIf | undefined> {
    const match = await this._matchModel.findByPk(id);

    if (!match) return undefined;
    if (match) {
      await this._matchModel.update({ inProgress: false }, { where: { id: match.id } });
    }
  }

  async updateInProgress(id: MatchesIf['id'], points: MatchPoints): Promise<MatchesIf | undefined> {
    const findMatch = await this._matchModel.findByPk(id);
    if (!findMatch) return undefined;
    if (findMatch) {
      await this._matchModel.update({ homeTeamGoals: points.homeTeamGoals,
        awayTeamGoals: points.awayTeamGoals }, { where: { id: findMatch.id } });
    }
  }
}

export default MatchModel;

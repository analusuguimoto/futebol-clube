import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

import TeamsModel from './TeamsModel';

class MatchesModel extends Model<InferAttributes<MatchesModel>,
InferCreationAttributes<MatchesModel>> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchesModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
    references: {
      model: {
        tableName: 'teams',
      },
      key: 'id',
    },
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
    references: {
      model: {
        tableName: 'teams',
      },
      key: 'id',
    },
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  modelName: 'matches',
  underscored: true,
  timestamps: false,
});

MatchesModel.belongsTo(TeamsModel, {
  foreignKey: 'homeTeamId', as: 'homeTeam',
});

MatchesModel.belongsTo(TeamsModel, {
  foreignKey: 'awayTeamId', as: 'awayTeam',
});

export default MatchesModel;

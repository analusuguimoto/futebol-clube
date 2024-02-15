import { Model, QueryInterface, DataTypes } from 'sequelize';
import UserIf from '../../Interfaces/UserIf';
import { Mode } from 'fs';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<UserIf>>('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};
import { Model, Sequelize, DataTypes } from 'sequelize';
import { ClientAttributes } from '../attributes/clientAttributes';

class Client extends Model implements ClientAttributes {
  id!: string;
  secret!: string;
  public readonly createdAt!: Date;
  public readonly updated!: Date;

  static initModel(sequelize: Sequelize): void {
    Client.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        secret: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
      }
    );
  }
}

export default Client;

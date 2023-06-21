import { db } from '../database/models';
import Client from '../database/models/client';

class ClientService {
  private static instance: ClientService;

  static getInstance(): ClientService {
    if (!ClientService.instance) {
      ClientService.instance = new ClientService();
    }
    return ClientService.instance;
  }

  findById = async (id: string) => {
    const existingClient: Client | null = await db.Client.findByPk(id);
    return existingClient;
  };
}

export default ClientService;

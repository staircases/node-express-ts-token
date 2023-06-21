import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import environment from '../environment';
import ClientService from '../services/clientService';

const router = express.Router();

router.post('/', async (req: Request, resp: Response) => {
  const clientId = req.headers['x-client-id'];
  const clientKey = req.headers['x-secret-key'];
  if (!clientId || !clientKey) {
    resp.status(400).json({ message: 'No client or secret key' });
    return;
  }

  const client = await ClientService.getInstance().findById(clientId as string);
  if (!client) {
    resp.status(404).json({ message: 'Client not found' });
    return;
  }
  if (client.secret != clientKey) {
    resp.status(403).json({ message: 'Incorrect secret key' });
    return;
  }
  const token = jwt.sign({ data: clientId }, environment.TOKEN_SECRET, {
    expiresIn: '30m',
  });
  resp.status(200).json({ access_token: token });
});

export default router;

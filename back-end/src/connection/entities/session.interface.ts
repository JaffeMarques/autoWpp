import { Client } from 'whatsapp-web.js';

export interface SessionInterface extends Client {
  id?: number;
}

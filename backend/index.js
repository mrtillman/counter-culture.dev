import { ClientRepo } from './repos';

export default class Backend {
  
  constructor(access_token){
    this.clientRepo = new ClientRepo(access_token);
  }

  registerClient(client){
    return this.clientRepo.addClient(client);
  }

  getClientSecret(){
    return "client secret";
  }

  updateClientSecret(newSecret){
    return "updated client secret";
  }


}
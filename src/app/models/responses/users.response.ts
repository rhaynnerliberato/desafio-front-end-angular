export class UsersResponse{

  public id?: number;
  public name?: string;
  public img?: string;
  public username?: string;

  constructor(params: Partial<UsersResponse>){

    this.id = params.id;
    this.name = params.name;
    this.img = params.img;
    this.username = params.username;
  }

}

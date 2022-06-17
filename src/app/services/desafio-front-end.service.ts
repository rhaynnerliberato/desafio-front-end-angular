import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersResponse } from '../models/responses/users.response';
import { TransactionPayloadRequest } from "../models/requests/transaction-payload.request";
import { TransactionPayloadResponse } from "../models/responses/transaction-payload.response";

@Injectable({
  providedIn: 'root'
})
export class DesafioFrontEndService{

  constructor(
    private http: HttpClient
  ){ }

  private urlUsers = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";
  private urlTransaction = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";

  listarUsuarios(): Observable<Array<UsersResponse>>{
    return this.http.get<Array<UsersResponse>>(this.urlUsers);
  }

  realizarTransacao(cartao: TransactionPayloadRequest): Observable<TransactionPayloadResponse>{
    const REQUEST = JSON.parse(JSON.stringify(cartao));
    return this.http.post<TransactionPayloadResponse>(this.urlTransaction, REQUEST);
  }

}

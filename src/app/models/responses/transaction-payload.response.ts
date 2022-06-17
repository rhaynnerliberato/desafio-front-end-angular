export class TransactionPayloadResponse{
  public success?: boolean;
  public status?: string;

  constructor(params: Partial<TransactionPayloadResponse>){
    this.success = params.success;
    this.status = params.status;
  }
}

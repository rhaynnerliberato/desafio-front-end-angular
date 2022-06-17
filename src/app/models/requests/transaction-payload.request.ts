export class TransactionPayloadRequest {
  public card_number?: string;
  public cvv?: number;
  public expiry_date?: string;
  public destination_user_id?: number;
  public value?: number;

  constructor(params: Partial<TransactionPayloadRequest>){
    this.card_number = params.card_number;
    this.cvv = params.cvv;
    this.expiry_date = params.expiry_date;
    this.destination_user_id = params.destination_user_id;
    this.value = params.value;
  }
}

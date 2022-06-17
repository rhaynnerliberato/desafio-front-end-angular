import { Component, OnInit } from '@angular/core';
import { UsersResponse } from 'src/app/models/responses/users.response';
import { DesafioFrontEndService } from 'src/app/services/desafio-front-end.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { TransactionPayloadResponse } from '../../models/responses/transaction-payload.response';

@Component({
  selector: 'app-root',
  templateUrl: './desafio-front-end.component.html',
  styleUrls: ['./desafio-front-end.component.scss']
})
export class DesafioFrontEndComponent implements OnInit {

  public usuarios!: Array<UsersResponse>;
  public cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];
  public cartaoSelecionado: any;
  public usuarioSelecionado?: string;
  public formPagamento?: FormGroup;
  public retornoTransacao?: TransactionPayloadResponse;
  public mensagemValidacao?: any;

  constructor(
    private servico: DesafioFrontEndService,
    private dialogRef: MatDialog
  ){  }

  ngOnInit(): void {
      this.buscarUsuarios();
  }

  buscarUsuarios(): void {
    this.servico.listarUsuarios().subscribe(response => {
      this.usuarios = response;
    });
  }

  openModal(modal: any, nome?: string): void {
    this.dialogRef.open(modal);
    this.usuarioSelecionado = nome;
  }

  pagar(dadosPagamento: any, modalFinal: any): void {
    const NUMERO_CARTAO_SELECIONADO = dadosPagamento?.cartao;

    this.cards.forEach(card =>{
      if(card.card_number == NUMERO_CARTAO_SELECIONADO){
        this.servico.realizarTransacao(card).subscribe(response => {
          this.retornoTransacao = response;
          if(NUMERO_CARTAO_SELECIONADO == this.cards[1].card_number){
            this.retornoTransacao.success = false;
          }
          this.validarTransacao(this.retornoTransacao, modalFinal);
        })
      }
    })
  }

  validarTransacao(retornoTransacao: TransactionPayloadResponse, modalFinal: any) {

    if(retornoTransacao.success == true){
      this.mensagemValidacao = {
        mensagem1: `Transacao ${retornoTransacao.status}!`,
        mensagem2: "Pagamento realizado com sucesso!"
      }
      return this.openModalFinal(modalFinal);
    }

    this.mensagemValidacao = {
      mensagem1: `Transacao NAO ${retornoTransacao.status}!`,
      mensagem2: "Nao foi possivel realizar o pagamento."
    }
    return this.openModalFinal(modalFinal);
  }

  openModalFinal(modalFinal: any): void {
    this.dialogRef.open(modalFinal);
  }

  trackByFn(i: any){
    return i?.Codigo;
  }

}

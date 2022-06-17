# Desafio Front-end

Avisos antes de começar

Para a entrega do teste você precisará ter two factor habilitado na sua conta do GitHub, você poderá ver o passo a passo nesse tutorial: https://help.github.com/pt/github/authenticating-to-github/configuring-two-factor-authentication
Com two factor habilitado, você precisa configurar a chave SSH: https://help.github.com/pt/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
Para iniciar o teste, crie uma branch a partir da master nesse padrão de nomenclatura: dd-mm-yy/nome-sobrenome (por exemplo, 30-04-20/meu-nome)
Você poderá consultar o Google, Stackoverflow ou algum projeto particular na sua máquina.
Fique à vontade para perguntar qualquer dúvida aos recrutadores.
Fique tranquilo, respire, assim como você, também já passamos por essa etapa. Boa sorte! :)
Setup do projeto

Angular CLI: 13.3.8
Node: 16.14.2
Angular: 13.3.11

Como Rodar?

Instale as dependências usando o comando npm install
Na raiz do repositório, rode este comando ng serve para iniciar o servidor de desenvolvimento.
A Aplicação estará disponível na porta http://localhost:4200/
Como submeter?

Commite suas alterações de forma organizada
Um dia antes da entrevista será dada permissão para fazer o push/ abrir a pull request, abra uma pull request da sua branch para a master com a nomenclatura: Nome Sobrenome - dd-mm-yy
Obs: Caso não tenha recebido permissão para realizar o push da branch entre em contato com o recrutador e envie seu usuário do GitHub

Objetivo

O objetivo é construir uma aplicação que simula o envio de dinheiro para uma outra pessoa, via cartão de crédito.

Fluxo das telas

Na primeira tela terá uma listagem de usuários, onde a pessoa pode clicar em algum usuário da lista para realizar o pagamento. Quando clicado em um usuário é então aberto um modal de pagamento, contendo as informações do usuário de destino, a opção de selecionar um cartão de crédito e um botão de pagar. O usuário deve então digitar o valor, escolher o cartão e clicar em pagar. Para realização do pagamento deve-se chamar um endpoint de pagamento que aprovará/recusará a transação. E então deve-se mostrar na tela o modal de pagamento concluído com sucesso ou o de erro.


Cartões para exibir

O cartão válido vai aprovar a transação no backend;

let cards = [
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
Transação

Endpoint: https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989

Método: POST

// Payload:

interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}
Obs: Por se tratar de um mock o endpoint sempre retornará o mesmo payload, sucesso no pagamento, independente do cartão

Usuários

Endpoint: https://www.mocky.io/v2/5d531c4f2e0000620081ddce

Método: GET

// Payload:

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}

Diferenciais

Teste unitário / E2E
Melhoria no estilo da aplicação
Validação de formulários e máscaras
Organização do código
Estamos sempre em busca de melhoria, por isso, caso tenha alguma sugestão fique a vontade pra compartilhar com a gente!

Mais uma vez, boa sorte! 💚

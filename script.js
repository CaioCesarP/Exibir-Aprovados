let data = [
  { nome: "Antonio Francisco", idade: 26, aprovado: false, categoria: "A" },
  { nome: "João Alberto", idade: 24, aprovado: true, categoria: "C" },
  { nome: "Vitor Emanuel", idade: 19, aprovado: true, categoria: "A" },
  { nome: "Gustavo Dantas", idade: 20, aprovado: true, categoria: "C" },
  { nome: "Italo Aguiar", idade: 18, aprovado: false, categoria: "B" },
];

function exibirAprovados(data, categoria) {
  let nomes = [];
  data.forEach((obj) => {
    obj.categoria === categoria &&
      obj.aprovado &&
      obj.idade >= 18 &&
      nomes.push(obj.nome);
  });
  console.log(
    `%c-- Usuários aprovados na categoria ${categoria} --`,
    `color: rgba(155, 200, 255);`
  );
  nomes.length > 0
    ? console.log(
        `%c${nomes.join(", ")}\n---------`,
        `color: rgba(00, 255, 00);`
      )
    : console.log(
        "%cNenhum usuário com está categoria aprovado.\n---------",
        `color: rgba(255, 00, 00);`
      );
}

exibirAprovados(data, "A");

exibirAprovados(data, "B");

exibirAprovados(data, "C");

exibirAprovados(data, "D");

// let data = [
//   { nome: "Antonio Francisco", nascimento: "2000-03-26", aprovado: true, categoria: "A" },
//   { nome: "João Alberto", nascimento: "1999-06-19", aprovado: true, categoria: "C" },
//   { nome: "Vitor Emanuel", nascimento: "2022-04-06", aprovado: false, categoria: "A" },
//   { nome: "Gustavo Dantas", nascimento: "2001-11-08", aprovado: true, categoria: "C" },
//   { nome: "Italo Aguiar", nascimento: "2000-10-30", aprovado: false, categoria: "B" },
// ];

// const todayData = () => {
//   var get = new Date();
//   var date = get.getFullYear()+"-"+(get.getMonth()+1)+"-"+get.getDate();
//   return (new Date(date));
// }

// const exibirAprovados = (data, categoria) => {
//   let nomes = [];
//   console.log(todayData() - new Date(data[2].nascimento))
//   console.log(todayData())
//   console.log(new Date(data[2].nascimento));
//   data.forEach((obj) => {
//     let date = new Date(obj.nascimento);
//     obj.categoria == categoria &&
//       obj.aprovado &&
//         nomes.push(obj.nome);
//   });
//   console.log(
//     `%c-- Usuários aprovados na categoria ${categoria} --`,
//     `color: rgba(155, 200, 255);`
//   );
//   nomes.length > 0
//     ? console.log(
//         `%c${nomes.join(", ")}\n---------`,
//         `color: rgba(00, 255, 00);`
//       )
//     : console.log(
//         "%cNenhum usuário com está categoria aprovado.\n---------",
//         `color: rgba(255, 00, 00);`
//       );
// }

// exibirAprovados(data, "A");

// exibirAprovados(data, "B");

// exibirAprovados(data, "C");

// exibirAprovados(data, "D");






const box = document.querySelectorAll(".box");



const changeValuesInterface = () => {
  console.clear();
  let vez = "X";
  
  for(let i = 0; i < 10; i++){
    box[i].addEventListener("click", () => {
      box[i].innerHTML === undefined &&
        vez === "X" 
        ? (
          box[i].innerHTML = "X" &&
          (vez = "O")
        ) 
        : (
          box[i].innerHTML = "O" &&
          (vez = "X")
        )
      console.log(box[i])
    });
  }
}

changeValuesInterface();

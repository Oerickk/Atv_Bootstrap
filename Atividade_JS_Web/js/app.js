//Exercício 01

//MODIFICAR O TEXTO QUE CONSTA NA TAG

//GUARDAR O ELEMENTO DENTRO DA VARIÀVEL
const txt = document.querySelector("#tituloExemplo1");

//PEGANDO O BOTÃO
const btn = document.querySelector("#btnAlterarTexto");

//PEGANDO O BOTÃO RESTAURAR/RESET
const btnReset = document.querySelector("#btnRestaurarTexto");

//addEventListener significa: "FICAR OBSERVANDO/ESCUTANDO ALTERAÇÂO NO PADRÃO DO ELEMENTO"

btn.addEventListener("click", () => {
  txt.textContent = "ALTEROU";
});

//quando clicar ele restaurar
btnReset.addEventListener("click", () => {
  txt.innerHTML = "Texto original";
});

//Exercicio 02
const caixaCor = document.querySelector("#caixaCor");
const btnRestaurarCor = document.querySelector("#btnMudarCor");

btnRestaurarCor.addEventListener("click", () => {
  //Seleciona qual class quero remover o estilo
  caixaCor.classList.remove("alert-primnary");
  caixaCor.classList.add("alert-success");
  caixaCor.textContent = "Minha aparencia mudou!!!";
});

//Exercicio 03
//CAMPO DE TEXTO (jeito do professor)
/*const inputNome = document.querySelector("#nomeAluno");*/
//BTN
const btnSaudar = document.querySelector("#btnSaudar");
//pegar onde vou mostrar a mensagem
const msgAluno = document.querySelector("#mensagemAluno");

btnSaudar.addEventListener("click", () => {
  //Jeito mais fácil, colocando para atribuir o valor na variável assim que a função for executada
  const nome = document.querySelector("#nomeAluno").value;
  const nomeSemEspacos = nome.trim();
  if (nomeSemEspacos === "") {
    msgAluno.textContent = "Digite seu nome para continuar";
    msgAluno.classList.remove("alert-light");
    msgAluno.classList.add("alert-danger");
    //Essencial esse return para que o código entenda que ele deve sair da função assim que acabar, dessa forma aplicando o estilo de fato.
    return;
  }

  mensagemAluno.classList.remove("alert-danger");
  mensagemAluno.classList.add("alert-success");
  mensagemAluno.textContent = `Olá, ${nomeSemEspacos}! seja bem-vindo`;
});

//Exercicio 04
let contador = 0;

const numeroContador = document.querySelector("#numeroContador");
let btnDiminuir = document.querySelector("#btnDiminuir");
let btnAumentar = document.querySelector("#btnAumentar");
let btnZerar = document.querySelector("#btnZerar");

btnAumentar.addEventListener("click", () => {
  contador++;
  numeroContador.textContent = contador;
});

btnDiminuir.addEventListener("click", () => {
  contador--;
  numeroContador.textContent = contador;
});

btnZerar.addEventListener("click", () => {
  contador = 0;
  numeroContador.textContent = contador;
});

//Exercicio 05
const btnDetalhes = document.querySelector("#btnDetalhes");
const painelDetalhes = document.querySelector("#painelDetalhes");

btnDetalhes.addEventListener("click", () => {
  //O toggle() funciona como um interruptor. Se o elemento não existir, ele é adicionado. Se existir, ele é removido
  painelDetalhes.classList.toggle("d-none");
});

//Exercicio 06
const btnCriarItem = document.querySelector("#btnCriarItem");
const listaCriada = document.querySelector("#listaCriada");

btnCriarItem.addEventListener("click", () => {
  //Precisa criar um novo ol a cada click do botão para que sej acumulativo.
  let novoElemento = document.createElement("ol");
  //Adicionando estilo para que não fique somente um texto solto
  novoElemento.classList.add("badge", "text-bg-secondary", "mb-3");
  //Para definir o elemento interno do ol, é preciso chamar textContent
  novoElemento.textContent = "Novo Item!";
  //Serve para colocar um elemento dentro de outro elemento HTML
  listaCriada.appendChild(novoElemento);
});

//Exercicio 07
let inputTarefa = document.querySelector("#inputTarefa");
const btnAdicionarTarefa = document.querySelector("#btnAdicionarTarefa");
let avisoTarefa = document.querySelector("#avisoTarefa");
let listaTarefas = document.querySelector("#listaTarefas");

btnAdicionarTarefa.addEventListener("click", () => {
  let novaTarefa = document.createElement("li");
  novaTarefa.textContent = `${inputTarefa.value}`;
  novaTarefa.classList.add("badge", "text-bg-dark", "mb-3");
  novaTarefa.style.cursor = "pointer";

  novaTarefa.addEventListener("click", () => {
    novaTarefa.remove();
  });

  listaTarefas.appendChild(novaTarefa);
});


const inputFiltro = document.getElementById("inputFiltroProduto");
const produtos = document.querySelectorAll(".produto");

inputFiltro.addEventListener("input", function () {
    const pesquisa = inputFiltro.value.toLowerCase();

    produtos.forEach(function (produto) {
        const nome = produto.querySelector(".nome-produto").textContent.toLowerCase();

        if (nome.includes(pesquisa)) {
            produto.style.display = "";
        } else {
            produto.style.display = "none";
        }

    });

});

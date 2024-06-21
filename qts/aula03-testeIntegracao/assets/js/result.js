const url = window.location.search;
const params = new URLSearchParams(url);
const nome = params.get('nome');
const sobrenome = params.get('sobrenome');
const idade = params.get('idade');
const cpf = params.get('cpf');
const renda = params.get('renda');
if (isNaN(renda)){
    window.location.href = 'index.html';
}

changeInfo();

function changeInfo(){
    let docNome = document.querySelector('#nome');
    let docSobrenome = document.querySelector('#sobrenome');
    let docIdade = document.querySelector('#idade');
    let docCpf = document.querySelector('#cpf');
    let docRendaMensal = document.querySelector('#rendaMensal');
    let docTaxaImposto = document.querySelector('#taxaImposto');
    let docImposto = document.querySelector('#imposto');
    let docSaldoFinal = document.querySelector('#saldoFinal');

    docNome.innerHTML = '<strong>Nome: </strong>' + nome;
    docSobrenome.innerHTML = '<strong>Sobrenome: </strong>' + sobrenome;
    docIdade.innerHTML = '<strong>Idade: </strong>' + idade;
    docCpf.innerHTML = '<strong>CPF: </strong>' + cpf;
    docRendaMensal.innerHTML = '<strong>Renda Mensal: </strong>' + parseFloat(renda).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    docTaxaImposto.innerHTML = '<strong>Taxa de imposto: </strong>' + calcPorcentagem();
    docImposto.innerHTML = '<strong>Imposto a ser pago: </strong>' + calcImposto().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    docSaldoFinal.innerHTML = '<strong>Renda Final: </strong>' + calcSaldoFinal().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

function calcImposto(){
    if (renda <= 2259.20){
        return 0;
    }
    if (renda > 2259.20 && renda <= 2826.65){
        return renda * 0.075;
    }
    if (renda > 2826.65 && renda <= 3751.05){
        return renda * 0.15;
    }
    if (renda > 3751.05 && renda <= 4664.68){
        return renda * 0.225;
    }
    if (renda > 4664.68){
        return renda * 0.275;
    }
}

function calcPorcentagem(){
    if (renda <= 2259.20){
        return '0%';
    }
    if (renda > 2259.20 && renda <= 2826.65){
        return '7,5%';
    }
    if (renda > 2826.65 && renda <= 3751.05){
        return '15%';
    }
    if (renda > 3751.05 && renda <= 4664.68){
        return '22,5%';
    }
    if (renda > 4664.68){
        return '27,5%';
    }
}

function calcSaldoFinal(){
    return renda - calcImposto();
}
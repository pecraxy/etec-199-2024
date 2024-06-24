import requestBuilder from './utils.js';
import ModalHandler from './ModalHandler.js';

const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
const rendaModal = new bootstrap.Modal(document.getElementById('rendaModal'));
const form = document.querySelector(".form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (parseInt(document.querySelector('#cpf').value.length) < 14 || parseInt(document.querySelector('#cpf').value.length) > 14){
        ModalHandler.errorModal({"title": "CPF Inválido", "message": "O CPF digitado é inválido. Escreva novamente."}, errorModal);     
        return;
    }
    let cpf = document.querySelector('#cpf').value;
    let endpoint = 'http://localhost/aula03-testeIntegracao/Controller/usuario.php?cpf=' + cpf;
    console.log(endpoint);
    fetch(endpoint, {
        headers:{'Content-Type': 'application/json'}
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            let pessoa = data[0];
            changeInfo (pessoa);
            rendaModal.show(rendaModal);
        });
});


function changeInfo(data){
    let docNome = document.querySelector('#nome');
    let docSobrenome = document.querySelector('#sobrenome');
    let docIdade = document.querySelector('#idade');
    let docCpf = document.querySelector('#cpfResult');
    let docRendaMensal = document.querySelector('#rendaMensal');
    let docTaxaImposto = document.querySelector('#taxaImposto');
    let docImposto = document.querySelector('#imposto');

    docNome.innerHTML = '<strong>Nome: </strong>' + data.nome;
    docSobrenome.innerHTML = '<strong>Sobrenome: </strong>' + data.sobrenome;
    docIdade.innerHTML = '<strong>Idade: </strong>' + data.idade;
    docCpf.innerHTML = '<strong>CPF: </strong>' + data.cpf;
    docRendaMensal.innerHTML = '<strong>Renda Mensal: R$</strong>' + data.renda_mensal;
    docTaxaImposto.innerHTML = '<strong>Taxa de imposto: </strong>' + data.taxa;
    docImposto.innerHTML = '<strong>Imposto a ser pago: R$</strong>' + data.imposto;
}
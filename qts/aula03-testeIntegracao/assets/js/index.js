import regTax from './regTax.js';
import ModalHandler from './ModalHandler.js';

const form = document.querySelector('.form');
const confirmModal = new bootstrap.Modal(document.getElementById('exampleModal'));
const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
const succesModal = new bootstrap.Modal(document.getElementById('succesModal'));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (parseInt(document.querySelector('#cpf').value.length) < 14 || parseInt(document.querySelector('#cpf').value.length) > 14){
        ModalHandler.errorModal({"title": "CPF Inválido", "message": "O CPF digitado é inválido. Escreva novamente."}, errorModal);     
        return;
    }
    ModalHandler.confirmModal(confirmModal);
});


const confirmBtn = document.querySelector('#btnSim');
confirmBtn.addEventListener('click', () => {
    let valNome = document.querySelector('#name').value;
    let valSobrenome = document.querySelector('#sobrenome').value;
    let valIdade = document.querySelector('#idade').value;
    let valCpf = document.querySelector('#cpf').value;
    let valRenda = document.querySelector('#rendaMensal').value;
    regTax(valNome, valSobrenome, valIdade, valCpf, valRenda)
        .then(res => {
            console.log(res.json());
        })
    ModalHandler.dismiss(confirmModal);
    ModalHandler.succesModal(succesModal);
});




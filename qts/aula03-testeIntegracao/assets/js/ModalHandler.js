class ModalHandler {
    static confirmModal(modal) {
        let nome = document.querySelector('#confirmNome');
        let sobrenome = document.querySelector('#confirmSobrenome');
        let idade = document.querySelector('#confirmIdade');
        let cpf = document.querySelector('#confirmCpf');
        let renda = document.querySelector('#confirmRenda');

        nome.innerHTML = '<strong>Nome: </strong>' + document.querySelector("#name").value;
        sobrenome.innerHTML = '<strong>Sobrenome: </Strong>' + document.querySelector("#sobrenome").value;
        idade.innerHTML = '<strong>Idade: </strong>' + document.querySelector("#idade").value;
        cpf.innerHTML = '<strong>CPF: </strong>' + document.querySelector("#cpf").value;
        renda.innerHTML = '<strong>Renda Mensal: </strong>R$' + document.querySelector("#rendaMensal").value.replace('.', ',');
        modal.show(modal);
    }

    static errorModal(data, modal) {
        let errorTitle = document.querySelector('#errorTitle');
        let errorMessage = document.querySelector('#errorMessage');
        errorTitle.textContent = data.title;
        errorMessage.textContent = data.message;
        modal.show(modal);
    }

    static succesModal(modal) {
        modal.show(modal);
    }

    static dismiss(modal){
        modal.hide(modal);
    }
}

export default ModalHandler;
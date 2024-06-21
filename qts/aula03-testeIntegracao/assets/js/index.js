const form = document.querySelector('.form');
const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
form.addEventListener('submit', (e) => {
    if (parseInt(document.querySelector('#cpf').value.length) < 14){
        alert('O CPF digitado é inválido.');
        e.preventDefault();
        return;
    }
    modal.show(modal);
    changeModalData();
    e.preventDefault();
});

const confirmBtn = document.querySelector('#btnSim');
confirmBtn.addEventListener('click', () => {
    let valNome = document.querySelector('#name').value;
    let valSobrenome = document.querySelector('#sobrenome').value;
    let valIdade = document.querySelector('#idade').value;
    let valCpf = document.querySelector('#cpf').value;
    let valRenda = document.querySelector('#rendaMensal').value;
    var destino = "result.html?nome=" + encodeURIComponent(valNome) 
        + "&sobrenome=" + encodeURIComponent(valSobrenome)
        + "&idade=" + encodeURIComponent(valIdade)
        + "&cpf=" + encodeURIComponent(valCpf)
        + "&renda=" + encodeURIComponent(valRenda);
    window.location.href = destino;
});

function changeModalData(){
    let nome = document.querySelector('#confirmNome');
    let sobrenome = document.querySelector('#confirmSobrenome');
    let idade = document.querySelector('#confirmIdade');
    let cpf = document.querySelector('#confirmCpf');
    let renda = document.querySelector('#confirmRenda');

    nome.innerHTML ='<strong>Nome: </strong>' + document.querySelector("#name").value;
    sobrenome.innerHTML = '<strong>Sobrenome: </Strong>' + document.querySelector("#sobrenome").value;
    idade.innerHTML = '<strong>Idade: </strong>' + document.querySelector("#idade").value;
    cpf.innerHTML = '<strong>CPF: </strong>' + document.querySelector("#cpf").value;
    renda.innerHTML = '<strong>Renda Mensal: </strong>R$' + document.querySelector("#rendaMensal").value.replace('.', ',');
}

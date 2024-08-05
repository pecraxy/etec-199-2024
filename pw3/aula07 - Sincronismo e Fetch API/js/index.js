const form = document.querySelector('.form');
const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cep = document.querySelector('#cep').value;
    console.log(cep);
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
    .then((r) => {
        return r.json();
    })
    .then((r) => {
        console.log(r);
        changeModalData(r);
        modal.show(modal);
    })
    .catch((e) => {
        console.log(e);
        modal.hide(modal);
        alert("CEP inválido, tente novamente.");
    });
});
function changeModalData(r){
    let cep = document.querySelector('#resultCep');
    let logradouro = document.querySelector('#logradouro');
    let complemento = document.querySelector('#complemento');
    let unidade = document.querySelector('#unidade');
    let bairro = document.querySelector('#bairro');
    let localidade = document.querySelector('#localidade');
    let uf = document.querySelector('#uf');
    let ibge = document.querySelector('#ibge');
    let gia = document.querySelector('#gia');
    let ddd = document.querySelector('#ddd');
    let siafi = document.querySelector('#siafi');
    cep.append(r.cep);
    logradouro.append(r.logradouro);
    complemento.append(r.complemento);
    unidade.append(r.unidade);
    bairro.append(r.bairro);
    localidade.append(r.localidade);
    uf.append(r.uf);
    ibge.append(r.ibge);
    gia.append(r.gia);
    ddd.append(r.ddd);
    siafi.append(r.siafi);
}



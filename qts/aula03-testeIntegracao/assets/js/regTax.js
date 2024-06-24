import requestBuilder from './utils.js';

const regTax = (nome, sobrenome, idade, cpf, renda_mensal) => {
    let data = {
        'nome': nome,
        'sobrenome': sobrenome,
        'idade': idade,
        'cpf': cpf,
        'renda_mensal': renda_mensal
    }
    return requestBuilder('POST', data);
}

export default regTax;
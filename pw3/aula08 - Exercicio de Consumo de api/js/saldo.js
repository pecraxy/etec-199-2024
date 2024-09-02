if (!sessionStorage.getItem('saldo')){
    sessionStorage.setItem('saldo', 1000);
    console.log('vazio');
}
var saldo = sessionStorage.getItem('saldo');
const saldoUpdate = (saldo) => {
    sessionStorage.setItem('saldo', saldo);
    $('span#valorSaldo').html(Intl.NumberFormat('pt-BR').format(saldo));
}

$('span#valorSaldo').html(Intl.NumberFormat('pt-BR').format(saldo));


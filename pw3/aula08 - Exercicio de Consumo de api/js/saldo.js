if (!sessionStorage.getItem('saldo')){
    sessionStorage.setItem('saldo', 1000);
    console.log('vazio');
}
const saldo = sessionStorage.getItem('saldo');
$('span#valorSaldo').html(Intl.NumberFormat('pt-BR').format(saldo));
class BalanceService{

    static initBalance(){
        if (!sessionStorage.getItem('saldo')){
            sessionStorage.setItem('saldo', 1000);
            console.log('initing saldo');
        }
    }
    
    static getBalance(){
        this.initBalance();
        return parseInt(sessionStorage.getItem('saldo'));
    }

    static getFormattedBalance(){
        return Intl.NumberFormat('pt-BR').format(this.getBalance());
    }

    static saldoUpdate(value){
        let saldo = this.getBalance() + value;
        sessionStorage.setItem('saldo', saldo);
    }
}

export default BalanceService;

// if (!sessionStorage.getItem('saldo')){
//     sessionStorage.setItem('saldo', 1000);
//     console.log('vazio');
// }
// var saldo = sessionStorage.getItem('saldo');
// const saldoUpdate = (saldo) => {
//     sessionStorage.setItem('saldo', saldo);
//     $('span#valorSaldo').html(Intl.NumberFormat('pt-BR').format(saldo));
// }

// $('span#valorSaldo').html(Intl.NumberFormat('pt-BR').format(saldo));


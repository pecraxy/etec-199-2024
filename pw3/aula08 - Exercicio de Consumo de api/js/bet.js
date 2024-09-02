var bank = 0;
bankUpdate(0);
$('.chip').on('click', function () {
    const value = $(this).attr('data-value');
    const newChip = $(`<div class="chip-aposta chip" data-value="${value}"><img src="./img/bet-chip.png"><div class="text-overlay">${value}</div></div>`);
    if ((parseInt(bank) + parseInt(value)) <= saldo) {
        bankUpdate(value);
        newChip.on('click', function () {
            bankUpdate(-value);
            $('#valorBanco').html(bank);
            $(this).remove();
        });

        // Adicionando a nova div à aposta-container
        $('.aposta-container').append(newChip);
    }
})

function bankUpdate(val) {
    bank += parseInt(val);
    $('#valorBanco').html(bank);
}

$('.btnBet').on('click', function(){
    if (bank > 0){
        saldo -= parseInt(bank);
        console.log(saldo);
        saldoUpdate(saldo);
    }
    $('.betting-container').toggle();
    $('.blackjack-container').fadeIn();
    blackjackStart();
});
var deckId = '';
var playerCards;
var dealerCards;
var playerScore;
var dealerScore;

const blackjackStart = async () => {
    $('.betValue').html(bank);
    const deckResponse = await $.ajax({
        url: 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
        type: 'GET',
        dataType: 'json',
    });
    deckId = deckResponse.deck_id;

    let playerResponse = await drawCards(2, deckId);
    playerCards = playerResponse.cards;

    let dealerResponse = await drawCards(2, deckId);
    dealerCards = dealerResponse.cards;

    playerCards.forEach(card => {
        const newCard = $(`<img src="${card.image}" class="card" style="display: none;">`);
        $('.playerCards').append(newCard);
    });

    dealerCards.forEach((card, index) => {
        let newCard;
        newCard = $(`<img src="${card.image}" class="card" style="display: none;">`);
        if (index === 0){
            newCard = $(`<img src="https://deckofcardsapi.com/static/img/back.png" class="card" style="display: none;">`);
        }
        $('.dealerCards').append(newCard);
    });
    $('img.card').fadeIn();
    $('#hit').removeAttr('disabled');
    $('#stand').removeAttr('disabled');
    dealerScore = calcFirstDealerScore(dealerCards);
    playerScore = calcScore(playerCards);
    $('#dealerScore').html(dealerScore);
    $('#playerScore').html(playerScore);
    if(playerScore === 21){
        flipTurnedCard();
        checkWinner();
    }
}

//HIT
$('#hit').on('click', async function(){
    let cardResponse = await drawCards(1, deckId);
    let card = cardResponse.cards[0];
    const newCard = $(`<img src="${card.image}" class="card" style="display: none;">`);
    $('.playerCards').append(newCard);
    $('img.card').fadeIn();
    playerCards.push(card);
    changePlayerScore();
    flipTurnedCard();
    checkBust();
});

//STAND
$('#stand').on('click', async function(){
    flipTurnedCard();
    while (dealerScore < 17){
        let cardResponse = await drawCards(1, deckId);
        let card = cardResponse.cards[0];
        const newCard = $(`<img src="${card.image}" class="card" style="display: none;">`);
        dealerCards.push(card);
        $('.dealerCards').append(newCard);
        await delay(1000);
        $('img.card').fadeIn();
        changeDealerScore();
    }
    await delay(1000);
    checkWinner();
})

const drawCards = async (amount, deckId) => {
    const response = await $.ajax({
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${amount}`,
        type: 'GET',
        dataType: 'json',
    });
    return response;
}

const calcScore = (cards) => {
    let total = 0;
    let hasAce;
    cards.forEach((card) => {
        let cardValue = valueOfCard(card.value);
        total += cardValue;
        if (card.value === 'ACE') {
            hasAce = true;
        }
    });
    if (total > 21 && hasAce){
        total -= 10;
    }
    return total;
}

const calcFirstDealerScore = (cards) => {
    let total = 0;
    let hasAce;
    cards.forEach((card, index) => {
        if (index === 0){
            total += 0;
        } else{
            let cardValue = valueOfCard(card.value);
            total += cardValue;
        }
        if (card.value === 'ACE') {
            hasAce = true;
        }
    });
    if (total > 21 && hasAce){
        total -= 10;
    }
    return total;
}

const changePlayerScore = () => {
    playerScore = calcScore(playerCards);
    $('#playerScore').html(playerScore);
}

const changeDealerScore = () => {
    dealerScore = calcScore(dealerCards);
    $('#dealerScore').html(dealerScore);
}

const valueOfCard = (value) => {
    if (['JACK', 'QUEEN', 'KING'].includes(value)) {
        return 10;
    } else if (value === 'ACE') {
        return 11;  // Ás inicialmente vale 11
    } else {
        return parseInt(value);
    }
}

const flipTurnedCard = () => {
    let imgDealerCards = $('.dealerCards').children();
    if (imgDealerCards[0].src == 'https://deckofcardsapi.com/static/img/back.png'){
        imgDealerCards[0].src = dealerCards[0].image;
        changeDealerScore();
    }
}

const checkBust = () => {
    if (playerScore > 21){
        alert('busted, dealer wins');
    }
}


const checkWinner = () => {
    if (playerScore == 21 && dealerScore == 21 || playerScore == dealerScore){
        alert('empate');
    }
    if (playerScore == 21 || dealerScore > 21){
        alert('player wins');
    }

    if (dealerScore == 21 || playerScore > 21){
        alert ('dealer wins');
    }

    if (dealerScore != 21 && playerScore != 21){
        if (dealerScore > playerScore){
            alert('dealer wins');
        }
        if (playerScore > dealerScore){
            alert('player wins');
        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
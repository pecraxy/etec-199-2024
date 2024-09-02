var deckId = '';
var playerCards;
var dealerCards;
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

    playerCards.forEach(card => {
        const newCard = $(`<img src="${card.image}" class="card">`);
        $('.playerCards').append(newCard);
    });

    let dealerResponse = await drawCards(2, deckId);
    dealerCards = dealerResponse.cards;

    dealerCards.forEach((card, index) => {
        let newCard;
        newCard = $(`<img src="${card.image}" class="card">`);
        if (index === 0){
            newCard = $(`<img src="https://deckofcardsapi.com/static/img/back.png" class="card">`);
        }
        $('.dealerCards').append(newCard);
    });
}

const drawCards = async (amount, deckId) => {
    const response = await $.ajax({
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${amount}`,
        type: 'GET',
        dataType: 'json',
    });
    return response;
}

const calcPoints = (cards) => {
    let total;
    let hasAce;
    cards.forEach((card) => {
        total += valueOfCard(card.value);
        if (card.value === 'A') {
            hasAce = true;
        }
    });
    if (total > 21 && hasAce){
        total -= 10;
    }
    return total;
}

const valueOfCard = (value) => {
    if (['JACK', 'QUEEN', 'KING'].includes(value)) {
        return 10;
    } else if (value === 'A') {
        return 11;  // Ás inicialmente vale 11
    } else {
        return parseInt(value);
    }
}


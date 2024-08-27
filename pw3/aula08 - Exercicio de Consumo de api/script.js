document.addEventListener('DOMContentLoaded', () => {
    const hitButton = document.getElementById('hit-button');
    const standButton = document.getElementById('stand-button');
    const dealerCards = document.getElementById('dealer-cards');
    const playerCards = document.getElementById('player-cards');

    // Mock function to add cards (replace with API call)
    function addCard(container, card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = card;
        container.appendChild(cardElement);
    }

    // Example usage: adding a card to the player
    hitButton.addEventListener('click', () => {
        addCard(playerCards, 'A♠'); // Replace with card from API
    });

    // Example usage: adding a card to the dealer
    standButton.addEventListener('click', () => {
        addCard(dealerCards, '10♣'); // Replace with card from API
    });
});

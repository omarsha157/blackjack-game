const messageEl = document.getElementById('message-el');
const cardsEl = document.getElementById('cards-el');
const sumEl = document.getElementById('sum-el');
const playerEl = document.getElementById('player-el');

let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let message = "";


function startGame() {
    isAlive = true;
    hasBlackjack = false;
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};

function renderGame() {
    cardsEl.innerText = "cards: "
    for(let i = 0;i < cards.length; i++) {
        cardsEl.innerText += " " + cards[i];
    }
    sumEl.innerText = "sum:" + sum;
    
    if(sum < 21) {
        message = "do you want another card?";
    } else if (sum === 21) {
        message = "you got blackjack";
        hasBlackjack = true;
    } else {
        message = "you lost";
        isAlive = false;
    };
    messageEl.innerText = message;

};

function randomNumber() {
    let ranNum = Math.floor(Math.random()*13) + 1;
    if ( ranNum === 1) {
        return 11;
    } else if ( ranNum > 10) {
        return 10
    } else {
        return ranNum
    }
};


function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = randomNumber();
        sum += card;
        cards.push(card);
        renderGame();
    }
};



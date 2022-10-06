// Constants

const suits = ["d", "c", "h", "s"];
const values = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "K", "Q", "A"];;
const guide = {
    "02": 2,
    "03": 3,
    "04": 4,
    "05": 5,
    "06": 6,
    "07": 7,
    "08": 8,
    "09": 9,
    "10": 10,
    "J": 10,
    "Q": 10,
    "K": 10,
    "A": 11,
}

// Variables

 let dealerScore = 0; 
 let playerScore = 0;

 let playerAceCount = 0;
 let dealerAceCount = 0;

 let playersHand = [];
 let dealersHand = [];

 let hiddenCard;

 let hit = true; //allows the player to draw while sum <= 21

 let deck = [];


 // Cached elements

 const dealButton = document.getElementById("deal");
 const stayButton = document.getElementById("stay");
 const hitButton = document.getElementById("hit");

 const dealerCard1 = document.getElementById("dc1");
 const dealerCard2 = document.getElementById("dc2");
 const dealerCard3 = document.getElementById("dc3");
 const dealerCard4 = document.getElementById("dc4");
 const dealerCard5 = document.getElementById("dc5");

 const playersCard1 = document.getElementById("pc1");
 const playersCard2 = document.getElementById("pc2");
 const playersCard3 = document.getElementById("pc3");
 const playersCard4 = document.getElementById("pc4");
 const playersCard5 = document.getElementById("pc5");


 // Event listeners

 dealButton.addEventListener("click", startGame);
 stayButton.addEventListener("click", stay);
 hitButton.addEventListener("click", hitMe);

// Functions

// initialize()

function buildDeck() {
suits.forEach((suit) => values.forEach(function(value){
        deck.push(suit+value);
      }
))};

function shuffleDeck() {
    deck = deck.sort(() => 0.5 - Math.random());
}

function startGame() {
    // shuffleDeck();

//     dealersHand.push(deck[0]);
//     playersHand.push(deck[1]);
//     dealersHand.push(deck[2]);
//     playersHand.push(deck[3]);

//     setTimeout(() => {
//     dealerCard1.classList.add(deck[0]);
//     // deck.shift();
//     dealerCard1.classList.remove("hidden");

//     // playersHand.push(deck[0]);
//     playersCard1.classList.add(deck[1]);
//     // deck.shift();
//     playersCard1.classList.remove("hidden");

//     // dealersHand.push(deck[0]);
//     dealerCard2.classList.add(deck[2]);
//     // deck.shift();
//     dealerCard2.classList.remove("hidden");

//     // playersHand.push(deck[0]);
//     playersCard2.classList.add(deck[3]);
//     // deck.shift();
//     playersCard2.classList.remove("hidden");
//    }, 500);

    
//     setTimeout(() => {
//         deck.shift();
//         deck.shift();
//         deck.shift();
//         deck.shift();
//     }, 1000);
// }

    dealersHand.push(deck[0]);
    dealerCard1.classList.add(deck[0]);
    deck.shift();
    dealerCard1.classList.remove("hidden");

    playersHand.push(deck[0]);
    playersCard1.classList.add(deck[0]);
    deck.shift();
    playersCard1.classList.remove("hidden");

    dealersHand.push(deck[0]);
    dealerCard2.classList.add(deck[0]);
    deck.shift();
    dealerCard2.classList.remove("hidden");

    playersHand.push(deck[0]);
    playersCard2.classList.add(deck[0]);
    deck.shift();
    playersCard2.classList.remove("hidden");
    
}

// let path = "/card-deck-css/images/";
// let test = "diamonds-r02";
// // /images/diamonds/diamonds-r02

// function pathMaker(card) {
//     let combinedPath = path;
//     let split = card.split("-");
//     combinedPath += split[0];
//     combinedPath += "/" + card + ".svg";
//     console.log(combinedPath)
//     return combinedPath;
// }

// function displayCards() {
    
// }

// function dealersFirstCard() {

// }

// function stay() {


// }
    
//     updateScore();
//     updateDeck();
//     checkScore();
// }

// function checkScore() {
//     if (.points>21){
//         document.getElementById("game-results").innerHTML = "YOU LOST"
//     }
// }

function updateScore() {

}

function updateDeck() {

}

function initialize() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function checkAce() {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function cardValue() {
   
}

function reduceAce(playerScore, playerAceCount) {
    while (playerScore > 21 && playerAceCount > 0) {
        playerScore -= 10;
        playerAceCount -= 1;
    }
    return playerScore;
}

function hitMe() {
    
}

// Constants

const suits = ["d", "c", "h", "s"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"];

// Variables

 let dealerScore = 0;
 let playerScore = 0;

 let playerAceCard = 0;
 let dealerAceCard = 0;

 let playersHand = [];
 let dealersHand = [];

 let hiddenCard;

 let hit = true; 

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

 dealButton.addEventListener("click", initialDeal);
 stayButton.addEventListener("click", stay);
 hitButton.addEventListener("click", hitMe);

// let d2 = document.getElementById("d2")
// d2.style.backgroundImage = "url('/card-deck-css/images/backs/blue.svg')"

// let clickedCard = document.getElementById("d2")

// clickedCard.addEventListener("click", putCard)

// function putCard(){
//     d2.style.backgroundImage = "url('/card-deck-css/images/diamonds/diamonds-r02.svg')"
// }

// Functions

// initialize()

suits.forEach((suit) => values.forEach(function(value){
        deck.push(suit+value);
      }
));

function shuffleDeck() {
    deck = deck.sort(() => 0.5 - Math.random());
}

function initialDeal() {
    // shuffleDeck();

    dealersHand.push(deck[0]);
    playersHand.push(deck[1]);
    dealersHand.push(deck[2]);
    playersHand.push(deck[3]);

    setTimeout(() => {
        dealerCard1.classList.add(deck[0]);
    // deck.shift();
    dealerCard1.classList.remove("hidden");

    // playersHand.push(deck[0]);
    playersCard1.classList.add(deck[1]);
    // deck.shift();
    playersCard1.classList.remove("hidden");

    // dealersHand.push(deck[0]);
    dealerCard2.classList.add(deck[2]);
    // deck.shift();
    dealerCard2.classList.remove("hidden");

    // playersHand.push(deck[0]);
    playersCard2.classList.add(deck[3]);
    // deck.shift();
    playersCard2.classList.remove("hidden");
   }, 500);

    
    setTimeout(() => {
        deck.shift();
        deck.shift();
        deck.shift();
        deck.shift();
    }, 1000);

    // dealersHand.push(deck[0]);
    // dealerCard1.classList.add(deck[0]);
    // deck.shift();
    // dealerCard1.classList.remove("hidden");

    // playersHand.push(deck[0]);
    // playersCard1.classList.add(deck[0]);
    // deck.shift();
    // playersCard1.classList.remove("hidden");

    // dealersHand.push(deck[0]);
    // dealerCard2.classList.add(deck[0]);
    // deck.shift();
    // dealerCard2.classList.remove("hidden");

    // playersHand.push(deck[0]);
    // playersCard2.classList.add(deck[0]);
    // deck.shift();
    // playersCard2.classList.remove("hidden");
    
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

function displayCards() {
    
}

function stay() {

}

function hitMe() {

}


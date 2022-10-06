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
 let turnOver = false;

 let deck = [];

 let player;
 let dealer;

 // Cached elements

 const dealButton = document.getElementById("deal");
 const stayButton = document.getElementById("stay");
 const hitButton = document.getElementById("hit");
 const message = document.getElementById("game-results");

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

initialize()

function buildDeck() {
suits.forEach((suit) => values.forEach(function(value){
        deck.push(suit+value);
      }
))};

function shuffleDeck() {
    deck = deck.sort(() => 0.5 - Math.random());
}

function startGame() {

    if (dealersHand.length === 0) {

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
    }else if (turnOver === true){
        resetGame();
    }
    checkScore();
}

// function resetGame() {

// dealerScore = 0; 
// playerScore = 0;

// playerAceCount = 0;
// dealerAceCount = 0;

// } 

function hitMe() {
    
    if (playersHand.length <= 2 && playerScore < 21) {
        playersHand.push(deck[0]);
        playersCard3.classList.add(deck[0]);
        deck.shift();
        playersCard3.classList.remove("hidden");
        checkScore()
        
    }else if (playersHand.length <= 3 && playerScore < 21){
        
            playersHand.push(deck[0]);
            playersCard4.classList.add(deck[0]);
            deck.shift();
            playersCard4.classList.remove("hidden");
            checkScore()
        
        }else if (playersHand.length <= 4 && playerScore < 21){

            playersHand.push(deck[0]);
            playersCard5.classList.add(deck[0]);
            deck.shift();
            playersCard5.classList.remove("hidden");
            checkScore()

        }else if (playersHand.length <= 5 && playerScore === 21) {
            message.innerHTML = "YOU WON! PRESS DEAL TO PLAY AGAIN";
            resetGame();
            
        }else{
            message.innerHTML = "YOU LOST! PRESS DEAL TO PLAY AGAIN";
            resetGame();
        }
}



function stay() {

    if (dealersHand.length > 2) {

        dealersHand.push(deck[0]);
        dealerCard3.classList.add(deck[0]);
        deck.shift();
        dealerCard1.classList.remove("hidden");
        dealerCard3.classList.remove("hidden");
    
    }
}

function checkScore() {
    let teamPlayerScore = 0;
    let tempDealerScore = 0;

    for(let card of playersHand)
        if (card[1] === "J" || card[1] === "Q" || card[1] === "K" || card[1] === "1") {
            teamPlayerScore += 10;
       
        }else if (card[1] === "0") {
            teamPlayerScore += Number(card[2]);
       
        }else if (card[1] === "A") {
            playerAceCount += 1;
            teamPlayerScore += 11; 
            if (teamPlayerScore > 21 && playerAceCount > 0) {
                teamPlayerScore -= 10;
                playerAceCount -= 1;
            }
       
        }
        if (teamPlayerScore > 21 && playerAceCount < 1) {
            message.innerHTML = "YOU LOST! PRESS DEAL TO PLAY AGAIN";
        }
    
    for(let card of dealersHand)
        if (card[1] === "J" || card[1] === "Q" || card[1] === "K" || card[1] === "1") {
            tempDealerScore += 10;
        }else if (card[1] === "0") {
            tempDealerScore += Number(card[2]);
        }else if (card[1] === "A") {
            dealerAceCount += 1;
            tempDealerScore += 1;
            if (tempDealerScore > 21 && dealerAceCount > 0) {
                tempDealerScore -= 10;
                dealerAceCount -= 1;
            }
        }
        if (tempDealerScore > 21 && dealerAceCount < 1) {
            message.innerHTML = "YOU WON! PRESS DEAL TO PLAY AGAIN";
        }
        
        playerScore = teamPlayerScore;
        dealerScore = tempDealerScore;
        console.log("player", teamPlayerScore)
        console.log("dealer", tempDealerScore)
    }

function checkResults() {

}

function initialize() {
    buildDeck();
    shuffleDeck();
}
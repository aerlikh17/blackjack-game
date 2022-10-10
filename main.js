// Constants

const suits = ["d", "c", "h", "s"];
const values = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "K", "Q", "A"];


// Variables

 let dealerScore = 0; 
 let playerScore = 0;

 let playerAceCount = 0;
 let dealerAceCount = 0;

 let playersHand = [];
 let dealersHand = [];

 let hiddenCard;

 let turnOver = false;
 let deal = false;

 let deck = [];

 // Cached elements

 const dealButton = document.getElementById("deal");
 const stayButton = document.getElementById("stay");
 const hitButton = document.getElementById("hit");

 const message = document.getElementById("game-results");

 const dealersResult = document.getElementById("dealers-score");
 const playersResult = document.getElementById("players-score");

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

 dealButton.addEventListener("click", resetGame);
 stayButton.addEventListener("click", () => {if (deal) stay()});
 hitButton.addEventListener("click", () => {if (deal) hitMe()});

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
deal = true;

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
    checkScore()

    dealButton.innerHTML = "RESET";
}

function resetGame() {
    
    turnOver = false;

    dealersHand = [];
    playersHand = [];

    playerScore = 0;
    dealerScore = 0;

    playerAceCount = 0;
    dealerAceCount = 0;

    dealersResult.innerHTML = "";
    playersResult.innerHTML = "";

    dealerCard1.className = "card hidden back-red";
    dealerCard2.className = "card hidden";
    dealerCard3.className = "card hidden";
    dealerCard4.className = "card hidden";
    dealerCard5.className = "card hidden";

    playersCard1.className = "card hidden";
    playersCard2.className = "card hidden";
    playersCard3.className = "card hidden";
    playersCard4.className = "card hidden";
    playersCard5.className = "card hidden";

    deal = false;

    deck = [];
    message.innerHTML = "";
   
    initialize()
    startGame()

}

function hitMe() {

    if (playersHand.length <= 2 && playerScore < 21 && dealerScore < 21) {
        playersHand.push(deck[0]);
        playersCard3.classList.add(deck[0]);
        deck.shift();
        playersCard3.classList.remove("hidden");
        checkScore()
        
    }else if (playersHand.length <= 3 && playerScore < 21 && dealerScore < 21){
        
            playersHand.push(deck[0]);
            playersCard4.classList.add(deck[0]);
            deck.shift();
            playersCard4.classList.remove("hidden");
            checkScore()
        
        }else if (playersHand.length <= 4 && playerScore < 21 && dealerScore < 21){

            playersHand.push(deck[0]);
            playersCard5.classList.add(deck[0]);
            deck.shift();
            playersCard5.classList.remove("hidden");
            checkScore()

        }else{
            message.innerHTML = "YOU LOST! PRESS RESET BUTTON TO PLAY AGAIN";
        }
}


function stay() {

turnOver = true;

if (dealerScore < 17) {
    if (dealersHand.length <= 2 && playerScore < 21 && dealerScore < 21) {
            dealersHand.push(deck[0]);
            dealerCard3.classList.add(deck[0]);
            deck.shift();
            dealerCard1.classList.remove("back-red");
            dealerCard3.classList.remove("hidden");
            checkScore();

        }else if (dealersHand.length <= 3 && playerScore < 21 && dealerScore < 21) {
                dealersHand.push(deck[0]);
                dealerCard4.classList.add(deck[0]);
                deck.shift();
                console.log("hidden else if")
                dealerCard4.classList.remove("hidden");
                checkScore();

        }else if (dealersHand.length <= 4 && playerScore < 21 && dealerScore < 21) {
            dealersHand.push(deck[0]);
            dealerCard5.classList.add(deck[0]);
            deck.shift();
            dealerCard5.classList.remove("hidden");
            checkScore();
        }
    }else{
        dealerCard1.classList.remove("back-red");
        checkScore();
    }
}

function checkScore() {
    let tempPlayerScore = 0;
    let tempDealerScore = 0;

    for (let card of playersHand)
        if (card[1] === "J" || card[1] === "Q" || card[1] === "K" || card[1] === "1") {
            tempPlayerScore += 10;
       
        }else if (card[1] === "0") {
            tempPlayerScore += Number(card[2]);
       
        }else if (card[1] === "A") {
            playerAceCount += 1;
            tempPlayerScore += 11; 
            if (tempPlayerScore > 21 && playerAceCount > 0) {
                tempPlayerScore -= 10;
                playerAceCount -= 1;
            }
        }
    
    for (let card of dealersHand)
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
            message.innerHTML = "YOU WON! PRESS RESET BUTTON TO PLAY AGAIN";
        }

        if (tempPlayerScore === 21) {
            message.innerHTML = "YOU GOT BLACKJACK! PRESS RESET BUTTON TO PLAY AGAIN";
        }

        if (tempDealerScore === 21) {
            message.innerHTML = "DEALER GOT BLACKJACK! PRESS RESET BUTTON TO PLAY AGAIN";
        }

        if (tempPlayerScore < 21 && tempDealerScore > 21) {
            message.innerHTML = "DEALER LOST! PRESS RESET BUTTON TO PLAY AGAIN";
        }

        if (tempPlayerScore >= 22 && tempDealerScore < 21){
              message.innerHTML = "YOU LOST! PRESS RESET BUTTON TO PLAY AGAIN";
        }

        if (tempPlayerScore === tempDealerScore) {
            message.innerHTML = "IT'S A TIE! PRESS RESET BUTTON TO PLAY AGAIN";
        }


        playerScore = tempPlayerScore;
        dealerScore = tempDealerScore;
       
        console.log("turnover", turnOver)

        if (turnOver === false) {
            console.log("trigger")
            console.log(dealerScore - firstDealerCard(dealersHand[0]))
            dealersResult.innerHTML = dealerScore - firstDealerCard(dealersHand[0]);
        }else{
            console.log("total score")
            dealersResult.innerHTML = dealerScore;
        }

        playersResult.innerHTML = playerScore;

    }

function initialize() {
    buildDeck();
    shuffleDeck();
}

function firstDealerCard(card) {

    let tempScore = 0;

    if (card[1] === "J" || card[1] === "Q" || card[1] === "K" || card[1] === "1") {
        tempScore += 10;
    }else if (card[1] === "0") {
        tempScore += Number(card[2]);
    }else if (card[1] === "A") {
        dealerAceCount += 1;
        tempScore += 1;
        if (tempScore > 21 && dealerAceCount > 0) {
            tempScore -= 10;
            dealerAceCount -= 1;
        }
    }

    return tempScore;
}

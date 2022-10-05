# Project #1 - Blackjack (HTML/CSS/JS)

### Contents

- Game Description
- Wireframe
- Pseudocode 

### Game Description

Blackjack consists of 52 cards and 2 players: a player and a dealer. The goal of the game is to beat the dealer. There are a few ways to do so:
1. Get as close to 21 points as possible.
2. Get a Blackjack (21 points) on your first two cards.

A player loses if:
1. The dealer gets closer to 21 points than you at the end of the round.
2. If a player has more than 21 points.
3. If the dealer's hand value goes over 21 points.

Draw happens when:
1. Both players have the same points on their hands.

Card's values: 

* Aces can be either 1 or 11 points - the player chooses the value;
* Points for all other cards are their face value;
* K, Q, J are 10 points cards;

To sum up, the rules for winning/losing are:

- A player that goes bust (more than 21 points) loses 
- A player with more points (but less than 21) wins
- If players have the same score, it is a draw
- A player that gets Blackjack automatically wins
- If both the dealer and the player have the same value on hands, it is a draw

Rules of the game:
1. Both players get 2 cards. Dealer's first card is hidden. 
2. Player goes first and they have an option to "hit" to get more cards or "stay" to skip the round. There is no limit on the number of cards you can take. 
3. Dealer flips the first card. If dealer's total hand value is 16 or under they have to take another card. If it is 17 or higher, they have to "stay" with their hand. 

### Wireframe

[Link](https://imgur.com/kO1XgYv)

### Pseudocode

### This is how the game goes:

1. Cards are dealt (initialize())
2. Cards are displayed and showed to the player, and score is shown 
3. Dealer's cards are shown
4. Score is shown
5. Total is calculated
6. Hit or stay (player)
7. Hit or stay (dealer)
8. New cards
9. If ace is up, player can choose 1 or 11


First steps:
1. Define constants
- Cards
- Card values

2. Define variables with no value assigned 
- Player
- Current Score 
- Deck 

3. Select and save cache elements that will be used throughout the code multiple times

4. Add event listeners


Functions:
1. Invoke initialize function 
2. Function for building a deck (render()) (making an array of 52 card objects) - needs to be randomized
3. Function for initial user interaction
4. Game starts with shuffle deck function - 2 cards to dealer (one is facing down), 2 to player
5. Display result + message (win/lose)

If user "hits":
1. Shuffle card function again
2. Display result + message (win/lose)
3. Bust -> win message

If user "stands":
1. If dealer total is less than player's: draw until it is not
2. Display result + message (win/lose)

Functions:
1. initialize()
2. shuffleDeck()
3. dealCards()
- initial deal
5. hitMe() 
6. stay()
7. checkScore()
8. updateDeck()
9. chooseValue()
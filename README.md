# Project #1 - Blackjack (HTML/CSS/JS)

### Contents

- Game Description
- Wireframe
- Pseudocode 

### Game Description

Blackjack consists of 52 cards and 2 players: a player and a dealer. The goal is to get as close to 21 points as possible. If a player has more than 21 points, they lose. 

* Aces can be either 1 or 11 points;
* Other cards, points are the face value of each card;
* K, Q, J are 10 points cards;

1st round of the game: both players get 2 cards. Dealer's first card is hidden. 

Player can only choose between 3 actions: "hit", "stay" or "restart"

Rules for winning/losing:

- A player that goes bust (more than 21 points) loses 
- A player with more points (but less than 21) wins
- If players have the same score, it is a draw
- A player that gets Blackjack wins


### Wireframe

[Link](https://imgur.com/kO1XgYv)

### Pseudocode

### This is how the game goes:

1. Cards are dealt
2. Cards are displayed and showed to the player, and score is shown
3. Dealer's cards are shown
4. Score is shown
5. Total is calculated
6. Hit or stay (player)
7. Hit or stay (dealer)
8. New cards


First steps:
1. Define constants
- Points for each card
2. Define variables with no value assigned (e.g. player, dealer)
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



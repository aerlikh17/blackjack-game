# Project #1 - Blackjack 

### _Contents_

- Game description
- Technologies used
- Gettin started
- Next steps 

### _Game description_

Blackjack consists of 52 cards and 2 players: a player and a dealer. The goal of the game is to beat the dealer. The easiest way to do so is to get as close to 21 points as possible before the dealer or get a Blackjack (21 points exactly).

A player loses if:
1. The dealer gets closer to 21 points than the player at the end of the round.
2. If a player has more than 21 points.
3. If the dealer's hand value goes over 21 points.

It's a tie when:
1. Both players have the same points on their hands.

Card's values: 
* Aces can be either 1 or 11 points - the player chooses the value;
* Points for all other cards are their face value;
* K, Q, J are 10 points cards;

Basic rules of the game:
1. Both players get 2 cards. Dealer's first card is hidden. 
2. Player goes first and they have an option to "hit" to get more cards or "stay" to skip the round. There is no limit on the number of cards you can take. 
3. Dealer flips the first card. If dealer's total hand value is 16 or under they have to take another card. If it is 17 or higher, they have to "stay" with their hand. 

### _Game screenshots:_

_This is how the game board looks when first cards are dealt:_
![Game Screenshot](/images/blackjack-game.png "Blackjack Game") 

&nbsp;

_An example of a lose situation (player lost as they got more than 21 points in the second round):_
![Game Screenshot](/images/blackjack-game-lost.png "Blackjack Game Loose Situation")

&nbsp;


### _Technologies used_

For this project, I used HTML, CSS and JavaScript.

### _Getting started_

Instructions on how to play the game:

1. To start the game, click on the "DEAL" button. 
2. If both yours and dealer's score is below 21, you can choose to "HIT" or "STAY".
3. You can click "HIT" as many times as you want as long as your score is below 21. 
4. If you choose to "STAY" and dealer's score is below 17, dealer's first card will be revealed and they will take another card. 
5. Alternatively, if you choose to "STAY" and dealer's score is above 17, only dealer's first card will be revealed but they will not get a third card. 
6. Follow messages on the bottom of the game board. For example, press "RESET" to start the game again. 

The link to the game is below. 

[Click here to play](https://aerlikh17.github.io/blackjack-game/)

### _Next steps_

* Add sounds to: buttons when clicked, win/loose messages.
* Option to place bets to make game more interactive. 
* Render cards in real time (so that you can have as many cards displayed as needed) instead of having a fixed number of 5 cards per player. Even though a chance of going over 5 cards is small, it is still possible. 
* Add media queries to CSS to make it mobile screen size compatible. 





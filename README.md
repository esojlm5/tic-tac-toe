## About The Project

TicTacToe game


### Built With

This section should list any major frameworks/libraries use. Here are a few examples.

* React
* Nextjs
* Mongodb
* Typescript
* uuid
* mongoose

## Getting Started

This is an example of how you may give instructions on setting up your project locally.

- The application is connected to a mongodb and the environments are on next.config.js you can change it to other mongodb, the connection is located 'db.Connect.ts' file
- The view are located in path http://localhost:3000/tictac
- The service are located in 'api/tic-tac-toe/play.ts'

## Logic to Create a Game

- The game start automatically the backend service will create a game with 'partidaId' using uuid,the bot can start first or not, for now the bot is 'O' and user marktype is 'X', after the game started you can pick any '-' square and the validation will execute from backend service there we are saving the movements in a field 'historial' also we are saving 'estadoTablero' while we are playing,

![create game](https://github.com/esojlm5/tic-tac-toe/blob/main/screens/create-game.png)
## Logic to get a Winner

We have a function where validated the winner with possibles positions in tictactoe squares(utils/winnerValidator.ts) if we found a winner return a object 'winner' with two keys positions(positions winners) and markType(can be 'X' or 'O') if not or is a draw return the object 'winner' empty

![winner game](https://github.com/esojlm5/tic-tac-toe/blob/main/screens/winner-game.png)

## Reset Game

Here we can reset the game when you clicked 'jugar denuevo' we are passing the 'siguienteMoviento' with object {deshacer: true} and service will reset the game

## Get a Game

We can get a game to check your historial retrieving a fetch with {'partidaId': 'xxxxx'}

## Methods API

we have two methods for now 'GET' and 'POST' the endpoint is http://localhost:3000/api/tic-tac-toe/play

- to create a game can send a fetch 'POST' methods with empty body {}
- to get a game to check your historial retrieving a fetch 'GET' method with {'partidaId': 'xxxxx'}

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* NodeJS latest versions
* npm install -g
* npm install -g yarn


### Installation

1. clone the project
2. yarn install
3. yarn dev

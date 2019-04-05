# 🎲 Tic Tac Toe

> A TDD Workshop

## Introduction

This project contains a simple implementation of a [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game. We created it together but it's not yet finished. It's up to you to continue from this point and finish implementing the different parts of the game.

May the force be with you.

## So far we:

- Started off with E2E tests for a basic happy flow: From registration to a game between two players until the game is finished with first player winning the game.
- Moved code to new components and remove code duplication. Tests are still green ✅.
- Added simple validation logic to the registration phase and tested it with component tests.
- Refactored game logic to a separate function and tested it with unit tests.

### Now it's up to you to:

- Complete second player winning logic.
- Complete game logic (rows, columns, diagonals, and tie).
- What happens when you click an already occupied cell?
- Show the player currently playing in bold.
- Show the name of the player who won when the game is finished. What happens in case of a tie?
- What happens if you enter the name "a"? That doesn't sound like a normal name. Make sure you only allow players with normal names 😈.

### Instructions

Start by forking this repository ([how do I fork?](https://help.github.com/articles/fork-a-repo/)) and clone your forked repo.

Next, install dependencies by running:

```sh
npm install
```

Then, start the app in one terminal by running:

```sh
npm start
```

With another terminal, run your tests in watch mode (tip: use CMD + d):

```sh
npx jest --watch
```

### Addiotional links

- [React testing library](https://testing-library.com/docs/intro)
- [Puppeteer API reference](https://github.com/GoogleChrome/puppeteer/blob/v1.12.2/docs/api.md)
